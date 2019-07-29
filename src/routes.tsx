import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './views/home'

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
