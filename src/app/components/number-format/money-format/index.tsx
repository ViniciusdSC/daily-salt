import React from 'react';
import NumberFormat from 'react-number-format';

interface Props {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const AppMoneyFormat: React.FC<Props> = ({
  inputRef, onChange, name, ...others
}) => (
  <NumberFormat
    {...others}
    getInputRef={inputRef}
    onValueChange={(values) => {
      onChange({
        target: {
          name,
          value: values.value,
        },
      });
    }}
    thousandSeparator
    isNumericString
    prefix="$"
  />
);

export default AppMoneyFormat;
