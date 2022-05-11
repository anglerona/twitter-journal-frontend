import React from 'react'
import Styles from './HistoryContent.module.css'

export default function HistoryContent() {
    return (
        <history>
            <div className={Styles.title}>Past History</div>
            <div className={Styles.description}>
                Here is a recollection of all your recorded entries per topic.
                <div> 
                    To update or delete any entries, simply hover a past entry and select the correct button accordingly.
                </div>
            </div>
        </history>
    )
}
