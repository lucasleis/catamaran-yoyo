import { Shield, Heart, Sun, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Seguridad Garantizada',
      description:
        'Contamos con todo el equipo de seguridad certificado, tripulación con licencias vigentes y seguros completos. Tu bienestar es nuestra máxima prioridad.',
      color: 'blue',
    },
    {
      icon: Heart,
      title: 'Compromiso con el Cliente',
      description:
        'Nos apasiona crear momentos inolvidables. Desde la reserva hasta el final del viaje, estaremos contigo para asegurar que todo sea perfecto.',
      color: 'cyan',
    },
    {
      icon: Sun,
      title: 'Clima Excepcional',
      description:
        'Navegamos en las mejores condiciones climáticas y conocemos las rutas perfectas para aprovechar el sol, las aguas tranquilas y las vistas espectaculares.',
      color: 'blue',
    },
    {
      icon: Star,
      title: 'Experiencia Inolvidable',
      description:
        'Más de 1,000 clientes satisfechos respaldan nuestro servicio. Cada detalle está pensado para superar tus expectativas y crear recuerdos que durarán para siempre.',
      color: 'cyan',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos la opción número uno en Panamá por estas razones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  reason.color === 'blue' ? 'bg-blue-100' : 'bg-cyan-100'
                }`}
              >
                <reason.icon
                  className={`w-8 h-8 ${
                    reason.color === 'blue' ? 'text-blue-600' : 'text-cyan-600'
                  }`}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Navega con Confianza</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Miles de personas ya han confiado en nosotros para vivir las mejores experiencias
            en el mar. Únete a la familia de Catamarán Panamá y descubre por qué somos líderes
            en el Pacífico panameño.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Reserva Tu Aventura
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
