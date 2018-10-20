import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ApplicationState, ConnectedReduxProps } from '../../store'
import { fetchRequest } from '../../store/hero/actions'
import { Hero } from '../../store/hero/types'
import { HeroesPageView } from './HeroesPageView'

export interface PropsFromState {
  loading: boolean
  data: Hero[]
  errors: string
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

const mapStateToProps = (state: ApplicationState) => ({
  loading: state.hero.loading,
  data: state.hero.data,
  error: state.hero.error,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest()),
})

class HeroesPageContainer extends React.Component<AllProps> {
  componentDidMount() {
    this.props.fetchRequest()
  }

  render() {
    return <HeroesPageView {...this.props} />
  }
}

export const HeroesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroesPageContainer)
