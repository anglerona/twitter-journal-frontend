import { useState } from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';
const Form = () =>{
    const classes = useStyles();

    const handleSubmit =() =>{

    }

    const clear =() => {
        
    }
    
    const [postData, setPostData]=useState({
        comment: ' '
    });
    const currentId='';
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" text-align="center">Leave Your Comments</Typography>
                <TextField name="comment" variant="outlined" label = "Write your thoughts" fullWidth value={postData.comment} onChange={(e)=>setPostData({ ...postData, comment: e.target.value})}/>
                <Button className={classes.buttonSubmit} color="primary" variant="contained" size="large" type="submit" fullWidth>{currentId ? 'Editing':'Submit'} </Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
             </form>

        </Paper>
    )
}

export default Form;