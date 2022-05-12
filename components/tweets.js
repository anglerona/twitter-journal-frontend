import { useState, useEffect } from "react";
import Styles from './Tweets.module.css';
import axios from "axios";


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


    
    const [topicData, setTopicsData] = useState([]);
    const [tweetData, setTweetsData] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [topic, setTopic] = useState("loading...")
    const chosenTopic = Math.floor(Math.random() * (51) + 0)


    const fetchData = () => {
        const topicsUrl = `http://localhost:8080/trends/`
        const getTopics = axios.get(topicsUrl)
        const tweetsUrl = `http://localhost:8080/trends/${}`
        const getTweets = axios.get(tweetsUrl)
        axios.all([getTopics, getTweets]).then(

            
            
            axios.spread(( ... allData) => {
                const allTopicsData = allData[0].data
                console.log(allTopicsData)

                

                const allTweetsData = allData[1].data
                const lengthOfTopics = allData[0].data.length
                const chosenTopic = Math.floor(Math.random() * (lengthOfTopics+1) + 0)

                setTopic(allData[0].data[chosenTopic].name)

                setTopicsData(allTopicsData)
                setTweetsData(allTweetsData)
            })
        )
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