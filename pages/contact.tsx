import HeroSection from "@/components/TitleSection";
import dynamic from "next/dynamic";
const Content = dynamic(() => import("@/components/Content"));

export default function Contact() {
  return (
    <Content title='Kontak'>
      <HeroSection title="Kontak" />
    </Content>
  );
}
