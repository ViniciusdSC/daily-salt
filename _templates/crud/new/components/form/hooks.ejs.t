---
to: src/<%= h.changeCase.paramCase(name) %>/components/form/hooks.ts
---

import { useFormik, FormikProps } from 'formik';
import { <%= h.changeCase.pascalCase(name) %>FormValues } from './interfaces';

export function use<%= h.changeCase.pascalCase(name) %>Formik({
  onSubmit,
}: {
  onSubmit(values: <%= h.changeCase.pascalCase(name) %>FormValues): Promise<void>;
}): FormikProps<<%= h.changeCase.pascalCase(name) %>FormValues> {
  return useFormik<<%= h.changeCase.pascalCase(name) %>FormValues>({
    initialValues: {},
    onSubmit,
  });
}
