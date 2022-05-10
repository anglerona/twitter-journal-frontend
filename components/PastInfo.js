import React, { useState } from "react";
import Styles from './PastInfo.module.css'
import { v4 as uuid } from 'uuid';

export default function PastInfo() {
    const [hide, setHide] = useState({ display: 'none', });
    const unique_id1 = uuid();
    const unique_id2 = uuid();
    const topic_id = unique_id1.slice(0,8)
    const comment_id = unique_id2.slice(0,8)
    const deleteBox = () => {
        alert("Under Construction, will work soon");
    }
    
    return (
        <hover>
            <div className={Styles.container}
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
                </div>
                <div>
                    <button onClick={deleteBox} className={Styles.hoverButton} style={hide} >Delete</button>
                    <button onClick={() => document.getElementById(comment_id).setAttribute("contenteditable", true)} className={Styles.hoverButton} style={hide}>Edit</button>
                </div>
            </div>
        </hover>

    );
}