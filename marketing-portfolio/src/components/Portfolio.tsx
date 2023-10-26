import React from "react";

const Portfolio = () => {
  return (
    <section className="border-t-4 border-white max-container padding-container bg-gradient-to-t from-gray-90 py-10 lg:py-20 md:gap-28">
      <header className="mb-10 padding container max-container">
        <h1 className="bold-52 lg:bold-70 text-blue-50">Portfolio</h1>
        <p className="regular-16 text-white mt-6">
          Sprawdz jak poprawilem marketingowe wskazniki u moich klientow{" "}
        </p>
      </header>
      <section>
        <div>
          <h2 className="bold-32 text-blue-50">Client 1</h2>
          <p className="regular-16 text-white mt-6">
            Dla tego klienta przygotowalem niezle gowno, zrobilismy fajna
            kampanie pod kliki na fb i prowadzilem im jeszcze profile na
            wszystkich social mediach.
          </p>
        </div>

        <div>
          <h2 className="bold-32 text-blue-50">Client 1</h2>
          <p className="regular-16 text-white mt-6">
            Tutaj robilismy kampanie google ads i nagrywalismy tiktoki. Do tego
            pracowalismy nad podniesienem ruchu na stronie, zanotowalismy wzrost
            500%.
          </p>
        </div>

        <div>
          <h2 className="bold-32 text-blue-50">Client 1</h2>
          <p className="regular-16 text-white mt-6">
            Prowadzilem konsultacje marketingowe dla klienta w branzy bankowej.
            Tematyka dotyczyla doboru grafik przy prowadzeniu profilow w social
            media.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;

// divide border for projects? with accordion? first one shown
