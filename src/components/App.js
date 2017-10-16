import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Tabs/Home';
import Info from './Tabs/Info';
import Projects from './Tabs/Projects';
import Contact from './Tabs/Contact';
import Navbar from './Navbar';
import PageNotFound from './Tabs/PageNotFound';
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
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;