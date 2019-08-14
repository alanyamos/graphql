import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        users: []
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const response = await fetch('http://localhost:3000/user?QUERY={ users{id,name,age,knowledge{language,frameworks}} }', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      // body: JSON.stringify({query: "{ users{id,name,age,knowledge{language,frameworks}} }"})
    });
    console.log(response);
  }

  render() {

    let { users } = this.state; 

    return (
      <div className="App">
        <ul>
          {users.map(user => (
            <li>user.name</li>
          ))}
        </ul>
      </div>
    )
  }
}
