import { useFormik, FormikProps } from 'formik';
import { RecipeFormValues } from './interfaces';

export function useRecipeFormik({
  onSubmit,
}: {
  onSubmit(values: RecipeFormValues): Promise<void>;
}): FormikProps<RecipeFormValues> {
  return useFormik<RecipeFormValues>({
    initialValues: {
      name: '',
      recipeTypeId: '',
      value: 0,
      mode: 'daily',
    },
    onSubmit,
  });
}
