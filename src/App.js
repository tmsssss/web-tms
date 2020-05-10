import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css'
import './css/animate.css'
import './css/aos.css'
import './css/styles.css'
import './css/responsive.css'
import './css/icons/font-awesome-4.7.0/css/font-awesome.min.css'


import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';

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
  componentDidMount(){
    document.body.classList.add('black-bg')
    document.body.classList.add('dark-vertion')
  }
  render() {
    return (
      <div className="" >
        <NavBar/>
        <Home/>
        <About/>
        <Services/>
        <Skills/>
      </div>
    );
  }

}

export default App;
