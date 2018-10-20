import * as React from 'react'
import { PropsFromState } from './HeroesPageContainer'
import { API_ENDPOINT } from '../../utils/callApi';

export const HeroesPageView: React.SFC<PropsFromState> = ({ loading, data, errors }) => (
  <tbody>
    {loading && <p>loading...</p>}
    {errors && <p>{errors}</p>}
    {data.map(hero => (
      <tr key={hero.id}>
        <p>{hero.name}</p>
        <td>{hero.roles.join(', ')}</td>
        <td><img src={`${API_ENDPOINT}${hero.icon}`}/></td>
      </tr>
    ))}
  </tbody>
)
