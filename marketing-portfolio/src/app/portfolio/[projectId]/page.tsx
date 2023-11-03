import React from "react";
import { CLIENT_DATA } from "@/constants";

type Params = {
  params: {
    projectId: string;
  };
};

const Project = ({params}: Params) => {
const id = params.projectId;


  return <div className="py-8 max-container padding-container bg-gradient-to-br from-gray-90">
    
   {CLIENT_DATA.map(client => client.id.toString() === id ? (
    <>
    
    <h1 className="text-blue-50 bold-52 lg:bold-70 mb-4">{client.title}</h1>
    <p className="text-white regular-20">{client.shortDescription}</p>
    <h2 className="text-blue-50 bold-40 lg:bold-52 my-4">Wyniki</h2>
    <p className="text-white regular-20">{client.results}</p>
    <h2 className="text-blue-50 bold-40 lg:bold-52 my-5">Podsumowanie</h2>
    <p className="text-white regular-20">{client.summary}</p>
   </>
   ): null)}
    
  </div>;
};

export default Project;
