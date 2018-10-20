// import { ApplicationState, ConnectedReduxProps } from '../../store'

// import { bindActionCreators, Dispatch } from 'redux'
// import { compose, lifecycle } from 'recompose'
// import { fetchRequest } from '../../store/hero/actions'
// import { HeroesPageView } from './HeroesPageView'
// import { connect } from 'react-redux'
// import { Hero } from '../../store/hero/types';

// interface PropsFromState {
//   loading: boolean
//   data: Hero[]
//   errors: string
// }

// interface PropsFromDispatch {
//   fetchRequest: typeof fetchRequest
// }

// type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

// const mapStateToProps = (state: ApplicationState) => ({
//   loading: state.hero.loading,
//   data: state.hero.data,
//   error: state.hero.error,
// })

// const mapDispatchToProps = (dispatch: Dispatch) =>
//   bindActionCreators(
//     {
//       dispatchFetch: () => fetchRequest(),
//     },
//     dispatch
//   )

// export const HeroesPageContainer = compose(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   ),
//   lifecycle<AllProps, {}>({
//     componentDidMount: () => {
//       this.props.dispatchFetch()
//     }
//   })
// )(HeroesPageView)
