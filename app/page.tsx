import LatestProjects from "@/components/LatestProjects";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import AreasOfInterest from "../components/AreasOfInterest";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <AreasOfInterest />

        <LatestProjects />

        <Contact />

      </main>

      <Footer />

    </>
  );
}
