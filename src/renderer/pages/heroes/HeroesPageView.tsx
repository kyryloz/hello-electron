import * as React from 'react'
import { Link } from 'react-router-dom'
import { PropsFromState } from './HeroesPageContainer'

export const HeroesPageView: React.SFC<PropsFromState> = ({ loading, data, errors }) => (
  <tbody>
    {loading && <p>loading...</p>}
    {errors && <p>{errors}</p>}
    <Link to="/">BACK</Link>
    {data.map(hero => (
      <tr key={hero.id}>
        <td>
          <Link to={`/heroes/${hero.id}`}>{hero.localized_name}</Link>
        </td>
        <td>{hero.roles.join(', ')}</td>
      </tr>
    ))}
  </tbody>
)
