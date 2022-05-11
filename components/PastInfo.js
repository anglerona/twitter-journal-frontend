import React, { useState } from "react";
import Styles from './PastInfo.module.css'
import { v4 as uuid } from 'uuid';

export default function PastInfo() {
    /*uuid is a temporary solution until we connect to the backend twitter API */
    const [hide, setHide] = useState({ display: 'none', });
    const unique_id1 = uuid();
    const unique_id2 = uuid();
    const unique_id3 = uuid();
    const unique_id4 = uuid();
    const topic_id = unique_id1.slice(0,8);
    const comment_id = unique_id2.slice(0,8);
    const container_id = unique_id3.slice(0,8);
    const date_id = unique_id4.slice(0,8)
    
    return (
        <hover>
            <div id={container_id} className={Styles.container}
                onMouseEnter={() => {
                    setHide({ display: 'block' });
                }}
                onMouseLeave={() => {
                    setHide({ display: 'none' })
                }}>
                <div>
                    <div id={topic_id} className={Styles.topic}>
                        Past Topic: 
                    </div>
                    <div id={comment_id} className={Styles.comment} contentEditable="false">
                        Past Comment: 
                    </div>
                    <div id={date_id} className={Styles.date}>
                        Date: 
                    </div>
                </div>
                <div>
                    <button onClick={() => document.getElementById(container_id).remove()} className={Styles.hoverButton} style={hide} >Delete</button>
                    <button onClick={() => document.getElementById(comment_id).setAttribute("contenteditable", true)} className={Styles.hoverButton} style={hide}>Edit</button>
                </div>
            </div>
        </hover>
    );
}