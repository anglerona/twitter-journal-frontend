import Link from 'next/link'
import Styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={Styles.nav}>
        <div> Twitter Journal </div>
      <Link href="/entry">
        <a>Home </a>
      </Link>
      <Link href="/history">
        <a>History</a>
      </Link>
     
    </nav>
  )
}