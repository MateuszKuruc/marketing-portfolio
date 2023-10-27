"use client";
import { useFormik } from "formik";
import React from "react";
import Button from "./Button";
import { formSchema } from "@/schemas";

const Form = () => {
  const onSubmit = (values, actions) => {
    console.log("submitted");
    
    actions.resetForm();
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      onSubmit,
      validationSchema: formSchema,
    });

  return (
    <form
      className="md:mt-10 mt-5 bg-gray-90 p-5 md:p-10 flex flex-col gap-2 md:w-[520px] rounded-md"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="text-blue-50 bold-20" htmlFor="name">
        Imię i nazwisko
      </label>
      <input
        className={`p-2 rounded-md ${errors.name ? "input-error" : ""}`}
        id="name"
        type="text"
        placeholder="Podaj imię i nazwisko"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.name && touched.name && <p className="error ">{errors.name}</p>}
      <label className="text-blue-50 bold-20" htmlFor="email">
        Email
      </label>
      <input
        className={`p-2 rounded-md ${errors.email ? "input-error" : ""}`}
        id="email"
        type="email"
        placeholder="Podaj e-mail"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email && (
        <p className="error ">{errors.email}</p>
      )}
      <label className="text-blue-50 bold-20" htmlFor="phone">
        Telefon
      </label>
      <input
        className={`p-2 rounded-md ${errors.phone ? "input-error" : ""}`}
        id="phone"
        type="number"
        placeholder="Podaj nr telefonu"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.phone && touched.phone && (
        <p className="error ">{errors.phone}</p>
      )}
      <label className="text-blue-50 bold-20" htmlFor="message">
        Wiadomość
      </label>
      <textarea
        className={`p-2 rounded-md ${errors.message ? "input-error" : ""}`}
        id="message"
        rows={6}
        placeholder="Wprowadź wiadomość..."
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.message && touched.message && (
        <p className="error ">{errors.message}</p>
      )}
      <Button type="submit" title="Wyślij" variant="btn_submit" />
    </form>
  );
};

export default Form;
