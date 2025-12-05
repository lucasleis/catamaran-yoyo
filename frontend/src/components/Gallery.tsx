import { useState } from 'react';
import { X } from 'lucide-react';

import galeria_1 from "../assets/galeria_1.jpeg";
//import galeria_2 from "../assets/galeria_2.jpeg";
import galeria_3 from "../assets/galeria_3.jpg";
import galeria_4 from "../assets/galeria_4.jpeg";
//import galeria_5 from "../assets/galeria_5.jpeg";
import galeria_6 from "../assets/galeria_6.jpeg";
import galeria_7 from "../assets/galeria_7.jpeg";
//import galeria_8 from "../assets/galeria_8.jpeg";



const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: galeria_1,
      alt: 'Catamarán navegando',
    },
    {
      url: 'https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Atardecer en el mar',
    },
    {
      url: galeria_3,
      alt: 'Islas tropicales',
    },
    {
      url: galeria_4,
      alt: 'Vista del catamarán',
    },
    {
      url: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Interior del catamarán',
    },
    {
      url: galeria_6,
      alt: 'Experiencia privada',
    },
    {
      url: galeria_7,
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
