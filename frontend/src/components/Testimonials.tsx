import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      location: 'Ciudad de Panamá',
      rating: 5,
      text: 'Una experiencia increíble. La tripulación fue super profesional y atenta en todo momento. El catamarán estaba impecable y las vistas eran de otro mundo. Sin duda lo recomiendo al 100%.',
      date: 'Febrero 2025',
    },
    {
      name: 'Carlos Mendoza',
      location: 'Colombia',
      rating: 5,
      text: 'Celebramos nuestro aniversario y fue perfecto. Todos los detalles estaban cuidados, desde la música hasta la comida. El capitán nos llevó a lugares espectaculares. Volveremos seguro.',
      date: 'Enero 2025',
    },
    {
      name: 'Laura Sánchez',
      location: 'México',
      rating: 5,
      text: 'Reservé para una despedida de soltera y superó todas mis expectativas. El equipo hizo que todo fuera mágico. Navegamos al atardecer y fue el momento más hermoso. Gracias por todo.',
      date: 'Diciembre 2024',
    },
    {
      name: 'Roberto Jiménez',
      location: 'Panamá',
      rating: 5,
      text: 'Profesionales de principio a fin. Me sentí seguro en todo momento y pude disfrutar sin preocupaciones. El catamarán es hermoso y muy cómodo. Una inversión que valió cada centavo.',
      date: 'Noviembre 2024',
    },
    {
      name: 'Ana Patricia Ruiz',
      location: 'Costa Rica',
      rating: 5,
      text: 'Mi familia y yo tuvimos un día espectacular. Los niños nadaron, hicimos snorkel y disfrutamos del sol. La tripulación fue amable y nos hizo sentir como en casa. Inolvidable.',
      date: 'Octubre 2024',
    },
    {
      name: 'Fernando Torres',
      location: 'Estados Unidos',
      rating: 5,
      text: 'I had the best time! The crew was amazing, very professional and friendly. The catamaran is beautiful and well-maintained. Highly recommend for anyone visiting Panama.',
      date: 'Septiembre 2024',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacción de quienes navegan con nosotros es nuestro mejor reconocimiento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Más de 1,000 experiencias exitosas nos respaldan
          </p>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-600">promedio de calificación</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
