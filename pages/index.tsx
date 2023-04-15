import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";

import Content from "@/components/Content";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <div className="py-10 overflow-hidden">
        <Content/>
      </div>
      
    </>
  );
}
