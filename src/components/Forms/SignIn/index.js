import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./SignIn.module.scss";
import { SIGN_IN_SCHEMA } from "../../../SCHEMAS";
import InputValid from "../InputValid";

const initialValues = {
  email: "",
  password: "",
};

const SignIn = (props) => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <div className={styles.page__container}>
      <h1>LOGIN TO YOUR ACCOUNT</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SIGN_IN_SCHEMA}
      >
        {(formikProps) => {
          return (
            <Form
              onSubmit={formikProps.handleSubmit}
              onReset={formikProps.handleReset}
              className={styles.form__container}
            >
              <InputValid name="email" required="required" />
              <InputValid type="password" name="password" required="required" />
              {/* <label>
                <Field name="email" required="required"></Field>
                <span>Email</span>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
              </label>
              <label>
                <Field
                  type="password"
                  name="password"
                  required="required"
                ></Field>
                <span>Password</span>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
              </label> */}
              <input type="submit" value="login" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignIn;
