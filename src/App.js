import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    title: 'Aws monstre'
  }

  handleChange = (event) => {
    const title = event.target.value
    this.setState({
      title
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            {this.state.title}
          </p>
  
          <input onChange={this.handleChange} type="text" placeholder='modif' />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
