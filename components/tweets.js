import { useState, useEffect } from "react";
import Styles from './tweets.module.css'


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
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?_limit=4`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <tweets>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {data &&
          data.map(({ id, body, name, postId }) => (
            <a key={id}>
                <TweetBox
                number={id}
                comment={body}
                author={name}
                date={postId} />
            </a>
          ))}
        </tweets>
    );
}