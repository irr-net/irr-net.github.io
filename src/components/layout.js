import React from "react";
import { Link } from "gatsby";

import "./../reset.css";
import "./../style.scss";
import Logo from "./../assets/images/merit_logo.png";

const Layout = ({ pageTitle, children, isHome }) => {
  return (
    <div className="site-wrapper">
      <Header />
      <main
        className={`content-container ${
          !isHome && "center-page-width-content"
        }`}
      >
        <div className={`${!isHome && "content"}`}>
          <div className="nav-parent">{!isHome && <NavMenu />}</div>
          <div className="article">
            {pageTitle && <h1>{pageTitle}</h1>}
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-content center-page-width-content">
          <p className="logo-text">
            <Link to="/">IRR | Merit</Link>
          </p>
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <NavMenu />
        </div>
      </header>
    </>
  );
};

export const NavMenu = () => {
  return (
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
  );
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content center-page-width-content">
        <img className="footer-logo" src={Logo} alt="Merit Logo" />
        <p>
          Merit’s Mission is connecting organizations and building community. We
          provide networking, security and community services to member
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
};

export default Layout;
