---
to: src/<%= h.changeCase.paramCase(name) %>/pages/edit/index.tsx
---

import React from 'react';
import AppPaper from 'app/components/paper';
import <%= h.changeCase.pascalCase(name) %>Form from '<%= h.changeCase.paramCase(name) %>/components/form';
import { use<%= h.changeCase.pascalCase(name) %>ById, useUpdate<%= h.changeCase.pascalCase(name) %> } from '<%= h.changeCase.paramCase(name) %>/hooks';
import { useHistory, useParams } from 'react-router-dom';
import { use<%= h.changeCase.pascalCase(name) %>Formik } from '<%= h.changeCase.paramCase(name) %>/components/form/hooks';

const <%= h.changeCase.pascalCase(name) %>Edit: React.FC = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const model = use<%= h.changeCase.pascalCase(name) %>ById(id);
  const update<%= h.changeCase.pascalCase(name) %> = useUpdate<%= h.changeCase.pascalCase(name) %>();
  const history = useHistory();

  const formik = use<%= h.changeCase.pascalCase(name) %>Formik({
    async onSubmit(values) {
      await update<%= h.changeCase.pascalCase(name) %>(id, values);
      history.push('/<%= h.changeCase.paramCase(name) %>');
    },
  });

  React.useEffect(() => {
    formik.setValues(model);
  }, [model, formik.setValues]);

  return (
    <AppPaper title={model.name}>
      <<%= h.changeCase.pascalCase(name) %>Form formik={formik} />
    </AppPaper>
  );
};

export default <%= h.changeCase.pascalCase(name) %>Edit;
