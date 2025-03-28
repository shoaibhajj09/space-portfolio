import Encription from "@/components/main/Encription";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="w-full h-full ">
      <div className="flex flex-col  gap-20">
        <Hero />
        <Skills />
        <Encription/>
        <Projects />
        <Footer/>
      </div>
    </main>
  );
}
