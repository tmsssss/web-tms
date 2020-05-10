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
    title: 'Aws monstre',
    isDark: true
  }

  handleChange = (event) => {
    const title = event.target.value
    this.setState({
      title
    })
  }

  handleDarkMode = () => {
    if(this.state.isDark === true){
      localStorage.setItem('darkmode', false)
      document.body.classList.remove('black-bg')
      document.body.classList.remove('dark-vertion')
      document.body.classList.add('white-vertion')
      let isDark = !this.state.isDark
      this.setState({ isDark })
    }else{
      localStorage.setItem('darkmode', true)
      document.body.classList.add('black-bg')
      document.body.classList.add('dark-vertion')
      document.body.classList.remove('white-vertion')
      let isDark = !this.state.isDark
      this.setState({ isDark })
    }
    
  }
  componentDidMount(){
    document.body.classList.add('black-bg')
    document.body.classList.add('dark-vertion')
  }
  render() {
    return (
      <div className="" >
        <NavBar darkMode={ this.handleDarkMode } toggle={this.state.isDark} />
        <Home/>
        <About/>
        <Services/>
        <Skills/>
      </div>
    );
  }

}

export default App;
