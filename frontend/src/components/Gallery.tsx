import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import galeria_1 from "../assets/imgs/galeria_1.webp";
import galeria_2 from "../assets/imgs/galeria_2.webp";
import galeria_3 from "../assets/imgs/galeria_3.webp";
import galeria_4 from "../assets/imgs/galeria_4.webp";
import galeria_5 from "../assets/imgs/galeria_5.webp";
import galeria_6 from "../assets/imgs/galeria_6.webp";
import galeria_7 from "../assets/imgs/galeria_7.webp";
import galeria_8 from "../assets/imgs/destino/destino-2.webp";

const ImageSkeleton = () => (
  <div className="absolute inset-0 bg-gray-300 animate-pulse" />
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [modalLoaded, setModalLoaded] = useState(false);

  const navigate = useNavigate();

  const images = [
    { url: galeria_4, alt: "Catamarán navegando" },
    { url: galeria_3, alt: "Atardecer en el mar" },
    { url: galeria_2, alt: "Islas tropicales" },
    { url: galeria_1, alt: "Vista del catamarán" },
    { url: galeria_8, alt: "Interior del catamarán" },
    { url: galeria_5, alt: "Experiencia privada" },
    { url: galeria_6, alt: "Celebración a bordo" },
    { url: galeria_7, alt: "Cubierta del catamarán" },
  ];

  return (
    <section id="galería" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galería de Momentos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre la belleza de navegar en el Pacífico panameño
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden cursor-pointer group bg-gray-200"
              onClick={() => {
                setModalLoaded(false);
                setSelectedImage(image.url);
              }}
            >
              {!loadedImages[index] && <ImageSkeleton />}

              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                onLoad={() =>
                  setLoadedImages((prev) => ({ ...prev, [index]: true }))
                }
                className={`w-full h-full object-cover transition-[opacity,transform] duration-700
                  ${loadedImages[index] ? "opacity-100" : "opacity-0"}
                  group-hover:scale-110`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate("/gallery")}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Ver más imágenes
          </button>
        </div>

        {/* Modal */}
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

            <div className="relative max-w-full max-h-full">
              {!modalLoaded && (
                <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg" />
              )}

              <img
                src={selectedImage}
                alt="Vista ampliada"
                decoding="async"
                onLoad={() => setModalLoaded(true)}
                className={`max-w-full max-h-full object-contain rounded-lg transition-opacity duration-500 ${
                  modalLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
