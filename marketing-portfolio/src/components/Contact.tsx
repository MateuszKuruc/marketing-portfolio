import React from "react";
import Form from "./Form";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    // <section className="border-t-4 bg-gradient-to-b from-gray-90 py-10 max-container padding-container">
    <section className="border-t-4 bg-gradient-to-b from-gray-90 py-0 max-container">
      {/* <h1 className="bold-52 lg:bold-70 text-blue-50">Kontakt</h1>
      <p className="regular-20 text-white">
        Uzupelnij formularz i daj znac czego potrzebujesz
      </p> */}

      <div className="flex flex-col md:items-center relative w-full bg-gradient-to-t from-gray-90 to-gray-90">
      <h1 className="bold-52 mt-8 lg:bold-70 text-blue-50">Kontakt</h1>
      <p className="regular-20 text-white">
        Uzupelnij formularz i daj znac czego potrzebujesz
      </p>
        <Image
          src="/background.jpg"
          className="w-full h-full absolute object-cover mix-blend-luminosity rounded-2xl opacity-5"
          alt="background"
          width={500}
          height={500}
          quality={100}
        />
        <div>

        <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
