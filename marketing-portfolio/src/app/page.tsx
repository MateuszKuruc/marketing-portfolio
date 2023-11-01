import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import CarouselItem from "@/components/CarouselItem";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <CarouselItem />
      <Contact />
    </>
  );
}
