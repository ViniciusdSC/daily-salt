import React from 'react';
import AppPaper from 'app/components/paper';
import RecipeTypeForm from 'recipe-type/components/form';
import { useStoreRecipeType } from 'recipe-type/hooks';
import { useHistory } from 'react-router-dom';
import { useRecipeTypeFormik } from 'recipe-type/components/form/hooks';
import { useSetBreadcrumbs } from 'app/components/breadcrumbs/hooks';

const RecipeTypeCreate: React.FC = () => {
  const storeRecipeType = useStoreRecipeType();
  const history = useHistory();
  const formik = useRecipeTypeFormik({
    async onSubmit(values) {
      await storeRecipeType(values);

      history.push('/recipe-type');
    },
  });

  useSetBreadcrumbs([
    { to: '/recipe-type', label: 'Recipe Type' },
  ], 'Create');

  return (
    <AppPaper title="New Recipe type">
      <RecipeTypeForm formik={formik} />
    </AppPaper>
  );
};

export default RecipeTypeCreate;
