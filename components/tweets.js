import { useState, useEffect } from "react";
import Styles from './Tweets.module.css';
import axios from "axios";


function TweetBox(props) {
    return (
        <div className={Styles.container}>
            <div className={Styles.tweet}>Tweet </div>
            <div className={Styles.comment}>{props.comment}</div>
            <div className={Styles.author}>Author: {props.author}</div>
            <div className={Styles.date}>Date: {props.date}</div>
        </div>
    )
}

export default function Tweets() {

    const [tweetData, setTweetsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [topic, setTopic] = useState("loading...")


    const fetchData = () => {
        const topicsUrl = `http://localhost:8080/trends/`
        const getTopics = axios.get(topicsUrl).then((response) => {

            const lengthOfTopics = response.data.length
            const chosenTopic = Math.floor(Math.random() * (lengthOfTopics + 1) + 0)
            setTopic(response.data[chosenTopic].name)
            axios.get(`http://localhost:8080/trends/${response.data[chosenTopic].name}`)
                .then((tweets) => {
                    console.log(tweets.data)
                        setTweetsData(tweets.data)
                })
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <tweets>

            {loading && <div></div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}

            <div className={Styles.description}>
                Take at look at today's trending topic and write your thoughts!
                <div className={Styles.title}>
                    Today's Topic: {topic}
                </div>
            </div>
            {tweetData &&
                tweetData.map(({ id, fromUser, text, createdAt }) => (
                    <a key={id}>
                        <TweetBox
                            number={id}
                            comment={text}
                            author={fromUser}
                            date={createdAt} />
                    </a>
                ))}
        </tweets>
    );
}