import React from "react";
import { ACCORDION_DATA } from "@/constants";

type Params = {
  params: {
    projectId: string;
  };
};

const Project = ({params}: Params) => {
const id = params.projectId;


  return <div>
    <>
   {ACCORDION_DATA.map(client => client.id.toString() === id ? (
    <>
    
    <h1>{client.name}</h1>
    <p>{client.description}</p>
   </>
   ): null)}
    </>
  </div>;
};

export default Project;
