import React from 'react';
import { FormikProps } from 'formik';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { RecipeTypeInterface } from 'recipe-type/interfaces';
import { useFilterRecipeTypes } from 'recipe-type/hooks';

import useStyles from './styles';
import { RecipeFormValues } from './interfaces';

interface Props {
  formik: FormikProps<RecipeFormValues>;
}

const RecipeForm: React.FC<Props> = ({ formik }) => {
  const classes = useStyles();
  const [query, setQuery] = React.useState<string>('');
  const recipeTypes = useFilterRecipeTypes(query);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Autocomplete
            options={recipeTypes}
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
                formik.setFieldValue('spentTypeId', (value as RecipeTypeInterface).id);
              }
            }}
            freeSolo
          />
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
        <Grid item xs={12}>
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

export default RecipeForm;
