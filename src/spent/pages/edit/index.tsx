import React from 'react';
import AppPaper from 'app/components/paper';
import SpentForm from 'spent/components/form';
import { useSpentById, useUpdateSpent } from 'spent/hooks';
import { useHistory, useParams } from 'react-router-dom';
import { useSpentFormik } from 'spent/components/form/hooks';
import { useSetBreadcrumbs } from 'app/components/breadcrumbs/hooks';

const SpentEdit: React.FC = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const model = useSpentById(id);
  const updateSpent = useUpdateSpent();
  const history = useHistory();

  const formik = useSpentFormik({
    async onSubmit(values) {
      await updateSpent(id, values);
      history.push('/spent');
    },
  });

  React.useEffect(() => {
    formik.setValues(model);
  }, [model, formik.setValues]);

  useSetBreadcrumbs([
    { to: '/spent', label: 'Spent' },
    { to: `/spent/view/${model.id}`, label: model.name },
  ], 'Edit');

  return (
    <AppPaper title={model.name}>
      <SpentForm formik={formik} />
    </AppPaper>
  );
};

export default SpentEdit;
