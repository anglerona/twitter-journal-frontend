import React, { useState, useEffect } from "react";
import Styles from './PastInfo.module.css'

export default function PastInfo() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [edit, setEdit] = useState(null);

    const dateConverter = (date) => {
        return new Date(date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", time:"numeric"}) + " " +
        new Date(date).toLocaleTimeString();
    }

    const editComment = (commentID) => {
        if (!edit) {
            document.getElementById(commentID + "comment").setAttribute("contenteditable", true);
            setEdit(commentID); 
        }
    }

    const updateComment = (commentID, commment) => {
        fetch("http://localhost:8080/comment/" + commentID, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: commment
        })
        .then( () => {
            console.log("updated!");
            setEdit(null); 
            window.location.reload();
        })
    }
    

    const deleteComment = (commentId) => {
        fetch("http://localhost:8080/comment/" + commentId, {
            method: 'DELETE',
        })
        .then( () => {
            window.location.reload();
        })
    }

    useEffect(() => {
        fetch(`http://localhost:8080/comment/Isaidoun`)
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
        <hover>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {data &&
                data.map(({ commentID, topic, comment, lastUpd }) => (
                    <a key={commentID}>
                        <div id={commentID + "container"} className={Styles.container}
                            onMouseEnter={() => {
                                document.getElementById(commentID + "edit").style.display = 'block'
                                document.getElementById(commentID + "delete").style.display = 'block'
                            }}
                            onMouseLeave={() => {
                                document.getElementById(commentID + "edit").style.display = 'none'
                                document.getElementById(commentID + "delete").style.display = 'none'
                            }}>
                            <div>
                                <div className={Styles.topic}>
                                    Past Topic: {topic}
                                </div>
                                <div id={commentID + "comment"} className={Styles.comment} contentEditable="false">
                                    {comment}
                                </div>
                                <div id={commentID + "date"} className={Styles.date}>
                                    Date: {dateConverter(lastUpd)}
                                </div>
                            </div>
                            <div>
                            <button id={commentID + "delete"} onClick={() => deleteComment(commentID)} className={Styles.hoverButton}>Delete</button>
                            {!(edit == commentID) && <button id={commentID + "edit"} onClick={() => editComment(commentID)}  className={Styles.hoverButton}>Edit</button>}
                            {(edit == commentID) && <button id={commentID + "edit"} onClick={() => updateComment(commentID, document.getElementById(commentID + "comment").innerHTML)}  className={Styles.hoverButton}>Update</button>}
                            </div>
                        </div>
                    </a>
                ))}
        </hover>
    );
}