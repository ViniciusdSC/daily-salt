import React from 'react';
import { FormikProps } from 'formik';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useFilterSpentTypes } from 'spent-type/hooks';
import { SpentTypeInterface } from 'spent-type/interfaces';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './styles';
import { SpentFormValues } from './interfaces';

interface Props {
  formik: FormikProps<SpentFormValues>;
}

const SpentForm: React.FC<Props> = ({ formik }) => {
  const classes = useStyles();
  const [query, setQuery] = React.useState<string>('');
  const spentTypes = useFilterSpentTypes(query);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Autocomplete
            options={spentTypes}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Spent Type"
                variant="outlined"
                margin="dense"
                onChange={({ target }) => {
                  setQuery(target.value);
                }}
              />
            )}
            onChange={(el, value) => {
              if (value) {
                formik.setFieldValue('spentTypeId', (value as SpentTypeInterface).id);
              }
            }}
            freeSolo
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            select
            label="Spent Mode"
            value={formik.values.mode}
            onChange={(event) => {
              formik.setFieldValue('mode', event.target.value);
            }}
            fullWidth
            variant="outlined"
            margin="dense"
          >
            <MenuItem value="daily">
              Daily
            </MenuItem>
            <MenuItem value="weekly">
              Weekly
            </MenuItem>
            <MenuItem value="monthly">
              Monthly
            </MenuItem>
            <MenuItem value="repeatable">
              Repeatable
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item md={6} xs={12}>
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
        <Grid item md={6} xs={12}>
          <TextField
            label="Value"
            variant="outlined"
            margin="dense"
            name="value"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.value}
            helperText={formik.errors?.value}
            error={Boolean(formik.errors?.value)}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={(
              <Switch
                checked={formik.values.repeat}
                onChange={() => {
                  formik.setFieldValue('repeat', !formik.values.repeat);
                }}
                color="primary"
                name="repeat"
              />
            )}
            label="Repeat"
          />
        </Grid> */}
        <Grid item xs={12}>
          <Button className={classes.submit} type="submit" variant="outlined">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SpentForm;
