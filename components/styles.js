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
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 10,
    color: 'white',
  },
  item: {
    backgroundColor: 'aliceblue',
    padding: 10,
    margin: 30,
  }
}));
