import * as React from "react";
import { Link } from "gatsby";

import "./../reset.css";
import "./../site.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="site-body">
      <header>
        <div>Logo & Stuff</div>
      </header>
      <div className="content">
        <div className="aside">
          <nav className="nav-container">
            <ul className="nav-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/irr-overview">Overview</Link>
              </li>
              <li>
                <Link to="/registry">Registry List</Link>
              </li>
              <li>
                <Link to="/rpsl-guide">RPSL Reference Guide</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="http://www.radb.net/support/">Support</Link>
              </li>
            </ul>
          </nav>
        </div>
        <main className="main-container">
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </div>
      <footer>
        <div className="footer-content">
          <p>
            IRR is provided by Merit Network Inc. 880 Technology Drive, Suite B,
            Ann Arbor, MI 48108-8963 734-527-5776 radb@merit.edu Copyright © 2018
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
