import * as Yup from "yup";

const EMAIL_SCHEMA = Yup.string()
  .trim()
  .lowercase()
  .matches(/^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,4}$/, "Incorrect email address")
  .required("Field is required");

const PASS_SCHEMA = Yup.string()
  .trim()
  .matches(
    /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,16}$/,
    "One upper case letter and one number"
  )
  .required("Field is required");

const FIRST_NAME_SCHEMA = Yup.string()
  .trim()
  .matches(/^[A-Z][a-z]{2,15}$/, "Only latin letters, one upper case")
  .required("Field is required");

const LAST_NAME_SCHEMA = Yup.string()
  .trim()
  .matches(/^[A-Z][a-z]{1,15}$/, "Only latin letters, one upper case")
  .required("Field is required");

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASS_SCHEMA,
});

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: FIRST_NAME_SCHEMA,
  lastName: LAST_NAME_SCHEMA,
  displayName: Yup.string()
    .trim()
    .matches(/^[A-Za-z0-9_-]{3,15}$/, "Only latin letters, numbers, _, -")
    .required("Field is required"),
  email: EMAIL_SCHEMA,
  password: PASS_SCHEMA,
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Field is required"),
  joinAs: Yup.string().oneOf(["buyer", "seller"]).required("Field is required"),
});
