import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/irr-overview'>Overview</Link></li>
            <li><Link to='/registry-list'>Registry List</Link></li>
            <li><Link to='/rpsl-guide'>RPSL Reference Guide</Link></li>
            <li><Link to='/faqs'>FAQs</Link></li>
          </ul>
        </nav>
      </div>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <div>Footer</div>
    </>
  )
}

export default Layout
