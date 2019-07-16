import React from "react";

class StudentApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/students')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const {data } = this.state;
    if(data){ return (
        <div>
        {data.map(item => (
          <li key={item.id}>
            {item.id} {item.name}{item.course}
          </li>
        ))}
      </div>
    );
        }else{
         return (<div>Data yra null</div>);
        }
    }
  }


export default StudentApi;