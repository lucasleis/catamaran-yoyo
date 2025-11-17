import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Catamarán navegando',
    },
    {
      url: 'https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Atardecer en el mar',
    },
    {
      url: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Islas tropicales',
    },
    {
      url: 'https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Vista del catamarán',
    },
    {
      url: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Interior del catamarán',
    },
    {
      url: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Experiencia privada',
    },
    {
      url: 'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Celebración a bordo',
    },
    {
      url: 'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cubierta del catamarán',
    },
  ];

  return (
    <section id="galería" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galería de Momentos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre la belleza de navegar en el Pacífico panameño
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
