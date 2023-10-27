import React from "react";
import Form from "./Form";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="border-t-4 bg-gradient-to-b from-gray-90 py-10 max-container padding-container">
      <h1 className="bold-52 lg:bold-70 text-blue-50">Kontakt</h1>
      <p className="regular-20 text-white">
        Uzupelnij formularz i daj znac czego potrzebujesz
      </p>
      {/* <div className="flex flex-col md:flex-row md:gap-20"> */}
      <div className="flex flex-col md:items-center">
        <Form />
      </div>
      {/* </div> */}
    </section>
  );
};

export default Contact;
