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
   width: '50%',
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
    color: 'white',
    float: 'right'
  },
  buttonClean: {
    width: '50%',
    height: '20px',
    marginBottom: 10,
    marginTop: 10,
    color: '#048686',
    float: 'right',
  }
}));
