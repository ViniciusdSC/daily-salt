import React from 'react';
import AppPaper from 'app/components/paper';
import UserConfigForm from 'user-config/components/form';
import { useUserConfigFormik } from 'user-config/components/form/hooks';
import { useSetUserConfig, useUserConfig } from 'user-config/hooks';
import { useHistory } from 'react-router-dom';
import { useSetBreadcrumbs } from 'app/components/breadcrumbs/hooks';

interface Props { }

const UserConfigEdit: React.FC<Props> = () => {
  const model = useUserConfig();
  const setUserConfig = useSetUserConfig();
  const history = useHistory();

  const formik = useUserConfigFormik({
    async onSubmit(values) {
      await setUserConfig(values);
      history.push('/user-config');
    },
  });

  React.useEffect(() => {
    formik.setValues(model);
  }, [model, formik.setValues]);

  useSetBreadcrumbs([
    { to: '/user-config', label: 'Settings' },
  ], 'Edit');

  return (
    <AppPaper title="Edit Settings">
      <UserConfigForm formik={formik} />
    </AppPaper>
  );
};

export default UserConfigEdit;
