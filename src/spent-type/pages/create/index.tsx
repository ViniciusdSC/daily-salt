import React from 'react';
import AppPaper from 'app/components/paper';
import SpentTypeForm from 'spent-type/components/form';
import { useStoreSpentType } from 'spent-type/hooks';
import { useHistory } from 'react-router-dom';
import { useSpentTypeFormik } from 'spent-type/components/form/hooks';
import { useSetBreadcrumbs } from 'app/components/breadcrumbs/hooks';

const SpentTypeCreate: React.FC = () => {
  const storeSpentType = useStoreSpentType();
  const history = useHistory();
  const formik = useSpentTypeFormik({
    async onSubmit(values) {
      await storeSpentType(values);

      history.push('/spent-type');
    },
  });

  useSetBreadcrumbs([
    { to: '/spent-type', label: 'Spent Type' },
  ], 'Create');

  return (
    <AppPaper title="New Spent Type">
      <SpentTypeForm formik={formik} />
    </AppPaper>
  );
};

export default SpentTypeCreate;
