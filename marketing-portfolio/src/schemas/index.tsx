import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(5, "Wpisz minimum 5 znaków")
    .required("Imię i nazwisko jest wymagane"),
  email: yup
    .string()
    .email("Wprowadź poprawny adres e-mail")
    .required("Adres e-mail jest wymagany"),
  phone: yup
    .number()
    .min(9, "Minimum 9 znaków")
    .integer(),
  message: yup.string().required("Wprowadź treść wiadomości"),
});
