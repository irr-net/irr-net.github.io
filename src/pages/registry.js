import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const RegistryListPage = () => {
  return (
    <Layout pageTitle={"List of Routing Registries"}>
      <p>
        This list was designed for the Internet community. It enables users to
        coordinate their Routing Registry efforts by providing mirroring and
        contact information.
      </p>
      <hr />
      <div class="registry-list-container">
        <div className="registry-list"></div>
        <TableOfContent />
      </div>
    </Layout>
  );
};

const TableOfContent = () => (
  <div className="toc">
    <h2>Table of Contents</h2>
    <ul>
      <li>
        <Link to="#AFRINIC">AFRINIC</Link>
      </li>
      <li>
        <Link to="#ALTDB">ALTDB</Link>
      </li>
      <li>
        <Link to="#APNIC">APNIC</Link>
      </li>
      <li>
        <Link to="#ARIN">ARIN</Link>
      </li>
      <li>
        <Link to="#BELL">BELL</Link>
      </li>
      <li>
        <Link to="#BBOI">BBOI</Link>
      </li>
      <li>
        <Link to="#CANARIE">CANARIE</Link>
      </li>
      <li>
        <Link to="#IDNIC">IDNIC</Link>
      </li>
      <li>
        <Link to="#JPIRR">JPIRR</Link>
      </li>
      <li>
        <Link to="#LACNIC">LACNIC</Link>
      </li>
      <li>
        <Link to="#LEVEL3">LEVEL3</Link>
      </li>
      <li>
        <Link to="#NESTEGG">NESTEGG</Link>
      </li>
      <li>
        <Link to="#NTTCOM">NTTCOM</Link>
      </li>
      <li>
        <Link to="#PANIX">PANIX</Link>
      </li>
      <li>
        <Link to="#RADB">RADB</Link>
      </li>
      <li>
        <Link to="#REACH">REACH</Link>
      </li>
      <li>
        <Link to="#RIPE">RIPE</Link>
      </li>
      <li>
        <Link to="#TC">TC</Link>
      </li>
    </ul>
  </div>
);

export const Head = () => <title>IRR | Registry List</title>;

export default RegistryListPage;
