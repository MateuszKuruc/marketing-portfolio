"use client";
import { useFormik } from "formik";
import React from "react";

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
        value={formik.values.email}
        onChange={formik.handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
      />
    </form>
  );
};

export default Form;
