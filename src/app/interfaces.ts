import { FormikErrors, FormikTouched, FormikValues } from 'formik';

export interface FormProps<Values extends FormikValues> {
  values: Values;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}
