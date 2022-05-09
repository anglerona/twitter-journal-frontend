import {Button} from '@material-ui/core';
import Link from 'next/link'
import Styles from './LandingPage.module.css'

const LandingPage = (props) => {
    return (
        <>
        <div className={Styles.container}>
        
        <div className={Styles.landpage}>
            <h1>TwitterJournal</h1>
            <p>A place to freely express your opinions without<br/>worrying about what other people think </p>
            <Link href="/entry"><a>Start Writing!</a></Link>
        </div>
        <div className={Styles.block}>
            <h2>How to use the TwitterJournal</h2>
            <ul>
                <li>Find a topic that interests you</li>
                <li>Go to your personal journal</li>
                <li>Write, vent, get all your thoughts down</li>
                <li>Look back and reflect on your entries</li>
            </ul>
            
        </div>
        </div>
        </>
        
    )
}

export default LandingPage;