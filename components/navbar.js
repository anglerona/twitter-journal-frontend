import Link from 'next/link'
import Styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={Styles.nav}>
      <div>
        <Link href="/">Twitter Journal</Link> 
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