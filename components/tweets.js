import * as React from 'react';
import Styles from './tweets.module.css'


function TweetBox(props) {
    return (
        <div className={Styles.container}>
            <div className={Styles.tweet}>Tweet #{props.number}</div>
            <div className={Styles.comment}>Comment: {props.comment}</div>
            <div className={Styles.author}>Author: {props.author}</div>
            <div className={Styles.date}>Date: {props.date}</div>
        </div>
    )
}

export default function Tweets() {
    return (
        <tweets>
            <TweetBox
                number="1"
                comment="Using a randomtext generator"
                author="Alisa"
                date="Jan 3, 2022" />
            <TweetBox
                number="2"
                comment="Death weeks early had their and folly timed put. Hearted forbade on an village ye in fifteen."
                author="TJ"
                date="Jan 9, 2022" />
            <TweetBox
                number="3"
                comment="Age attended betrayed her man raptures laughter. Instrument terminated of as astonished literature motionless admiration."
                author="Jett"
                date="Feb 9, 2022" />
            <TweetBox
                number="4"
                comment="Done using randomtext generator"
                author="Tabatha"
                date="Mar 20, 2022" />
        </tweets>



    );
}