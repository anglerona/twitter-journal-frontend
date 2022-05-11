import Link from 'next/link'
import Styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={Styles.nav}>
      <div>
        <Link href="/">TwitterJournal</Link> 
      </div>
      <Link href="/entry">
        <a>Journal Entry</a>
      </Link>
      <Link href="/history">
        <a>History</a>
      </Link>
      <br></br>
    </nav>
  )
}