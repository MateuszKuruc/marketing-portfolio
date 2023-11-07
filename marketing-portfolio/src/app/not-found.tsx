import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="h-screen flex-col flex items-center lg:pt-[400px] pt-[250px] gap-2">
      <h1 className="text-3xl font-header">404</h1>
      <p className="font-standard regular-20">
        Nie znaleziono strony, której szukasz.
      </p>
      <p className="font-standard regular-20">
        Wróć do strony głównej{" "}
        <Link
          className="underline text-slate-500 font-medium hover:text-slate-700"
          href="/"
        >
          tutaj
        </Link>
      </p>
    </main>
  );
};

export default NotFound;
