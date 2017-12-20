import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Tabs/Home';
import Resume from './Tabs/Resume';
import Projects from './Tabs/Projects';
import Contact from './Tabs/Contact';
import Navbar from './Navbar';
import NotFound from './Tabs/NotFound';
import s from '../style/js/app.style.js'

class App extends Component {
  render() {
    return (
      <div style={s.root}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;