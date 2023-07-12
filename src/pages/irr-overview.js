import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const IrrOverviewPage = () => {
  return (
    <Layout pageTitle={"Overview"}>
      <h2>Introduction</h2>
      <p>
        The Internet Routing Registry (IRR) is a distributed routing database
        development effort. Data from the Internet Routing Registry may be used
        by anyone worldwide to help debug, configure, and engineer Internet
        routing and addressing. The IRR provides a mechanism for validating the
        contents of BGP announcement messages or mapping an origin AS number to
        a list of networks.
      </p>
      <p>
        The IRR emerged early in 1995, a time when providers worldwide were
        preparing for the end of the NSFNET Backbone Service and the birth of
        the commercial Internet. A current list of databases in the IRR can be
        found <Link to="/registry-list"></Link>here.
      </p>
      <h2>Obtaining IRR Data</h2>
      <p>
        Routing data from the entire global registry may be obtained by entering
        'whois' commands such as:{" "}
      </p>
      <pre>
        {`whois -h whois.radb.net <network_IP>`}
        {`whois -h whois.radb.net AS<Autonomous_System_Number>`}
      </pre>
      <p>
        You can also obtain IRR data through FTP from{" "}
        <Link to=" ftp://ftp.radb.net/radb/dbase">
          ftp://ftp.radb.net/radb/dbase
        </Link>{" "}
        or access it indirectly through the use of free user{" "}
        <Link to="/404">resources</Link>.
      </p>
      <h2>IRRToolSet</h2>
      <p>The IRRToolSet is now available from Github at the <Link to="https://github.com/irrtoolset/irrtoolset">IRRToolSet project page</Link>.</p>
    </Layout>
  );
};

export const Head = () => <title>IRR | Overview</title>;

export default IrrOverviewPage;
