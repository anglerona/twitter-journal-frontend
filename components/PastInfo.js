import React, { useState, useEffect } from "react";
import Styles from './PastInfo.module.css'

export default function PastInfo() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?_limit=3`)
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
                data.map(({ id, body, name }) => (
                    <a key={id}>
                        <div id={id + "container"} className={Styles.container}
                            onMouseEnter={() => {
                                document.getElementById(id + "edit").style.display = 'block'
                                document.getElementById(id + "delete").style.display = 'block'
                            }}
                            onMouseLeave={() => {
                                document.getElementById(id + "edit").style.display = 'none'
                                document.getElementById(id + "delete").style.display = 'none'
                            }}>
                            <div>
                                <div className={Styles.topic}>
                                    Past Topic: {name}
                                </div>
                                <div id={id + "comment"} className={Styles.comment} contentEditable="false">
                                    Past Comment: {body}
                                </div>
                                <div id={id + "date"} className={Styles.date}>
                                    Date:
                                </div>
                            </div>
                            <div>
                                <button id={id + "delete"} onClick={() => document.getElementById(id + "container").remove()} className={Styles.hoverButton}>Delete</button>
                                <button id={id + "edit"} onClick={() => document.getElementById(id + "comment").setAttribute("contenteditable", true)} className={Styles.hoverButton}>Edit</button>
                            </div>
                        </div>
                    </a>
                ))}
        </hover>
    );
}