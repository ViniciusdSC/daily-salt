import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {},
  toolbar: {
    '& .MuiButton-root': {
      margin: theme.spacing(0, 1),
    },
  },
  toolbarTitle: {
    marginRight: 'auto',
  },
  content: {
    padding: theme.spacing(0, 3, 3),
  },
}));

export default useStyles;
