"use client";

import React from "react";
import { CLIENT_DATA } from "@/constants";
import Image from "next/image";
import { Params } from "../../../../types";
import Reveal from "@/components/Reveal";

const Project = ({ params }: Params) => {
  const id = params.projectId;

  return (
    <section className="bg-gradient-to-b from-gray-30 to-gray-90 py-8 max-container padding-container">
      {CLIENT_DATA.map((client) =>
        client.id.toString() === id ? (
          <div
            key={client.id}
            className="md:padding-container flex flex-col items-center"
          >
            <h1 className="font-header text-blue-50 bold-40 lg:bold-52 text-center">
              {client.title}
            </h1>
            <Reveal>
              <p className="font-standard text-white regular-20 py-8">
                {client.shortDescription}
              </p>
            </Reveal>
            <h2 className="font-header text-blue-50 bold-40 lg:bold-52">
              Wyniki
            </h2>
            <Reveal>
              <p className="font-standard text-white regular-20 pt-8 pb-4">
                {client.results_p1}
              </p>
            </Reveal>
            <Reveal>
              <p className="font-standard text-white regular-20 mb-8">
                {client.results_p2}
              </p>
            </Reveal>

            <div>
              {client.img && (
                <Image
                  className="rounded-md border-2 border-coral-50 lg:rounded-2xl lg:border-4"
                  src={client.img}
                  width={1200}
                  height={350}
                  alt="tabela wyników"
                />
              )}
            </div>

            <h2 className="font-header text-blue-50 bold-40 lg:bold-52 py-8">
              Ocena
            </h2>
            <Reveal>
              <p className="font-standard text-white regular-20 mb-4">
                {client.summary_p1}
              </p>
            </Reveal>
            <Reveal>
              <p className="font-standard text-white regular-20 mb-8">
                {client.summary_p2}
              </p>
            </Reveal>
          </div>
        ) : null
      )}
    </section>
  );
};

export default Project;
