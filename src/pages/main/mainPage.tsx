import * as React from 'react'
import { Link } from 'react-router-dom'

export const MainPage = () => (
  <div>
    <h1>Welcome!</h1>
    <p>
      Hello world!
    </p>
    <Link to="/heroes">Heroes</Link>
  </div>
)
