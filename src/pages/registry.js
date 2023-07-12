import * as React from 'react'
import Layout from '../components/layout'
import RegistryList from './registry-list.mdx'

const RegistryListPage = () => {
  return (
    <Layout pageTitle={'List of Routing Registries'}>
      <p>This list was designed for the Internet community. It enables users to coordinate their Routing Registry efforts by providing mirroring and contact information.</p>
      <RegistryList />
    </Layout>
  )
}

export const Head = () => <title>IRR | Registry List</title>

export default RegistryListPage
