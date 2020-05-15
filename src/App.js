  import React, { Component } from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
  import Experience from './components/Experience';
  import Skills from './components/Skills';
  import Contact from './components/Contact'

  // Animations
  import WOW from 'wow.js'



  class App extends Component {
    state = {
      title: 'Aws monstre'
        }

        // Animations
    componentDidMount() {
      new WOW().init();
    }

    render() {
      return (
        <Router>
          <Switch>
            <Route exact path='/' >
              <NavBar />
              <Home/>
              <About/>
              <Experience/>
              <Skills/>
              <Contact />
            </Route>
          </Switch>
        </Router>

      );
    }

  }

  export default App;
