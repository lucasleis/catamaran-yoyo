import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Experiences from './components/Experiences';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Experiences />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
