import React from "react";
import { CLIENT_DATA } from "@/constants";
import Image from "next/image";

type Params = {
  params: {
    projectId: string;
  };
};

const Project = ({ params }: Params) => {
  const id = params.projectId;

  return (
    <section className="bg-gradient-to-b from-gray-30 to-gray-90 py-8 max-container padding-container">
      {CLIENT_DATA.map((client) =>
        client.id.toString() === id ? (
          <div className="padding-container flex flex-col items-center">
            <h1 className="font-header text-blue-50 bold-40 lg:bold-52 my-4 text-center">
              {client.title}
            </h1>
            <p className="font-standard text-white regular-20">
              {client.shortDescription}
            </p>
            <h2 className="font-header text-blue-50 bold-40 lg:bold-52 my-4">
              Wyniki
            </h2>
            <p className="font-standard text-white regular-20 mb-4">
              {client.results_p1}
            </p>
            <p className="font-standard text-white regular-20 mb-4">
              {client.results_p2}
            </p>
            <div>
              {client.img && (
                <Image src={client.img} width={850} height={350} alt="wyniki" />
              )}
            </div>
            <h2 className="font-header text-blue-50 bold-40 lg:bold-52 my-5">
              Podsumowanie
            </h2>
            <p className="font-standard text-white regular-20 mb-4">
              {client.summary_p1}
            </p>
            <p className="font-standard text-white regular-20 mb-4">
              {client.summary_p2}
            </p>
          </div>
        ) : null
      )}
    </section>
  );
};

export default Project;
