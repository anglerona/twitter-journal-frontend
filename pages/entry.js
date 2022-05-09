import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Form from '../components/Form'
import {RefreshButton} from '../components/RefreshButton'
import Tweets from '../components/tweets'
import Trending from '../components/trending'


export default function Index() {
    return (
    <Layout>
    <Navbar />

    <br></br>
    <Trending />
    <Tweets />
    <br></br>
    <Form />
    <RefreshButton />

    </Layout>
    )
  }
  
