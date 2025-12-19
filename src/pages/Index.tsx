import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Index;
