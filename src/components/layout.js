import React, { useState } from "react";
import { Link } from "gatsby";

import "./../reset.css";
import "./../style.scss";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="site-wrapper">
      <Header />
      <main className="content">
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <>
      <header className="header">
        <p className="logo-text">IRR | Merit</p>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <hr />
        {isExpanded && <NavMenu />}
        <label htmlFor="nav-toggle" className="nav-toggle-label" onClick={() => toggleExpansion(!isExpanded)}>
          <span></span>
        </label>
      </header>
    </>
  )
}

export const NavMenu = () => {
  return (
    <nav className="main-nav">
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
          <a
            href="http://www.radb.net/support/"
            target="_blank"
            rel="noreferrer"
          >
            Support
          </a>
        </li>
      </ul>
    </nav>
  )
}

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Merit’s Mission is connecting organizations and building community.
          We provide networking, security and community services to member
          organizations that help make our society a better place to learn,
          discover, work and live – while upholding the principles of an open
          internet.
        </p>
        <div className="footer-info">
          <div>
            <p>
              <strong>Address:</strong>
            </p>
            <p>880 Technology Drive, Suite B, </p>
            <p>Ann Arbor, MI 48108-8963</p>
          </div>
          <div>
            <p>
              <strong>Contact & Support:</strong>
            </p>
            <p>Tel: +1 734 527 5776</p>
            <p>
              Email: <a href="mailto:radb@merit.edu">radb@merit.edu</a>
            </p>
          </div>
          <div>
            <p>
              <strong>Site Menu</strong>
            </p>
            <ul>
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
                <a
                  href="http://www.radb.net/support/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <p>© {year} Merit Network, Inc</p>
        </div>
      </div>
    </footer>
  );
}

export default Layout;
