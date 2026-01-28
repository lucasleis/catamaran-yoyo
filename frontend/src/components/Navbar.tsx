import { useState, useEffect } from 'react';
import { Anchor, Menu, X } from 'lucide-react';

type NavbarProps = {
  forceScrolled?: boolean;
};

const Navbar = ({ forceScrolled = false }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (forceScrolled) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll(); // estado inicial
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceScrolled]);

  const scrolled = forceScrolled || isScrolled;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      data-navbar
      data-scrolled={scrolled}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <Anchor
            className={`w-8 h-8 ${
              scrolled ? 'text-blue-600' : 'text-white'
            }`}
          />
          <span
            className={`text-2xl font-bold ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            Catamarán Yoyo
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          {['Nosotros', 'Experiencias', 'Galería', 'Contacto'].map(item => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`font-medium transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              {item}
            </button>
          ))}

          <button
            onClick={() => scrollToSection('contacto')}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Reservar Ahora
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2">
          <div className="flex flex-col space-y-4 px-6 py-6">
            {['Nosotros', 'Experiencias', 'Galería', 'Contacto'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 font-medium text-left"
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold"
            >
              Reservar Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
