import React from 'react';
import { FormikProps } from 'formik';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppMoneyFormat from 'app/components/number-format/money-format';

import useStyles from './styles';
import { UserConfigFormValues } from './interfaces';

interface Props {
  formik: FormikProps<UserConfigFormValues>;
}

const UserConfigForm: React.FC<Props> = ({ formik }) => {
  const classes = useStyles();

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <TextField
            label="Daily Goal"
            variant="outlined"
            margin="dense"
            name="dailyGoal"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.dailyGoal ? formik.values.dailyGoal : null}
            helperText={formik.errors?.dailyGoal}
            error={Boolean(formik.errors?.dailyGoal)}
            InputProps={{
              inputComponent: AppMoneyFormat as any,
            }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            label="Week Goal"
            variant="outlined"
            margin="dense"
            name="weekGoal"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.weekGoal ? formik.values.weekGoal : null}
            helperText={formik.errors?.weekGoal}
            error={Boolean(formik.errors?.weekGoal)}
            InputProps={{
              inputComponent: AppMoneyFormat as any,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Mounth Goal"
            variant="outlined"
            margin="dense"
            name="mounthGoal"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.mounthGoal ? formik.values.mounthGoal : null}
            helperText={formik.errors?.mounthGoal}
            error={Boolean(formik.errors?.mounthGoal)}
            InputProps={{
              inputComponent: AppMoneyFormat as any,
            }}
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

export default UserConfigForm;
