import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Form from '../components/Form';
import Content from '../components/content'
import Tweets from '../components/tweets'

export default function Index() {
    return (
    <Layout>
    <Navbar />
    <Form />
    <Content />
    <Tweets />
    </Layout>
    )
  }
  
