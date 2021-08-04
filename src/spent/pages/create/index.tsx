import React from 'react';
import AppPaper from 'app/components/paper';
import SpentForm from 'spent/components/form';
import { useStoreSpent } from 'spent/hooks';
import { useHistory } from 'react-router-dom';
import { useSpentFormik } from 'spent/components/form/hooks';
import { useSetBreadcrumbs } from 'app/components/breadcrumbs/hooks';

const SpentCreate: React.FC = () => {
  const storeSpent = useStoreSpent();
  const history = useHistory();
  const formik = useSpentFormik({
    async onSubmit(values) {
      await storeSpent(values);

      history.push('/spent');
    },
  });

  useSetBreadcrumbs([
    { to: '/spent', label: 'Spent' },
  ], 'Create');

  return (
    <AppPaper title="New Spent">
      <SpentForm formik={formik} />
    </AppPaper>
  );
};

export default SpentCreate;
