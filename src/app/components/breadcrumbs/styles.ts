import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  current: {
    color: theme.palette.grey[500],
  },
  icon: {
    color: theme.palette.primary.main,
  },
  root: {
    marginBottom: theme.spacing(1),
    '& .MuiBreadcrumbs-separator': {
      marginLeft: 0,
      marginRight: 0,
    },
    '& .MuiBreadcrumbs-ol': {
      justifyContent: 'flex-end',
    },
  },
}));

export default useStyles;
