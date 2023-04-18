import HeroSection from "@/components/Hero-section";
import dynamic from "next/dynamic";
const Content = dynamic(() => import("@/components/Content"));

export default function Contact() {
  return (
    <Content title='Kontak'>
      <HeroSection title="Kontak" />
    </Content>
  );
}
