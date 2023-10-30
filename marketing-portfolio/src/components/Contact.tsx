import React from "react";
import Form from "./Form";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="border-t-4 py-0 max-container bg-radial-gradient">
      <div className="flex flex-col relative w-full md:items-center">
        {/* <div className="flex flex-col items-center justify-center"> */}

        <h1 className="self-center bold-52 mt-8 lg:bold-70 text-blue-50">
          Kontakt
        </h1>
        <p className="p-4 regular-20 text-white ">
          Uzupelnij formularz i daj znac czego potrzebujesz
        </p>
        {/* </div> */}
        <Image
          src="/background.jpg"
          className="w-full h-full absolute object-cover mix-blend-luminosity rounded-2xl opacity-5"
          alt="background"
          width={500}
          height={500}
          quality={100}
        />
        <div className="pb-4 px-4">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
