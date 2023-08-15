import * as React from "react";
import { Link } from "gatsby";

import "./../reset.css";
import "./../style.scss";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="main-layout">
      <header>
        <div className="header-container"><p className="logo-text">IRR | Merit</p></div>
      </header>
      <div className="site-content">
        <div className="aside">
          <nav className="nav-container">
            <ul className="nav-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/overview">Overview</Link>
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
                <a href="http://www.radb.net/support/" target="_blank"  rel="noreferrer">Support</a>
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
          <div>
            <p><strong>© 2023 Merit Network, Inc</strong></p>
          </div>
          <hr />
          <div className="footer-info">
            <div>
              <p><strong>Address:</strong></p>
              <p>880 Technology Drive, Suite B, </p>
              <p>Ann Arbor, MI 48108-8963</p>
            </div>
            <div>
              <p><strong>Contact & Support:</strong></p>
              <p>Tel: +1 734 527 5776</p>
              <p>Email: <a href="mailto:radb@merit.edu">radb@merit.edu</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
