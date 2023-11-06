"use client";
import { useFormik } from "formik";
import React from "react";
import Button from "./Button";
import { formSchema } from "@/schemas";
import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { BiErrorCircle } from "react-icons/bi";
import { FormValues } from "../../types";

import Reveal from "./Reveal";

const Form = () => {
  const [successNotification, setSuccessNotification] = useState(false);
  const [errorNotification, setErrorNotification] = useState(false);

  const onSubmit = async (
    values: FormValues,
    actions: { resetForm: () => void }
  ) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        }),
      });
      if (response.ok) {
        setSuccessNotification(true);
        setTimeout(() => {
          setSuccessNotification(false);
        }, 3000);
      } else {
        setErrorNotification(true);
        setTimeout(() => {
          setErrorNotification(false);
        }, 3000);
      }

      actions.resetForm();
    } catch (error) {
      setErrorNotification(true);
      setTimeout(() => {
        setErrorNotification(false);
      }, 3000);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
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
    <Reveal>
      <form
        className={`md:mb-8 md:mt-2 xs:mb-4 bg-gray-90 p-5 md:p-10 flex flex-col gap-2 md:w-[520px] rounded-md relative  ${
          isSubmitting ? "opacity-50" : "opacity-100"
        }  `}
        onSubmit={handleSubmit}
        noValidate
      >
        {successNotification && (
          <div className="px-4 py-3 mb-4 rounded-2xl bg-green-700 border-2 flex flexAround">
            <p className="font-standard text-white regular-20">
              Formularz został przesłany, dziękuję!
            </p>
            <GiConfirmed color="white" size="20" />
          </div>
        )}

        {errorNotification && (
          <div className="px-4 py-3 mb-4 rounded-2xl bg-red-700 border-2 flex flexAround">
            <p className="font-standard text-white regular-20">
              Wystąpił problem, spróbuj ponownie!
            </p>
            <BiErrorCircle color="white" size="20" />
          </div>
        )}

        <label className="text-blue-50 font-medium regular-20" htmlFor="name">
          Imię i nazwisko
        </label>
        <input
          className={`p-2 rounded-md border-3 ${
            errors.name && touched.name ? "input-error" : ""
          }`}
          id="name"
          type="text"
          placeholder="Podaj imię i nazwisko"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && <p className="error ">{errors.name}</p>}
        <label className="text-blue-50 font-medium regular-20" htmlFor="email">
          Email
        </label>
        <input
          className={`p-2 rounded-md border-3 ${
            errors.email && touched.email ? "input-error" : ""
          }`}
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
        <label className="text-blue-50 font-medium regular-20" htmlFor="phone">
          Telefon
        </label>
        <input
          className={`p-2 rounded-md border-3 ${
            errors.phone && touched.phone ? "input-error" : ""
          }`}
          id="phone"
          type="tel"
          value={values.phone}
          placeholder="Podaj nr telefonu"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phone && touched.phone && (
          <p className="error ">{errors.phone}</p>
        )}
        <label
          className="text-blue-50 font-medium regular-20"
          htmlFor="message"
        >
          Wiadomość
        </label>
        <textarea
          className={`p-2 rounded-md border-3 ${
            errors.message && touched.message ? "input-error" : ""
          }`}
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
        <Button
          disabled={isSubmitting}
          type="submit"
          title="WYŚLIJ"
          variant={isSubmitting ? "btn_disabled" : "btn_submit"}
        />
      </form>
    </Reveal>
  );
};

export default Form;
