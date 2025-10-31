export const metadata = {
  title: "Stelestial - Software",
  description: "Soluções em Software em Belo Horizonte",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import SuccessCase from "@/components/sucesscase";
import RibeiroSucessCase from "@/components/ribeirosucesscase";
import MarketDeliverySuccessCase from "@/components/marketdeliverysuccesscase";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Pricing />
      <Testimonials />
    <SuccessCase />
        <MarketDeliverySuccessCase />
    <RibeiroSucessCase />
      <Cta />
    </>
  );
}
