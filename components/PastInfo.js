import React, { useState } from "react";
import Styles from './PastInfo.module.css'
import { EditText } from 'react-edit-text';

//Current Bug: The edit button that is supposed to work isn't working
// There is an extra edit button that acts as a temporary solution
export default function PastInfo() {
    const [hide, setHide] = useState({ display: 'none', });
    const [text, setText] = useState('')
    const [edit, setEdit] = useState(true)
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
                    <div className={Styles.topic}>
                        Past Topic:
                    </div>
                    <EditText
                        name='Comment'
                        className={Styles.comment}
                        value={text}
                        placeholder="Previous Comments:"
                        showEditButton ={edit}
                        editButtonContent={"Edit"}
                        editButtonProps={Styles.hoverButton}
                        onChange={setText}/>
                </div>
                <div>
                    <button onClick={() => setEdit(true)} className={Styles.hoverButton} style={hide}>Edit</button>
                    <button onClick={() => setText('')} className={Styles.hoverButton} style={hide} >Clear</button>
                </div>
            </div>
        </hover>
    )
}