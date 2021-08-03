---
to: src/<%= h.changeCase.paramCase(name) %>/components/form/styles.ts
---

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  submit: {
    float: 'right',
  },
}));

export default useStyles;
