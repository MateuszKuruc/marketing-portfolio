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
    .string()
    .notRequired()
    .matches(/^\d{9,11}$/, {
      message: "Numer telefonu musi składać się z 9-11 cyfr",
      excludeEmptyString: true,
    }),
  message: yup
    .string()
    .required("Wprowadź treść wiadomości")
    .min(10, "Wiadomość nie może być krótsza niż 10 znaków"),
});
