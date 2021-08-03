import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    width: 'auto',
  },
  btn: {
    float: 'right',
  },
  bodyRow: {
    '& .MuiTableCell-body': {
      padding: theme.spacing(0, 3),
    },
  },
}));

export default useStyles;
