import React from "react";
import earth from '../earth.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../App.css';
import { Button } from "@material-ui/core";
import axios from 'axios';

class StudentApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      dataIsSending: false,
      dataReceived: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  async componentDidMount() {
    try {
      await fetch('http://localhost:9096/rest/users/all')
        .then(response => response.json())
        .then(data => this.setState({ data }));
    } catch (error) {
      console.log(error);
    }
  }


  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ dataIsSending: true });
    try {
      await axios.delete('http://localhost:9096/rest/users/delete')
    } catch (error) {
      console.log(error);
    };
    try {
      await fetch('http://localhost:9096/rest/users/all')
        .then(response => response.json())
        .then(data => this.setState({ data }))
        .then(this.setState({ dataIsSending: false }))
    } catch (error) {
      console.log(error);
    };
  };

  render() {
    const { data } = this.state;
    const { dataIsSending } = this.state;

    if (data != null && dataIsSending === false) {
      return (
        <div>
          <h2>Table of data:</h2>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="right">Nr.</TableCell>
                  <TableCell align="right">Vardas</TableCell>
                  <TableCell align="right">Alga</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(row => (
                  <TableRow key={row.name}>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.salary}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button onClick={this.handleSubmit} variant="outlined">Delete all</Button>
          </Paper>
        </div>
      );
    } else {
      return (
        <div>
          <img src={earth} className="App-logo" alt="logo" />
          <br></br> <h2>Loading...</h2>
        </div>);
    }
  }
}


export default StudentApi;