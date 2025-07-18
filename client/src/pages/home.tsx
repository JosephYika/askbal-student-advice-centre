import Header from "@/components/header";
import Hero from "@/components/hero";
import QuickAccess from "@/components/quick-access";
import About from "@/components/about";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" role="main">
        <Hero />
        <QuickAccess />
        <About />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
