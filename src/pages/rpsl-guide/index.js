import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";

const RpslGuidePage = () => {
  return (
    <Layout pageTitle={"RPSL Reference Guide"}>
      <div className="content-with-aside">
        <div>
          <p>
            It is not possible to cover the features of RPSL in this document.
            However, you'll find references here to several RFC's that will help
            you get started with the specification. Unfortunately, due to the
            nature of RFCs and other standards documentation, they are not the
            most exciting things to read. We hope to be able to produce more
            user-oriented documentation in the future.
          </p>
          <p>
            We have provided a color-coded rating system based on what we
            believe is useful:
          </p>
          <ul>
            <li className="reading-rating high">Highly Recommended Reading</li>
            <li className="reading-rating regular">Recommended reading</li>
            <li className="reading-rating optional">Optional reading</li>
          </ul>
          <section>
            <Link to="/rpsl-guide/ripe-181">
              <h2 id="RFC-1786">RFC-1786: RIPE-181</h2>
            </Link>
            <p className="reading-rating high">Recommended reading</p>
            <p>
              RIPE-181 (RIPE-81++) started it all. This document describes the
              original database formats used by the RIPE NCC for the storage of
              routing policy in its database. This document is a worthwhile read
              simply because it explains some things more clearly than the RPSL
              RFC. However, the format of various objects has changed, so one
              shouldn't pay too much attention to too many details.
            </p>
            <p>
              It is important to remember that RIPE serves as a combination of
              an address registry, much like ARIN, and a domain registry, much
              like InterNIC. As such, the RIPE database contains non-routing
              oriented objects.
            </p>
            <p>
              Additional documentation on the contents of the RIPE database can
              be found at the{" "}
              <a
                href="http://www.ripe.net/ripe/docs/alltitle.html"
                target="_blank"
                rel="noreferrer"
              >
                RIPE Document Store
              </a>
              .
            </p>
            <p>
              If you mirror the RIPE database, it should be noted that while the
              initial seeding of the database can be done from the DB file
              stored on the RIPE FTP site (see the{" "}
              <Link to="/registry">The RADB Routing Registry List</Link>), it is
              desirable to filter the contents of the RIPE database for just the
              routing-related entries. This can be done using the{" "}
              <strong>ripe_subset.pl</strong> script included with the IRRd
              distribution. IRRd should use the{" "}
              <strong>
                irr_database db-name filter routing-registry-objects
              </strong>{" "}
              option to extract only routing objects from the mirror stream.
            </p>
          </section>
          <section>
            <Link to="/rpsl-guide/rfc2622">
              <h2 id="RFC-2622">
                RFC-2622: Routing Policy Specification Language
              </h2>
            </Link>
            <p className="reading-rating high">Highly Recommended Reading</p>
            <p>
              The current routing language used by IRRd and by RsConfig. Certain
              ambiguities in the RIPE-181 language have been dealt with, such as
              the inter-as attribute (happily gone). This document should only
              require a couple of read-throughs for the average user. RFC-2650
              goes with this to help provide explanations on day-to-day use of
              RPSL.
            </p>
            <p>
              RPSL is much more expressive with regards to routing policy than
              RIPE-181. This explains much of the complexity of the latter part
              of the document.
            </p>
          </section>
          <section>
            <Link to="/rpsl-guide/rfc2650">
              <h2 id="RFC-2650">RFC-2650: Using RPSL in Practice</h2>
            </Link>
            <p className="reading-rating high">Highly Recommended Reading</p>
            <p>
              A definite must read for people new to RPSL. This tutorial gives
              many examples of common policies in RPSL.
            </p>
          </section>
          <section>
            <Link to="/rpsl-guide/rfc2726">
              <h2>RFC-2726: PGP Authentication for RIPE Database Updates</h2>
            </Link>
            <p className="reading-rating regular">Recommended reading</p>
            <p>
              Although RPSL-Security is the next document in the series, we list
              this RFC before it. RFC-2726 explains how to store PGP public keys
              within the RIPE database format, and by extension, the RPSL
              database format. RPSL makes use of PGP-signed transactions for
              security. The RPSL-Security RFC makes heavy use of the objects
              described in this RFC.{" "}
            </p>
          </section>
          <section>
            <Link to="/rpsl-guide/rfc2725">
              <h2 id="RFC-2725">RFC-2725: Routing Policy System Security</h2>
            </Link>
            <p className="reading-rating optional">Optional reading</p>
            <p>
              The RPSL-Security specification provides a mechanism for
              delegating objects and providing a rooted (top-down) delegation
              and authentication model for objects such as AS numbers, address
              space and routes. This will bring some sanity to the data stored
              in the public IRR databases.
            </p>
            <p>
              <strong>Status</strong>: IRRd does not yet support this RFC.
            </p>
          </section>
          <section>
            <Link to="/rpsl-guide/rfc2769">
              <h2 id="RFC-2769">RFC-2769: Routing Policy System Replication</h2>
            </Link>
            <p className="reading-rating optional">Optional reading</p>
            <p>
              This mechanism provides for a more robust and authenticated
              mechanism of distributing data from registry to registry. The
              current RIPE methology uses a pull mechanism and RPSL-Replication
              also provides for initial object submissions and provides a push
              mechanism for registries.
            </p>
            <p>
              <strong>Status</strong>: IRRd does not yet support this RFC.
            </p>
          </section>
          <section>
            <Link to="/rpsl-guide/rfc4012">
              <h2 id="RFC-4012">
                RFC-4012: Routing Policy Specification Language next generation
                (RPSLng)
              </h2>
            </Link>
            <p className="reading-rating regular">Recommended reading</p>
            <p>
              This memo introduces a new set of simple extensions to the Routing
              Policy Specification Language (RPSL), enabling the language to
              document routing policies for the IPv6 and multicast address
              families currently used in the Internet.
            </p>
          </section>
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
          <Link to="#RFC-1786">RFC-1786: RIPE-181</Link>
        </li>
        <li>
          <Link to="#RFC-2622">
            RFC-2622: Routing Policy Specification Language
          </Link>
        </li>
        <li>
          <Link to="#RFC-2650">RFC-2650: Using RPSL in Practice</Link>
        </li>
        <li>
          <Link to="#RFC-2726">
            RFC-2726: PGP Authentication for RIPE Database Updates
          </Link>
        </li>
        <li>
          <Link to="#RFC-2725">RFC-2725: Routing Policy System Security</Link>
        </li>
        <li>
          <Link to="#RFC-2769">
            RFC-2769: Routing Policy System Replication
          </Link>
        </li>
        <li>
          <Link to="#RFC-4012">
            RFC-4012: Routing Policy Specification Language next generation
            (RPSLng)
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export const Head = () => <title>IRR | RPSL Reference Guide</title>;

export default RpslGuidePage;
