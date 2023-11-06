"use client";

import React from "react";
import Form from "./Form";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t-4 py-0 max-container bg-radial-gradient"
    >
      <div className="flex flex-col relative w-full md:items-center">
        <h1 className="font-header self-center bold-40 mt-8 lg:bold-52 text-blue-50">
          Kontakt
        </h1>
        <p className="font-standard p-4 regular-20 text-white flex flex-col items-center">
          Uzupełnij formularz lub zadzwoń:{" "}
          <span className="font-medium">{process.env.CONTACT_NUMBER}</span>
        </p>

        <Image
          src="/background.jpg"
          className="w-full h-full absolute object-cover mix-blend-luminosity rounded-2xl opacity-5"
          alt="background"
          width={500}
          height={500}
          quality={100}
        />
        <Reveal>
          <div className="pb-4 px-4">
            <Form />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
