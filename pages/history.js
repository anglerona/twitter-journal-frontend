import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Styles from '../components/content.module.css'
import { EditButton } from '../components/EditButton'
import { DeleteButton } from '../components/DeleteButton'

export default function Index() {
    return (
      <Layout>
        <Navbar />
        <content className={Styles.content}>
        <h2>Past History </h2>
        <p> Rest of the website goes here </p>
        </content>
        <EditButton />
        <DeleteButton />
      </Layout>
    )
  }
  