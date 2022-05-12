import { useState, useEffect } from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';

const getDataFromLS = () => {
    // const data = localStorage.getItem('entries')
 
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem('entries')
       
        if (data) {
            return JSON.parse(data)
        }
        else {return []}
    }
 
    // if (data) {
    //     return JSON.parse(data)
    // }
    // else {return []}
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
 
        let entry = {  currentId, postData }
        setEntries([entries, entry]);
        setPostData('');
    }

    const clear =() => {
        
    }

    const sendComment =(commentID) => {
        fetch("http://localhost:8080/comment/" + commentID, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
           
        })
        .then( () => {
            console.log("comment sent!");
            setEdit(null); 
            window.location.reload();
        })
    }
    

    useEffect(() => {
        localStorage.setItem('entries', JSON.stringify(entries));
    }, [entries])
    
    
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" text-align="center">Leave Your Comments</Typography>
                <TextField name="comment" variant="outlined" label = "Write your thoughts" fullWidth value={postData.comment} onChange={(e)=>setPostData({ ...postData, comment: e.target.value})}/>
                <Button onClick={sendComment} className={classes.buttonSubmit} variant="contained" type="submit" fullWidth>{currentId ? 'Editing':'Submit'} </Button>
                <Button className={classes.buttonSubmit} style={{backgroundColor: '#FD5082'}} variant="contained" onClick={clear} fullWidth>Clear</Button>
             </form>

        </Paper>
    )
}

export default Form;