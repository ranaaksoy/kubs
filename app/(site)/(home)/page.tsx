import FAQ from "../../../components/FAQ/faq";
import Hero from "../../../components/Hero";
// import Testimonial from "../../../components/Testimonial/testimonial";
import Ueberuns from "../../../components/Ueberuns";
import Vorteile from "../../../components/Vorteile";

export default function Home() {
  return (
    <>
      <Hero />
      <Ueberuns />
      <FAQ />
      {/* <Testimonial /> */}
      <Vorteile />
    </>
  );
}
