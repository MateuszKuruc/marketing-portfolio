// NAVIGATION
export const NAV_LINKS = [
  { href: "hero", key: "home", label: "Strona główna" },
  { href: "about", key: "about", label: "O mnie" },
  { href: "portfolio", key: "portfolio", label: "Portfolio" },
  { href: "contact", key: "contact", label: "Kontakt " },
];

// offsets for desktop

export const OFFSETS_DESKTOP: {
  [key: string]: number;
} = {
  home: 0,
  about: 400,
  portfolio: 950,
  contact: 1700,
};

// offsets for mobile

export const OFFSETS_MOBILE: {
  [key: string]: number;
} = {
  home: 0,
  about: 600,
  portfolio: 1200,
  contact: 2300,
};

// Clients for accordion

export const CLIENT_DATA = [
  {
    id: 1,
    title: "7 zł za leada w branży kredytowej",
   
    shortDescription:
      "Zlecenie klienta dotyczyło stworzenia strategii promocyjnej na Facebooku w branży kredytowej. Stanąłem przed wyzwaniem budowania obecności online od podstaw - nie istniała jeszcze ani strona fanpage, ani konto reklamowe. Moim celem była budowa skutecznej kampanii od zera, bez istniejących grup docelowych.",
    results_p1:
      "Efekty mojej pracy przerosły oczekiwania. W ciągu ostatnich pięciu miesięcy, nie tylko udało mi się stabilnie utrzymać koszt pozyskania leadu na poziomie 7 zł, ale również wygenerowałem dla klienta imponującą liczbę ponad 5000 leadów.",
    results_p2:
      "Jest to wynik tym bardziej znaczący, że udało się osiągnąć go w pełni nowej przestrzeni reklamowej. Z sukcesem zaimplementowałem również optymalizację procesów dzięki integracji z Zapierem, co pozwoliło na jeszcze większą efektywność działań marketingowych.",

    summary_p1: `Podsumowując, pomimo sceptycznego podejścia, które można spotkać w internecie, dotyczącego ryzyka "wypalenia budżetu" na świeżym koncie reklamowym lub wątpliwości co do możliwości efektywnego reklamowania bez gotowych grup odbiorców, mój projekt odniósł znaczący sukces. Począwszy od pierwszych tygodni kampanii, osiągnąłem imponujące rezultaty, zapewniając klientowi wysokiej jakości leady na bieżąco.`,
    summary_p2:
      "To doświadczenie pokazuje, że dobrze zaplanowana i sprawnie wykonana strategia marketingowa może przynieść znakomite wyniki, nawet bez początkowej bazy odbiorców.",
    img: "/client_1_results.jpeg",
  },

  {
    id: 2,
    clientName: "Google",
    shortDescription:
      "testowy opis krotki klient 2 nrwqjjhejwqheqwkjehqwkehqkwjhejkqwhekjqwhek hwqkejh qwkehkwqh ekjqwhe kjqwh ekjhqwke jhqwkewqh kjehqwkej hqwkej qhwkj ehqwkj ehqwkjehqwkjehqwkjehqwkje qw",
    results:
      "klient 2 wyniki wqhkeqwhejkqwhejkhqwjkehkj hqwkjehkwqhekjwqhejkhwqkje hqwjkehjkwqhekjqwheqjkwehkjh jkqwhekjqwhejkwqhekjqwhekqjwhe kjqwhejkwqhejkqwhejkqwhekjqwhejk hjqwhejkqwjhejkqwhejkqwhekjqw",
    summary:
      "klient 2 krotkie podsumowanie hwqjehwqjkehqjkehwqkjeh ewkjqhjkehjkwhqejkhqwekjqh  wkjqhekjqwjhekjqhejkqwhekqj ewqjkehwjkqehjkqwehjkqw wqjkehwqjekqwhejkqwjheqwjkehwq",
  },
  {
    id: 3,
    clientName: "Apple",
    shortDescription:
      "testowy opis krotki klient 3 nrwqjjhejwqheqwkjehqwkehqkwjhejkqwhekjqwhek hwqkejh qwkehkwqh ekjqwhe kjqwh ekjhqwke jhqwkewqh kjehqwkej hqwkej qhwkj ehqwkj ehqwkjehqwkjehqwkjehqwkje qw",
    results:
      "klient 3 wyniki wqhkeqwhejkqwhejkhqwjkehkj hqwkjehkwqhekjwqhejkhwqkje hqwjkehjkwqhekjqwheqjkwehkjh jkqwhekjqwhejkwqhekjqwhekqjwhe kjqwhejkwqhejkqwhejkqwhekjqwhejk hjqwhejkqwjhejkqwhejkqwhekjqw",
    summary:
      "klient 3 krotkie podsumowanie hwqjehwqjkehqjkehwqkjeh ewkjqhjkehjkwhqejkhqwekjqh  wkjqhekjqwjhekjqhejkqwhekqj ewqjkehwjkqehjkqwehjkqw wqjkehwqjekqwhejkqwjheqwjkehwq",
  },
  {
    id: 4,
    clientName: "Samsung",
    shortDescription:
      "testowy opis krotki klient 4 nrwqjjhejwqheqwkjehqwkehqkwjhejkqwhekjqwhek hwqkejh qwkehkwqh ekjqwhe kjqwh ekjhqwke jhqwkewqh kjehqwkej hqwkej qhwkj ehqwkj ehqwkjehqwkjehqwkjehqwkje qw",
    results:
      "klient 4 wyniki wqhkeqwhejkqwhejkhqwjkehkj hqwkjehkwqhekjwqhejkhwqkje hqwjkehjkwqhekjqwheqjkwehkjh jkqwhekjqwhejkwqhekjqwhekqjwhe kjqwhejkwqhejkqwhejkqwhekjqwhejk hjqwhejkqwjhejkqwhejkqwhekjqw",
    summary:
      "klient 4 krotkie podsumowanie hwqjehwqjkehqjkehwqkjeh ewkjqhjkehjkwhqejkhqwekjqh  wkjqhekjqwjhekjqhejkqwhekqj ewqjkehwjkqehjkqwehjkqw wqjkehwqjekqwhejkqwjheqwjkehwq",
  },
];

