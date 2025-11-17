import { Sunset, PartyPopper, MapPin, Users } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      icon: Users,
      title: 'Paseos Privados',
      description: 'Experiencia exclusiva personalizada para ti y tus acompañantes',
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4-8 horas',
    },
    {
      icon: PartyPopper,
      title: 'Celebraciones',
      description: 'Cumpleaños, aniversarios, despedidas o cualquier ocasión especial',
      image: 'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: 'Flexible',
    },
    {
      icon: MapPin,
      title: 'Tours por Islas',
      description: 'Descubre las islas más hermosas del Pacífico panameño',
      image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: 'Todo el día',
    },
    {
      icon: Sunset,
      title: 'Atardeceres',
      description: 'Contempla las puestas de sol más espectaculares en medio del océano',
      image: 'https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3-4 horas',
    },
  ];

  return (
    <section id="experiencias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experiencias Diseñadas para Ti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada travesía es única. Elige la experiencia que mejor se adapte a lo que buscas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <exp.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-white/90 text-lg mb-3">{exp.description}</p>
                <p className="text-cyan-400 font-semibold">Duración: {exp.duration}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            ¿No encuentras lo que buscas? Contáctanos y diseñamos una experiencia a tu medida
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Consultar Disponibilidad
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
