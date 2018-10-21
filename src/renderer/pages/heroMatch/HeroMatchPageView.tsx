import * as React from 'react'
import { Link } from 'react-router-dom'
import { PropsFromState } from './HeroMatchPageContainer'

export const HeroMatchPageView: React.SFC<PropsFromState> = ({ loading, data, error }) => (
  <div>
    {loading || !data ? (
      <p>loading...</p>
    ) : (
      <div>
        <Link to="/heroes">BACK</Link>
        <p>{data[0].league_name}</p>
      </div>
    )}
    {error && <p>{error}</p>}
  </div>
)