export const ACCORDION_DATA = [
  {
    id: 1,
    title: "7 ZŁ ZA LEADA",
    description:
      "Kampania Facebook Ads dla firmy pozyskującej kredyty dla spółek, osiągnęliśmy wyniki na poziomie 5zł za leada. Stworzenie precyzyjnej segmentacji, angażujących kreacji i stała optymalizacja stały się kluczem do sukcesu.",
  },
  {
    id: 2,
    title: "ROAS 16000%",
    description:
      "Stworzyliśmy wielopoziomowy lejek sprzedażowy dla sklepu e-commerce sprzedającego odzież damską. Gdy przejmowałem konto ROAS stał na poziomie 800%, wyskalowałem go do poziomu 16 000% zwiększając przy tym budżet dwukrotnie.",
  },
  {
    id: 3,
    title: "300 KLIENTÓW MLM",
    description:
      "Stworzyłem kampanię skupioną na rolki w branży BEAUTY MLM, po 2 miesiącach działania zyskaliśmy 350 nowych komentarzy co przełożyło się na 300 klientów przy budżecie miesięcznym na poziomie 1000zł.",
  },
  {
    id: 4,
    title: "ROAS 700% NA EBOOKU",
    description:
      "Klientka sprzedawała ebooka, produkt w pełni cyfrowy. Udało się wykręcić ceny za zakup na poziomie 6-7zł, co dawało REALNY ROAS 700%. Na każdym sprzedanym produkcie zarabiała około 30zł. Branża - poradniki dla rodziców.",
  },
];

// Logos for carousel

export const CAROUSEL_DATA = [
  {
    name: "Mary Kay",
    img: "/logo1.png",
  },
  {
    name: "Credit Agricole",
    img: "/logo2.jpg",
  },
  {
    name: "Cabrio Poland",
    img: "/logo3.jpg",
  },
  {
    name: "Prof Energy",
    img: "/logo4.jpg",
  },
  {
    name: "Wany",
    img: "/logo6.jpg",
  },
  {
    name: "Cargo Expert",
    img: "/logo7.jpg",
  },
  {
    name: "Okee",
    img: "/logo8.png",
  },
  {
    name: "Strefa Serwisowa",
    img: "/logo9.jpg",
  },
  {
    name: "DomOgrodIMy",
    img: "/logo10.png",
  },
  {
    name: "Okna Debow",
    img: "/logo11.png",
  },
];
