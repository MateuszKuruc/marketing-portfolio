import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Imię i nazwisko jest wymagane"),
  email: yup
    .string()
    .email("Wprowadź poprawny adres e-mail")
    .required("Adres e-mail jest wymagany"),
  phone: yup.number().positive().integer(),
  message: yup.string().required("Wprowadź treść wiadomości"),
});
