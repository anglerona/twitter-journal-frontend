import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Content from '../components/content'
import Form from '../components/Form'
import {RefreshButton} from '../components/RefreshButton'

export default function Index() {
    return (
    <Layout>
    <Navbar />
    <Form />
    <RefreshButton />
    </Layout>
    )
  }
  
