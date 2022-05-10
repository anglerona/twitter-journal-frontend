import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Styles from '../components/Tweets.module.css'
import PastInfo from '../components/PastInfo'

export default function History() {
    return (
    <Layout>
    <Navbar />
    <div className={Styles.title}>Past History </div>
    <PastInfo />
    <PastInfo />
    </Layout>
    )
  }
  