import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Info';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';
import s from '../style/app.style.js'

const App = props => {
  return (
    <div style={s.root}>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;