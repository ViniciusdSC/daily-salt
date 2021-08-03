---
to: src/<%= h.changeCase.paramCase(name) %>/pages/create/index.tsx
---

import React from 'react';
import AppPaper from 'app/components/paper';
import <%= h.changeCase.pascalCase(name) %>Form from '<%= h.changeCase.paramCase(name) %>/components/form';
import { useStore<%= h.changeCase.pascalCase(name) %> } from '<%= h.changeCase.paramCase(name) %>/hooks';
import { useHistory } from 'react-router-dom';
import { use<%= h.changeCase.pascalCase(name) %>Formik } from '<%= h.changeCase.paramCase(name) %>/components/form/hooks';

const <%= h.changeCase.pascalCase(name) %>Create: React.FC = () => {
  const store<%= h.changeCase.pascalCase(name) %> = useStore<%= h.changeCase.pascalCase(name) %>();
  const history = useHistory();
  const formik = use<%= h.changeCase.pascalCase(name) %>Formik({
    async onSubmit(values) {
      await store<%= h.changeCase.pascalCase(name) %>(values);

      history.push('/<%= h.changeCase.paramCase(name) %>');
    },
  });

  return (
    <AppPaper title="New <%= h.changeCase.sentenceCase(name) %>">
      <<%= h.changeCase.pascalCase(name) %>Form formik={formik} />
    </AppPaper>
  );
};

export default <%= h.changeCase.pascalCase(name) %>Create;
