import React from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Box } from "@material-ui/core";
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import '../App.css';
import earth from '../earth.png';

class TextFielder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vardas: '',
            alga: '',
            dataIsSending: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ dataIsSending: true });
        await axios.post('https://backextestex.herokuapp.com/rest/users/insert', { "alga": this.state.alga, "vardas": this.state.vardas })
            .then(data => this.setState({ dataIsSending: false }));
    } catch(error) {
        console.log(error);
    };


    render() {
        const { dataIsSending } = this.state;
        if (dataIsSending === true) {
            return (
                <div>
                    <img src={earth} className="App-logo" alt="logo" />
                    <br></br> <h2>Sending data...</h2>
                </div>);
        } else {
            return (
                <div>
                    <Paper>
                        <h1>Enter your data:</h1>
                        <form onSubmit={this.handleSubmit}>
                            <h4>Name:</h4>
                            <TextField
                                required
                                label="Name"
                                name="vardas"
                                defaultValue={this.state.vardas}
                                onChange={this.handleInputChange} s
                                variant="outlined"
                            />
                            <br />
                            <h4>Wage:</h4>
                            <TextField
                                required
                                type="number"
                                label="Wage"
                                name="alga"
                                defaultValue={this.state.alga}
                                onChange={this.handleInputChange}
                                variant="outlined"
                            />
                            <br />
                            <Box m={2}><Button type="submit" variant="outlined">Submit</Button></Box>
                        </form>
                    </Paper>
                </div>
            );
        }
    }
}

export default TextFielder;