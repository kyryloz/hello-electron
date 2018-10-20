import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HeroesPage } from './pages/heroes/HeroesPageContainer'
import { MainPage } from './pages/main/mainPage'

export const Routes: React.SFC = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/heroes" component={HeroesPage} />
  </Switch>
)
