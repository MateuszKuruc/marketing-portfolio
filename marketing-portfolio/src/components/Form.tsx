"use client";
import { useFormik } from "formik";
import React from "react";
import Button from "./Button";

const Form = () => {
  const handleSubmit = (values, actions) => {
    console.log("form submitted");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <form className="bg-gray-50 py-10" onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Button type="submit" title="Wyślij" variant="btn_submit" />
    </form>
  );
};

export default Form;
