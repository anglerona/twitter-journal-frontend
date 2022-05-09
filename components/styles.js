import { makeStyles } from '@material-ui/core/styles';
 
export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: 10,
    marginTop: 30,
    color: '#048686',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0 50px',
  },
  buttonSubmit: {
    borderRadius: '15px',
    margin: '10px 20px',
    padding: '15px 0px',
    color: 'white',
    backgroundColor: '#048686',
    width: '150px',
  },
  item: {
    backgroundColor: 'aliceblue',
    padding: 10,
    margin: 30,
  }
}));
