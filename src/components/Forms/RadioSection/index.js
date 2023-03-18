import { ErrorMessage, Field } from "formik";
import React from "react";
import styles from './../InputValid/InputValid.module.scss';

const RadioSection = () => {
  return (
    <div>
      <label>
        <Field type="radio" name="joinAs" value="buyer"></Field>
        <span>
          Join As a Buyer
          <p>
            I am looking for a Name, Logo or Tagline for my business, brand or
            product.
          </p>
        </span>
      </label>
      <label>
        <Field type="radio" name="joinAs" value="seller"></Field>
        <span>
          Join As a Creative or Marketplace Seller
          <p>
            I plan to submit name ideas, Logo designs or sell names in Domain
            Marketplace.
          </p>
        </span>
      </label>
      <ErrorMessage name="joinAs" component="div" className={styles.error}/>
    </div>
  );
};

export default RadioSection;
