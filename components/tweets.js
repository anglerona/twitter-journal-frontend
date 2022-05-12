import { useState, useEffect } from "react";
import Styles from './Tweets.module.css'


function TweetBox(props) {
    return (
        <div className={Styles.container}>
            <div className={Styles.tweet}>Tweet #{props.number}</div>
            <div className={Styles.comment}>{props.comment}</div>
            <div className={Styles.author}>Author: {props.author}</div>
            <div className={Styles.date}>Date: {props.date}</div>
        </div>
    )
}

export default function Tweets() {

    
    
    const [topicData, setTopicData] = useState(null);
    const [tweetData, setTweetData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
   
    const chosenTopic = Math.floor(Math.random() * (51) + 0)

    useEffect (()=> {

       return fetch(`http://localhost:8080/trends`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((response) => {
                if (!response.ok) {
                    setTopicData(response);
                console.log("run")
                console.log(response)
                var trend_query = response[chosenTopic].query
                return fetch(`http://localhost:8080/trends/${trend_query}`)
                }
            })
            .then((response) => {
                if (response.ok) {
                    setTweetData(response);
                    console.log(response)

                }
                setError(err);
                return response
                
            })
            .catch((err) => {
                err = "err"
                setTopicData(null)
                setTweetData(null)
            })
            .finally(() => {
                setLoading(false);
            });

        })
        
    return (
        <tweets>

            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
           
            <div className={Styles.description}>
                Take at look at today's trending topic and write your thoughts!
                <div className={Styles.title}>
                   Today's Topic: {topicData && topicData[0].name} 
                </div>
            </div>
            {tweetData &&
                tweetData.map(({ id, name, text, createdAt }) => (
                    <a key={id}>  
                        <TweetBox
                            number={id}
                            comment={text}
                            author={name}
                            date={createdAt} />
                    </a>
                ))}
        </tweets>
    );
}