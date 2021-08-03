---
to: src/<%= h.changeCase.paramCase(name) %>/pages/view/styles.tsx
---

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  listTitle: {
    margin: '0px',
    marginBottom: theme.spacing(2),
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default useStyles;
