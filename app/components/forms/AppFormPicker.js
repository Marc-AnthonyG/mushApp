import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppBasic/AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  PickerItemComponent,
  width,
  name,
  placeholder,
  numberOfColums,
}) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColums={numberOfColums}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormPicker;
