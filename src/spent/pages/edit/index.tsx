import React from 'react';
import AppPaper from 'app/components/paper';
import SpentForm from 'spent/components/form';
import { useSpentById, useUpdateSpent } from 'spent/hooks';
import { useHistory, useParams } from 'react-router-dom';
import { useSpentFormik } from 'spent/components/form/hooks';

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

  return (
    <AppPaper title={model.name}>
      <SpentForm formik={formik} />
    </AppPaper>
  );
};

export default SpentEdit;
