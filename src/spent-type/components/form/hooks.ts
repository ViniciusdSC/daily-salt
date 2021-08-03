import { useFormik, FormikProps } from 'formik';
import { SpentTypeFormValues } from './interfaces';

export function useSpentTypeFormik({
  onSubmit,
}: {
  onSubmit(values: SpentTypeFormValues): Promise<void>;
}): FormikProps<SpentTypeFormValues> {
  return useFormik<SpentTypeFormValues>({
    initialValues: {
      name: '',
    },
    onSubmit,
  });
}
