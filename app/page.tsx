
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Herosection from "./pages/Herosection";
import Logos from "./pages/Logo";
import Portfolio from "./pages/Portfolio";
import Professional from "./pages/Professional";
export default function Home() {
  return (
    <div>

      <Herosection />
      <Logos />
      <Professional />
    
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
