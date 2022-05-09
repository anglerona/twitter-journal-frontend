import Styles from './content.module.css'

// Note: Not sure if we're gonna go with this approach of using components to insert static content
// Feel free to delete this file if it is unecessary 
export default function Index() {
    return (
        <content className={Styles.content}>
            <h2>Landing Page (Index)</h2>
            <a>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </a>
        </content>


    )
}


