import {Button} from '@material-ui/core';
import Link from 'next/link'
import Styles from './LandingPage.module.css'

const LandingPage = (props) => {
    return (
        <>
        <div className={Styles.container}>
        <div className={Styles.block}></div>
        <div className={Styles.landpage}>
            <h1>TwitterJournal</h1>
            <p>A place to freely express your opinions without<br/>worrying about what other people think </p>
            <Link href="/entry"><a>Start Writing!</a></Link>
        </div>
        </div>
        </>
        
    )
}

export default LandingPage;