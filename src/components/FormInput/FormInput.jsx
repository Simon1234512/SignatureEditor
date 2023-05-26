import React from "react";
import "./FormInput.scss";
import { ErrorMessage, useField } from "formik";
const FormInput = ({ label, place, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className={props.margin}>
        <div className={props.className}>
          <label htmlFor={field.name} className="form-label">
            {label}
          </label>
          <input
            placeholder={place}
            type="text"
            className={`form-input ${
              meta.touched && meta.error && "is-invalid"
            }`}
            {...field}
            {...props}
            autoComplete="off"
          />
          <ErrorMessage
            component="div"
            name={field.name}
            className="form-error"
          />
        </div>
      </div>
    </>
  );
};

export default FormInput;
