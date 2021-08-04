import React from 'react';
import AppPaper from 'app/components/paper';
import RecipeTypeForm from 'recipe-type/components/form';
import { useRecipeTypeById, useUpdateRecipeType } from 'recipe-type/hooks';
import { useHistory, useParams } from 'react-router-dom';
import { useRecipeTypeFormik } from 'recipe-type/components/form/hooks';
import { useSetBreadcrumbs } from 'app/components/breadcrumbs/hooks';

const RecipeTypeEdit: React.FC = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const model = useRecipeTypeById(id);
  const updateRecipeType = useUpdateRecipeType();
  const history = useHistory();

  const formik = useRecipeTypeFormik({
    async onSubmit(values) {
      await updateRecipeType(id, values);
      history.push('/recipe-type');
    },
  });

  useSetBreadcrumbs([
    { to: '/recipe-type', label: 'Recipe Type' },
    { to: `/recipe-type/view/${model.id}`, label: model.name },
  ], 'Edit');

  React.useEffect(() => {
    formik.setValues(model);
  }, [model, formik.setValues]);

  return (
    <AppPaper title={model.name}>
      <RecipeTypeForm formik={formik} />
    </AppPaper>
  );
};

export default RecipeTypeEdit;
