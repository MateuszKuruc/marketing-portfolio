// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "hero", label: "Strona główna" },
  { href: "#about", key: "about", label: "O mnie" },
  { href: "#portfolio", key: "portfolio", label: "Portfolio" },
  { href: "#contact", key: "contact", label: "Kontakt " },
];

// offsets for desktop

export const OFFSETS_DESKTOP: {
  [key: string]: number;
} = {
  hero: 0,
  about: 600,
  portfolio: 1200,
  contact: 2700,
};

// offsets for mobile

export const OFFSETS_MOBILE: {
  [key: string]: number;
} = {
  hero: 0,
  about: 560,
  portfolio: 990,
  contact: 2550,
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
    title: "ROAS 16000%",
    shortDescription:
      "Stałem przed wyzwaniem opracowania i realizacji strategii reklamowej dla sklepu odzieżowego eCommerce, który miał ambitne plany rozwoju swojej obecności w internecie. Celem było znaczące zwiększenie efektywności inwestycji w reklamę, co miałem zmierzyć wskaźnikiem ROAS (Return on Advertising Spend).",
    results_p1:
      "Początkowy wskaźnik zwrotu z inwestycji w reklamę wynosił 800%. To był dobry początek, ale ja miałem aspiracje, aby tę wartość wywindować znacznie wyżej. WprowadzaŁEM optymalizacje - od dopracowania komunikatów marketingowych po precyzyjne targetowanie i personalizację reklam, aż po usprawnienia w ścieżce zakupowej klientów.",
    results_p2:
      "Moje działania przyniosły wzrost ROAS do poziomu 16000%. Taki wynik udało się osiągnąć dzięki ciągłemu monitorowaniu kampanii, analizie danych i dostosowywaniu się do zmieniających się preferencji klientów.",
    summary_p1:
      "Podsumowując, zaangażowanie w kampanię reklamową dla sklepu Okee przyniosło zdumiewająco wysoki zwrot z inwestycji i umocniło pozycję marki na rynku.",
    summary_p2:
      "Moje doświadczenie ponownie potwierdza, że odpowiednio zaprojektowana i zarządzana strategia reklamowa może generować znaczące korzyści. W kwestii wyników kampanii nie ma sufitu, zamykaliśmy niektóre tygodnie na ROAS'ie 70-80.",
    img: "/client_2_results.jpeg",
  },
  {
    id: 3,
    title: "300 KLIENTÓW MLM",
    shortDescription:
      "Zostałem poproszony o pomoc przez jedną z ambasadorek marki Mary Kay, działającą w systemie MLM w branży beauty. Zadaniem było stworzenie kampanii na Meta Ads, która wygeneruje silne zaangażowanie i przekształci obserwujących w klientów.",
    results_p1:
      "Cel udało się osiągnąć, tworząc spersonalizowane treści, które przekazują wartości i estetykę marki Mary Kay. Stawiałem na interakcję i budowanie społeczności wokół produktów, a także na inspirowanie potencjalnych klientów do dzielenia się swoimi doświadczeniami i zainteresowaniami.",
    results_p2:
      "Moje wysiłki przyniosły nadzwyczajne rezultaty - posty, które stworzyłem, zgromadziły niemal 400 komentarzy, co świadczyło o wysokim stopniu zaangażowania i zainteresowaniu marką. To zaangażowanie zamieniłem na konkretne wyniki - udało mi się pozyskać aż 300 nowych klientów dla ambasadorki, co znacznie przekroczyło jej oczekiwania.",
    summary_p1:
      "Ten projekt był dowodem na to, że dobrze przemyślana strategia w mediach społecznościowych, oparta na autentycznym zaangażowaniu i interakcji z odbiorcami, może przynieść znakomite rezultaty w branży beauty, gdzie relacje i osobiste doświadczenia odgrywają kluczową rolę.",
    summary_p2:
      "Dzięki współpracy z ambasadorką Mary Kay, nie tylko osiągnąłem wyznaczone cele, ale także zbudowałem solidną podstawę dla jej dalszego rozwoju i sukcesu w biznesie MLM.",
    img: "/client_3_results.jpeg",
  },
  {
    id: 4,
    title: "ROAS 700% NA EBOOKU",
    shortDescription:
      "Zostałem zatrudniony przez klientkę, która zajmowała się sprzedażą ebooków - produktów w pełni cyfrowych, dedykowanych rodzicom szukającym porad w wychowaniu dzieci. Moim zadaniem była optymalizacja kampanii reklamowej, aby zwiększyć rentowność sprzedaży jej poradników.",
    results_p1:
      "Ceny za zakup wynosiły między 6 a 7 zł, co pozwoliło mi osiągnąć REALNY ROAS na poziomie 700%. Było to możliwe dzięki analizie rynku oraz dostosowaniu kampanii do specyfiki grupy docelowej, składającej się z rodziców potrzebujących wsparcia w wychowaniu swoich pociech.",
    results_p2:
      "Praca nad kampanią obejmowała między innymi testowanie różnych wersji reklam, segmentację odbiorców i wykorzystanie zaawansowanego targetowania, aby dotrzeć do osób najbardziej zainteresowanych treścią poradników. Efektywność działań promocyjnych przełożyła się na zysk rzędu około 30 zł na każdym sprzedanym egzemplarzu ebooka.",
    summary_p1:
      "Ten projekt pokazał mi, że nawet produkty cyfrowe o wąskiej niszy rynkowej, takie jak poradniki dla rodziców, mogą generować znaczące przychody przy właściwej strategii marketingowej.",
    summary_p2:
      "Dzięki skupieniu się na danych i ciągłym optymalizacjom, udało mi się nie tylko spełnić, ale przekroczyć oczekiwania klientki pod względem sprzedaży jej produktów.",
    img: "",
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
