import * as React from 'react'
import { API_ENDPOINT } from '../../utils/callApi'
import { PropsFromState } from './HeroesPageContainer'

export const HeroesPageView: React.SFC<PropsFromState> = ({ loading, data, errors }) => (
  <tbody>
    {loading && <p>loading...</p>}
    {errors && <p>{errors}</p>}
    {data.map(hero => (
      <tr key={hero.id}>
        <td>{hero.name}</td>
        <td>{hero.roles.join(', ')}</td>
        <td>
          <img src={`${API_ENDPOINT}${hero.icon}`} />
        </td>
      </tr>
    ))}
  </tbody>
)
