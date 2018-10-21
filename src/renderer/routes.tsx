import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HeroesPage } from './pages/heroes/HeroesPageContainer'
import { HeroMatchPage } from './pages/heroMatch/HeroMatchPageContainer'
import { MainPage } from './pages/main/mainPage'

export const Routes: React.SFC = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/heroes" component={HeroesPage} />
    <Route path="/heroes/:heroId" component={HeroMatchPage} />
  </Switch>
)
