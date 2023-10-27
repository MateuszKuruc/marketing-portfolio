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
      className="bg-gray-50 p-10 flex flex-col gap-2"
      onSubmit={handleSubmit}
      noValidate
    >
      <label htmlFor="name">Imię i nazwisko</label>
      <input
        id="name"
        type="text"
        placeholder="Podaj imię i nazwisko"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ outline: "none" }}
      
       
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Podaj e-mail"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor="phone">Telefon</label>
      <input
        id="phone"
        type="number"
        placeholder="Podaj nr telefonu"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor="message">Wiadomość</label>
      <textarea
        id="message"
        rows={6}
        placeholder="Wprowadź wiadomość..."
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button type="submit" title="Wyślij" variant="btn_submit" />
    </form>
  );
};

export default Form;
