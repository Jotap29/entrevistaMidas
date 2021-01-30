import React from 'react';
import { BrowserRouter as  Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Panel from './pages/Panel'
export default function App() {
 
  return(
    <div>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/panel' component={Panel}/>
      </Switch>
    </div>
  )
}