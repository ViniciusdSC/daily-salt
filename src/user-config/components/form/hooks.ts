import { useFormik, FormikProps } from 'formik';
import { UserConfigFormValues } from './interfaces';

export function useUserConfigFormik({
  onSubmit,
}: {
  onSubmit(values: UserConfigFormValues): Promise<void>;
}): FormikProps<UserConfigFormValues> {
  return useFormik<UserConfigFormValues>({
    initialValues: {
      dailyGoal: 0,
      weekGoal: 0,
      mounthGoal: 0,
    },
    onSubmit,
  });
}
