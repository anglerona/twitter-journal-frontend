import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Styles from '../components/history.module.css'
import PastInfo from '../components/PastInfo'

export default function Index() {
    return (
    <Layout>
    <Navbar />
    <content className={Styles.content}>
    <h2>Past History </h2>
    </content>
    <PastInfo />
    <PastInfo />
    </Layout>
    )
  }
  