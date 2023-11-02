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
    clientName: "Microsoft",
    shortDescription:
      "testowy opis krotki klient 1 qwheqewhjkqwhejkqw wqhekjqhwejkqwhejkqw qhjrlqwrjhlkqwhrjkqlwr wqnehklwqhejkqwheqwjke wqhejklqwheqwjkehqwjkeqw",
    results:
      "klient 1 wyniki tarararararararaekqjwjeh qwehkjqwheqwjke wqhekqwhekjqwhejwkq qhekjqwhejkqwhejkqwe qhwejkqwhekjqhejkqwehjkqw wqhekqwhekjqwhejkqwe wqhekjqwhejkqwewq",
    summary:
      "klient 1 krotkie podsumowanie bububububububuqbeywqgruiq qhreuqwheriwquhewqiu wqheuiwqhewquieq qweiuqwheiuqwheqiuw heuiqwheuiqwheuiwq qwheuiqwheiuwq",
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
    title: "Client 1 - Microsoft",
    description:
      "Dla tego klienta przygotowalem niezle gowno, zrobilismy fajna kampanie pod kliki na fb i prowadzilem im jeszcze profile na wszystkich social mediach. sadsadsa sadsadsad sadsadsad sadsadsad sadsadd",
  },
  {
    id: 2,
    title: "Client 2 - Google",
    description:
      "Tutaj robilismy kampanie google ads i nagrywalismy tiktoki. Do tego pracowalismy nad podniesienem ruchu na stronie, zanotowalismy wzrost 500%. sadsadsadsadsa sadsadsadsa sdsadsadsad sadsadsadsadas",
  },
  {
    id: 3,
    title: "Client 3 - Apple",
    description:
      "Prowadzilem konsultacje marketingowe dla klienta w branzy bankowej. Tematyka dotyczyla doboru grafik przy prowadzeniu profilow w social media. adasdasdsadsa sadasdasdsadas dsadsadsadsad sadsadsadsa",
  },
  {
    id: 4,
    title: "Client 4 - Samsung",
    description:
      "Fajowa wspolpraca owocujaca w turbo wyniki. sadjaskdsakjdjhasjkdas dashdashjldkhaskdhaskjd sadjaslkdjaslkdkhaldkas ahdklashdjlkasdhjaksldhsakj",
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
