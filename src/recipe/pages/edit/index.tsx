import React from 'react';
import AppPaper from 'app/components/paper';
import RecipeForm from 'recipe/components/form';
import { useRecipeById, useUpdateRecipe } from 'recipe/hooks';
import { useHistory, useParams } from 'react-router-dom';
import { useRecipeFormik } from 'recipe/components/form/hooks';
import { useSetBreadcrumbs } from 'app/components/breadcrumbs/hooks';

const RecipeEdit: React.FC = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const model = useRecipeById(id);
  const updateRecipe = useUpdateRecipe();
  const history = useHistory();

  const formik = useRecipeFormik({
    async onSubmit(values) {
      await updateRecipe(id, values);
      history.push('/recipe');
    },
  });

  React.useEffect(() => {
    formik.setValues(model);
  }, [model, formik.setValues]);

  useSetBreadcrumbs([
    { to: '/recipe', label: 'Recipe' },
    { to: `/recipe/view/${model.id}`, label: model.name },
  ], 'Edit');

  return (
    <AppPaper title={model.name}>
      <RecipeForm formik={formik} />
    </AppPaper>
  );
};

export default RecipeEdit;
