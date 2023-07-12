import * as React from "react";
import { Link } from "gatsby";

import "./../reset.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <div>
        <nav>
          <ul>
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
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <div>
        <p>
          IRR is provided by Merit Network Inc. 880 Technology Drive, Suite B,
          Ann Arbor, MI 48108-8963 734-527-5776 radb@merit.edu Copyright © 2018
        </p>
      </div>
    </>
  );
};

export default Layout;
