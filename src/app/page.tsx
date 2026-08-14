import Hero from "@/components/home/Hero";
import IndiaMoves from "@/components/home/IndiaMoves";
import Impact from "@/components/home/Impact";
import Partners from "@/components/home/Partners";
import CoreFocus from "@/components/home/CoreFocus";
import ConnectingLives from "@/components/home/ConnectingLives";
import Projects from "@/components/home/Projects";
import Community from "@/components/home/Community";
import Insights from "@/components/home/Insights";
import JoinUs from "@/components/home/JoinUs";
import Awards from "@/components/home/Awards";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <IndiaMoves />
      <Impact />
      <Partners />
      <CoreFocus />
      <ConnectingLives />
      <Projects />
      <Community />
      <Insights />
      <JoinUs />
      <Awards />
      <FinalCTA />
    </div>
  );
}