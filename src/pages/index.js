import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import "./../style.scss";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Welcome!"}>
      <p>
        This site is designed to promote coordination of the Internet Routing
        Registry (IRR), the union of world-wide routing policy databases that
        use the{" "}
        <Link to="/rpsl-guide">
          Routing Policy Specification Language (RPSL)
        </Link>
        . We hope that other members of the IRR community will contribute ideas,
        information, and news to this new site.{" "}
      </p>
      <p>
        This site is operated by <a href="https://www.merit.edu" target="_blank" rel="noreferrer"> Merit Network, Inc. </a> Merit also operates the <a href="https://www.radb.net" target="_blank" rel="noreferrer"> RADB </a> and provides the <a href="https://www.radb.net/support/mirrored_irrs.html" target="_blank" rel="noreferrer" > largest Routing Registry mirror </a> site on the Internet. We're also the developers of IRRd, a widely used database server using the RPSL specification.
      </p>
      <p>
        The IRR is a distributed set of databases that are individually operated
        by organizations such as NTT, RIPE NCC, Savvis, Level3, etc. The RADB is
        just one component of the IRR. However RADB's mission is to mirror all
        component databases so as to provide the most complete view possible of
        the entire IRR. Currently by querying the Merit whois server data from
        34 different databases can be found.
      </p>
      <p>
        Be sure to read our <Link to="/FAQs"></Link>FAQ if you're wondering
        whether your organization should participate in the IRR. If you have
        questions about the IRR, please send email to the Merit database team at <a href="mailto:radb@merit.edu" target="_blank" rel="noreferrer">radb@merit.edu</a>
      </p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>IRR | Home</title>;
