import React from 'react';
import AppPaper from 'app/components/paper';
import RecipeForm from 'recipe/components/form';
import { useStoreRecipe } from 'recipe/hooks';
import { useHistory } from 'react-router-dom';
import { useRecipeFormik } from 'recipe/components/form/hooks';

const RecipeCreate: React.FC = () => {
  const storeRecipe = useStoreRecipe();
  const history = useHistory();
  const formik = useRecipeFormik({
    async onSubmit(values) {
      await storeRecipe(values);

      history.push('/recipe');
    },
  });

  return (
    <AppPaper title="New Recipe">
      <RecipeForm formik={formik} />
    </AppPaper>
  );
};

export default RecipeCreate;
