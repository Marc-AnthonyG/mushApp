import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppBasic/AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        width={width}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormField;
