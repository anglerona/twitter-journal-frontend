import { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

const getDataFromLS = () => {
    // const data = localStorage.getItem('entries')

    if (typeof window !== 'undefined') {
        const data = localStorage.getItem('entries')

        if (data) {
            return JSON.parse(data)
        }
        else { return [] }
    }

}

const Form = () => {


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [edit, setEdit] = useState(null);
    const classes = useStyles();
    const [entries, setEntries] = useState(getDataFromLS());
    const [postData, setPostData] = useState({
        comment: ' '

    });

    const dateConverter = (date) => {
        return new Date(date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", time: "numeric" }) + " " +
            new Date(date).toLocaleTimeString();

    }

    const currentId = '';

    const addNewComment = (comment) => {

        fetch("http://localhost:8080/comment", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"comment":comment, "userID":"Isaidoun"}),
        })
            .then(() => {
                console.log("submitted!");
                console.log(comment)
                setEdit(null);
            })
    }
    const handleSubmit = (e) => {
        const comment = postData.comment
        addNewComment(comment)
        clear();
        setPostData({ comment: '' });
        e.preventDefault();
    }

    const clear = () => {
        currentId = '';
        setPostData({ comment: '' });

    }

    useEffect(() => {
        localStorage.setItem('entries', JSON.stringify(entries));
    }, [entries])


    return (<Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6" text-align="center">Leave Your Comments</Typography>
            <TextField name="comment" variant="outlined" label="Write your thoughts" fullWidth value={postData.comment} onChange={(e) => setPostData({ ...postData, comment: e.target.value })} />
            <Button className={classes.buttonSubmit} variant="contained" type="submit" fullWidth>Submit</Button>
            <Button className={classes.buttonSubmit} style={{ backgroundColor: '#FD5082' }} variant="contained" onClick={clear} fullWidth>Clear</Button>
        </form>
    </Paper>)
}

export default Form; 
