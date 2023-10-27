"use client";
import { useFormik } from "formik";
import React from "react";
import Button from "./Button";
import { formSchema } from "@/schemas";

const Form = () => {
  const onSubmit = () => {
    console.log("submitted");
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

  console.log(errors.name);
  return (
    <form
      className="mt-10 bg-gray-90 p-10 flex flex-col gap-2 max-w-[520px] rounded-md"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="text-blue-50 bold-20" htmlFor="name">
        Imię i nazwisko
      </label>
      <input
        className="p-2 rounded-md"
        id="name"
        type="text"
        placeholder="Podaj imię i nazwisko"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        // className={errors.name ? "input-error" : ""}
      />
      {errors.name && touched.name && <p className="error ">{errors.name}</p>}
      <label className="text-blue-50 bold-20" htmlFor="email">
        Email
      </label>
      <input
        className="p-2 rounded-md"
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
        className="p-2 rounded-md"
        id="phone"
        type="text"
        placeholder="Podaj nr telefonu"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.phone && touched.phone && <p className="error ">{errors.phone}</p>}
      <label className="text-blue-50 bold-20" htmlFor="message">
        Wiadomość
      </label>
      <textarea
        className="p-2 rounded-md"
        id="message"
        rows={6}
        placeholder="Wprowadź wiadomość..."
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.message && touched.message && <p className="error ">{errors.message}</p>}
      <Button type="submit" title="Wyślij" variant="btn_submit" />
    </form>
  );
};

export default Form;
