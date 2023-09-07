import React from "react";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import Dex from "@/components/Home/Dex/Dex";
import SeeTradingPairs from "@/components/Home/SeeTradingPairs/SeeTradingPairs";
import SolapeToken from "@/components/Home/SolapeToken/SolapeToken";
import TryTheSwap from "@/components/Home/TryTheSwap/TryTheSwap";
import Roadmap from "@/components/Home/Roadmap/Roadmap";
import Services from "@/components/Home/Services/Services";
import Faq from "@/components/Home/Faq/Faq";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Dex />
      <SeeTradingPairs />
      <TryTheSwap />
      <SolapeToken />
      <Roadmap />
      <Services />
      <Faq />
    </>
  );
};

export default Home;
