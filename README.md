# irr.net

The public repository for irr.net. This repository is developed and maintained by Merit Network.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)

### Installation

1. Clone the repo
   `git clone https://github.com/merit-network/irr.net.git`

2. Install NPM packages
   `npm ci --legacy-peer-deps`

3. Start the server
   `gatsby develop`

## Contributing

We welcome contributions from everyone. Here are some ways you can make a difference:

### Updating the Registry List

To request a change to the registry list, you can submit a [pull request](#submitting-pull-requests) with the desired change or [open an issue](https://github.com/merit-network/irr.net/issues).
The registry list is rendered from a json file located at `src/content/registry-list.json`. 
Changes can be made to the list following the json format below:

```json
{
   "name": "REGISTRY NAME",                                 // Registry Name / Source
   "dns_name": "dns.name",                                  // IP Address or DNS Name
   "import_source": ["list.of","ftp.sites"],                // FTP Site - list
   "databases_mirrored": ["AOLTW, ARIN"],                   // Databases Mirrored - list
   "mirror_port_and_info": "whois.example.io, port 43",     // Mirror Port and Info
   "whois_location": "whois.example.io",                    // Whois Location
   "type_of_primary_data": "network or community info",     // Type of Primary Data
   "contact_info": "admin@example.com",                     // Contact Info
   "noc_info": ["email@example.com", "123-456-7890"]        // NOC Info - list
}
```


### Submitting Pull Requests

1. Fork the repository.
2. Create a new branch for each feature or improvement.
3. Send a pull request from each feature branch to the **develop** branch.

It is very important to separate new features or improvements into separate feature branches, and to send a pull request for each branch. This allows us to review and pull in new features or improvements individually.

### Reporting Issues

If you encounter any issues or have any feature requests, please file an issue on our [GitHub issues page](https://github.com/merit-network/irr.net/issues).

### Code of Conduct

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone. Please refer to our [Code of Conduct](CODE_OF_CONDUCT.md) for more details.

All contributors are expected to follow this code. Please report any unacceptable behavior to [msc@merit.edu](mailto:msc@merit.edu).

## License

Distributed under the GPL-3.0 License. See `LICENSE` for more information.

## Support Contact

Email: [msc@merit.edu](mailto:msc@merit.edu)
