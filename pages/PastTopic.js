//History - when clicking on a past topic

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Form from '../components/Form'
import Tweets from '../components/tweets'
import Topic from '../components/Topic'


export default function PastTopic() {
    return (
        <Layout>
        <Navbar />
    
        <br></br>
        <Topic />
        <Tweets />
        <br></br>
        <Form />
    
        </Layout>
    )
  }