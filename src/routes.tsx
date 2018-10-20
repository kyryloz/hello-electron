import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainPage } from './pages/main/mainPage'

export const Routes: React.SFC = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/heroes" component={MainPage} />
  </Switch>
)
