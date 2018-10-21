import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Dispatch } from 'redux'
import { ApplicationState, ConnectedReduxProps } from '../../store'
import { HeroMatchPageView } from './HeroMatchPageView'
import { HeroMatch } from '../../store/heroMatch/types'
import { fetchRequest } from '../../store/heroMatch/actions'

export interface PropsFromState {
  loading: boolean
  data: HeroMatch
  error: string
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

interface RouteParams {
  heroId: string
}

type AllProps = PropsFromState &
  PropsFromDispatch &
  RouteComponentProps<RouteParams> &
  ConnectedReduxProps

const mapStateToProps = (state: ApplicationState) => ({
  loading: state.heroMatch.loading,
  data: state.heroMatch.data,
  error: state.heroMatch.error,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: (heroId: number) => dispatch(fetchRequest(heroId)),
})

class HeroMatchPageContainer extends React.PureComponent<AllProps> {
  componentDidMount() {
    this.props.fetchRequest(Number(this.props.match.params.heroId))
  }

  render() {
    return <HeroMatchPageView {...this.props} />
  }
}

export const HeroMatchPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroMatchPageContainer)
