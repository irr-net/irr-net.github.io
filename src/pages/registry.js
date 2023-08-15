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
      <TableOfContent />
    </Layout>
  );
};

const TableOfContent = () => (
  <div class="table-of-contents">
    <ul>
      <il>
        <Link to="#AFRINIC">AFRINIC</Link>
      </il>
      <il>
        <Link to="#ALTDB">ALTDB</Link>
      </il>
      <il>
        <Link to="#APNIC">APNIC</Link>
      </il>
      <il>
        <Link to="#ARIN">ARIN</Link>
      </il>
      <il>
        <Link to="#BELL">BELL</Link>
      </il>
      <il>
        <Link to="#BBOI">BBOI</Link>
      </il>
      <il>
        <Link to="#CANARIE">CANARIE</Link>
      </il>
      <il>
        <Link to="#IDNIC">IDNIC</Link>
      </il>
      <il>
        <Link to="#JPIRR">JPIRR</Link>
      </il>
      <il>
        <Link to="#LACNIC">LACNIC</Link>
      </il>
      <il>
        <Link to="#LEVEL3">LEVEL3</Link>
      </il>
      <il>
        <Link to="#NESTEGG">NESTEGG</Link>
      </il>
      <il>
        <Link to="#NTTCOM">NTTCOM</Link>
      </il>
      <il>
        <Link to="#PANIX">PANIX</Link>
      </il>
      <il>
        <Link to="#RADB">RADB</Link>
      </il>
      <il>
        <Link to="#REACH">REACH</Link>
      </il>
      <il>
        <Link to="#RIPE">RIPE</Link>
      </il>
      <il>
        <Link to="#TC">TC</Link>
      </il>
    </ul>
  </div>
)

export const Head = () => <title>IRR | Registry List</title>;

export default RegistryListPage;
