import { useFormik, FormikProps } from 'formik';
import { RecipeTypeFormValues } from './interfaces';

export function useRecipeTypeFormik({
  onSubmit,
}: {
  onSubmit(values: RecipeTypeFormValues): Promise<void>;
}): FormikProps<RecipeTypeFormValues> {
  return useFormik<RecipeTypeFormValues>({
    initialValues: {
      name: '',
    },
    onSubmit,
  });
}
