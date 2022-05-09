import React, { useState, useEffect } from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';

const getDataFromLS = () => {
    const data = localStorage.getItem('entries')

    // if (typeof window !== 'undefined') {
    //     const data = localStorage.getItem('entries')
    //     // return JSON.parse(data)
    //     if (data) {
    //         return JSON.parse(data)
    //     }
    //     else {return []}
    // }

    if (data) {
        return JSON.parse(data)
    }
    else {return []}
}

const Form = () =>{
    const classes = useStyles();

    const [entries, setEntries] = useState(getDataFromLS());

    const [postData, setPostData]=useState({
        comment: ' '
    });
    const currentId='';

    const handleSubmit = (e) =>{
        e.preventDefault();

        let entry = {  postData }
        setEntries([entries, entry]);
        setPostData('');
    }

    const clear =() => {
        
    }

    useEffect(() => {
        localStorage.setItem('entries', JSON.stringify(entries));
    }, [entries])
    
    
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" text-align="center">Leave Your Comments</Typography>
                <TextField name="comment" variant="outlined" label = "Write your thoughts" fullWidth value={postData.comment} onChange={(e)=>setPostData({ ...postData, comment: e.target.value})}/>
                <Button className={classes.buttonSubmit} color="primary" variant="contained" size="large" type="submit" fullWidth>{currentId ? 'Editing':'Submit'} </Button>
                <Button className={classes.buttonClear}  color="secondary" variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
             </form>

        </Paper>
    )
}

export default Form;