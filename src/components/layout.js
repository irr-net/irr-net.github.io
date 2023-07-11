import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout
