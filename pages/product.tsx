import HeroSection from "@/components/Hero-section";

import dynamic from "next/dynamic";
const Content = dynamic(() => import("@/components/Content"));

export default function Product() {
  return (
    <Content title="Produk">
      <HeroSection title="Produk" />
    </Content>
  );
}
