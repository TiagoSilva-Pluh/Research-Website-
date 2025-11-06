import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import Technology from "@/components/Technology";
import Privacy from "@/components/Privacy";
import Methodology from "@/components/Methodology";
import Outcomes from "@/components/Outcomes";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Challenge />
      <Solution />
      <Technology />
      <Privacy />
      <Methodology />
      <Outcomes />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
