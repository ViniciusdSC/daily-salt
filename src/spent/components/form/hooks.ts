import { useFormik, FormikProps } from 'formik';
import { SpentFormValues } from './interfaces';

export function useSpentFormik({
  onSubmit,
}: {
  onSubmit(values: SpentFormValues): Promise<void>;
}): FormikProps<SpentFormValues> {
  return useFormik<SpentFormValues>({
    initialValues: {
      spentTypeId: '',
      name: '',
      value: 0,
      repeat: false,
    },
    onSubmit,
  });
}
