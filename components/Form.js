import { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import Styles from './Tweets.module.css';
import axios from "axios";

const getDataFromLS = () => {

    if (typeof window !== 'undefined') {
        const data = localStorage.getItem('entries')

        if (data) {
            return JSON.parse(data)
        }
        else { return [] }
    }

}

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

const Form = () => {
    const [edit, setEdit] = useState(null);
    const classes = useStyles();
    const [entries, setEntries] = useState(getDataFromLS());
    const [postData, setPostData] = useState({ comment: ' ', topic: ' ' });
    const currentId = '';

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


    const addNewComment = (comment,topic) => {

        fetch("http://localhost:8080/comment", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "comment": comment, "userID": "Isaidoun","topic":topic }),
        })
            .then(() => {
                console.log("submitted!");
                console.log(comment)
                setEdit(null);
            })
    }
    const handleSubmit = (e) => {
        const comment = postData.comment
        const topic = postData.topic
        addNewComment(comment,topic)
        clear();
        setPostData({ comment: '' });
        e.preventDefault();
    }

    const clear = () => {
        currentId = '';
        setPostData({ comment: '' });

    }

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

            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h5" text-align="center"  style={{ color: '#048686' }}>Leave Your Comment</Typography>
                <TextField name="comment" variant="outlined" label="Write your thoughts" fullWidth value={postData.comment} onChange={(e) => setPostData({ topic:`${topic}`, comment: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" type="submit" fullWidth>Submit</Button>
                <Button className={classes.buttonSubmit} style={{ backgroundColor: '#FD5082' }} variant="contained" onClick={clear} fullWidth>Clear</Button>
            </form>
        </tweets>
    )
}

export default Form; 
