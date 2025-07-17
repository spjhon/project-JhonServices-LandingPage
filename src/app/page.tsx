import { About } from "@/components/About";
import CalltoAction from "@/components/CalltoAction";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { HeroVideo } from "@/components/HeroVideo";
import { Testimonials } from "@/components/Testimonials";




export default function Home() {
  return (
    <>
     <Hero></Hero>
     <HeroVideo></HeroVideo>
     <About></About>
     <Features></Features>
     <Testimonials></Testimonials>
     <CalltoAction></CalltoAction>
     <Footer></Footer>
    </>
  );
}