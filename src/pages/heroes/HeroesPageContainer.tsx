import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ApplicationState, ConnectedReduxProps } from '../../store'
import { HeroesPageView } from './HeroesPageView'
import { fetchRequest } from '../../store/heroes/actions';
import { Hero } from '../../store/heroes/types';

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
  loading: state.heroes.loading,
  data: state.heroes.data,
  error: state.heroes.error,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest()),
})

class HeroesPageContainer extends React.PureComponent<AllProps> {
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
