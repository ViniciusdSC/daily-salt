import React from 'react';
import AppPaper from 'app/components/paper';
import SpentTypeForm from 'spent-type/components/form';
import { useSpentTypeById, useUpdateSpentType } from 'spent-type/hooks';
import { useHistory, useParams } from 'react-router-dom';
import { useSpentTypeFormik } from 'spent-type/components/form/hooks';
import { useSetBreadcrumbs } from 'app/components/breadcrumbs/hooks';

const SpentTypeEdit: React.FC = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const model = useSpentTypeById(id);
  const updateSpentType = useUpdateSpentType();
  const history = useHistory();

  const formik = useSpentTypeFormik({
    async onSubmit(values) {
      await updateSpentType(id, values);
      history.push('/spent-type');
    },
  });

  useSetBreadcrumbs([
    { to: '/spent-type', label: 'Spent Type' },
    { to: `/spent-type/view/${model.id}`, label: model.name },
  ], 'Edit');

  React.useEffect(() => {
    formik.setValues(model);
  }, [model, formik.setValues]);

  return (
    <AppPaper title={model.name}>
      <SpentTypeForm formik={formik} />
    </AppPaper>
  );
};

export default SpentTypeEdit;
