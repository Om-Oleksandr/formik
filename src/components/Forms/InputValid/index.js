import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";
import styles from "./InputValid.module.scss";
const InputValid = (props) => {
  const { name, spanName, ...restProps } = props;
  return (
    <label className={styles.label}>
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <>
              <input {...field} {...restProps} />
              <span>{spanName ? spanName : name}</span>
            </>
          );
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

InputValid.defaultProps = {
  type: "text",
};

InputValid.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default InputValid;
