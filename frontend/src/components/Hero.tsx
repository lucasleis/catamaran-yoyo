import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-cyan-900/30 z-10" />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight drop-shadow-[0_6px_12px_rgba(0,0,0,0.85)]"
          style={{ WebkitTextStroke: '1px rgba(0,0,0,0.4)' }}
        >
          Vive Panamá desde el mar
        </h1>
        <p
          className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl font-medium tracking-wide 
          drop-shadow-[0_3px_6px_rgba(0,0,0,0.85)]"
          style={{ WebkitTextStroke: '0.6px rgba(0,0,0,0.28)' }}
        >
          Catamarán Yoyo
        </p>



        <button
          onClick={() => scrollToSection('contacto')}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Reservar Ahora
        </button>

        <button
          onClick={() => scrollToSection('nosotros')}
          className="absolute bottom-12 animate-bounce"
        >
          <ChevronDown className="w-10 h-10 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
