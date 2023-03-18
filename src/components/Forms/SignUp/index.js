import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./SignUp.module.scss";
import { SIGN_UP_SCHEMA } from "../../../SCHEMAS";
import InputValid from "../InputValid";
import RadioSection from "../RadioSection";

const initialValues = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  password: "",
  passwordConfirm: "",
  joinAs: "",
};

const SignUp = () => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <div className={styles.page__container}>
      <div>
        <h1>CREATE AN ACCOUNT</h1>
        <h2>We always keep your name and email address private.</h2>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SIGN_UP_SCHEMA}
      >
        {(formikProps) => {
          return (
            <Form
              onSubmit={formikProps.handleSubmit}
              onReset={formikProps.handleReset}
              className={styles.form__container}
            >
              <InputValid
                name="firstName"
                spanName="first name"
                required="required"
              ></InputValid>
              <InputValid
                name="lastName"
                spanName="last name"
                required="required"
              ></InputValid>
              <InputValid
                name="displayName"
                spanName="user name"
                required="required"
              ></InputValid>
              <InputValid name="email" required="required"></InputValid>
              <InputValid
                type="password"
                name="password"
                required="required"
              ></InputValid>
              <InputValid
                type="password"
                name="passwordConfirm"
                spanName="confirm password"
                required="required"
              ></InputValid>
              <RadioSection />

              <input type="submit" value="create account" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUp;
