import React from "react";
import Form from "./Form";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="border-t-4 bg-gradient-to-b from-gray-90 py-10 max-container padding-container">
      <h1 className="bold-52 lg:bold-70 text-blue-50">Kontakt</h1>
      {/* <div className="md:flex md:justify-center md:gap-10 lg:gap-20 sm:flex-col"> */}
      <div className="md:flexStart md:gap-10 lg:gap-20">
        <div>
          <p className="regular-20 text-white">
            Uzupelnij formularz i daj znac czego potrzebujesz
          </p>
          <Form />
        </div>

        <div className="sm: mt-10">
          <p className="regular-20 text-white">...lub skontaktuj się przez:</p>
          <p className="text-white regular-16">
            Email:{" "}
            <Link
              className="text-blue-50"
              href={`mailto:${process.env.CONTACT_EMAIL}`}
            >
              {process.env.CONTACT_EMAIL}
            </Link>
          </p>
          <p className="text-white regular-16">
            Telefon:{" "}
            <span className="text-blue-50">{process.env.CONTACT_NUMBER}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
