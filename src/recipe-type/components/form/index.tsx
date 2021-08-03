import React from 'react';
import { FormikProps } from 'formik';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import { RecipeTypeFormValues } from './interfaces';

interface Props {
  formik: FormikProps<RecipeTypeFormValues>;
}

const RecipeTypeForm: React.FC<Props> = ({ formik }) => {
  const classes = useStyles();

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            margin="dense"
            name="name"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.name}
            helperText={formik.errors?.name}
            error={Boolean(formik.errors?.name)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.submit} type="submit" variant="outlined">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RecipeTypeForm;
