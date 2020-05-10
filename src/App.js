import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css'
import './css/animate.css'
import './css/aos.css'
import './css/styles.css'
import './css/responsive.css'




import NavBar from './components/NavBar';
import Home from './components/Home';

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
      <div className="dark-vertion black-bg">
        <NavBar/>
        <Home/>
      </div>
    );
  }

}

export default App;
