import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

import RegistryList from "../content/registry-list.json";

const RegistryListPage = () => {
  return (
    <Layout pageTitle={"List of Routing Registries"}>
      <div className="content-with-aside">
        <div className="registry-list">
          <p>
            This list was designed for the Internet community. It enables users to
            coordinate their Routing Registry efforts by providing mirroring and
            contact information.
          </p>
          <p>
            To contribute or request a change to the registry list below, visit the <a href="https://github.com/irr-net/irr-net.github.io" target="_blank" rel="noreferrer">IRR GitHub Page</a>
          </p>
          {RegistryList.map((registry) => (
            <div key={registry.name} className="registry">
              <h2 id={registry.name}>Registry Name (SOURCE): {registry.name}</h2>
              <table>
                <tr>
                  <td>IP Address or DNS Name:</td>
                  <td>{registry.dns_name}</td>
                </tr>
                {registry.import_source &&
                  <tr>
                    <td>Import Source:</td>
                    <td>{registry.import_source.join(", ")}</td>
                  </tr>}
                {registry.databases_mirrored &&
                  <tr>
                    <td>Databases Mirrored:</td>
                    <td>{registry.databases_mirrored.join(", ")}</td>
                  </tr>}
                {registry.mirror_port_and_info &&
                  <tr>
                    <td>Mirror Port and Info:</td>
                    <td>{registry.mirror_port_and_info}</td>
                  </tr>
                }
                {registry.whois_location &&
                  <tr>
                    <td>Whois Location:</td>
                    <td>{registry.whois_location}</td>
                  </tr>
                }
                {registry.contact_info &&
                  <tr>
                    <td>Contact Info:</td>
                    <td>{registry.contact_info}</td>
                  </tr>
                }
                {registry.noc_info &&
                  <tr>
                    <td>NOC Info:</td>
                    <td>{registry.noc_info}</td>
                  </tr>
                }
              </table>
            </div>
          ))}
        </div>
        <TableOfContent />
      </div>
    </Layout>
  );
};

const TableOfContent = () => (
  <div className="toc-parent">
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
  </div>
);

export const Head = () => <title>IRR | Registry List</title>;

export default RegistryListPage;
