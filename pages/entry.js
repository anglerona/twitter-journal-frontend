import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Tweets from '../components/Tweets'
import Refresh from '../components/Refresh'


export default function Index() {
    return (
    <Layout>
    <Navbar />
    <Tweets />
    <Refresh />
    <Form />
    </Layout>
    )
  }
  
