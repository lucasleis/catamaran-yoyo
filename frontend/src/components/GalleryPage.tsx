import { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import {
  barcoImages,
  clientesImages,
  comidaImages,
  destinoImages,
  videos,
} from '../utils/galleryImages';

type Section =
  | { id: string; label: string; images: string[] }
  | { id: string; label: string };

const sections: Section[] = [
  { id: 'barco', label: 'El barco', images: barcoImages },
  { id: 'comida', label: 'Comidas a bordo', images: comidaImages },
  { id: 'destino', label: 'Destinos', images: destinoImages },
  { id: 'clientes', label: 'Nuestros clientes', images: clientesImages },
  { id: 'videos', label: 'Videos' },
];

const GalleryPage = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Medimos la altura REAL del Navbar
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('nav[data-navbar]');
    if (!navbar) return;

    const updateHeight = () => {
      setNavbarHeight(navbar.getBoundingClientRect().height);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const imageSections = sections.filter(
    (s): s is { id: string; label: string; images: string[] } =>
      'images' in s && Array.isArray(s.images)
  );

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="mt-16 mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Recorrido fotográfico
            </h1>
          </div>

          {/* MENÚ GALERÍA (STICKY) */}
          <div
            id="gallery-nav"
            className="sticky z-40 bg-white border-b border-gray-200"
            style={{ top: navbarHeight }}
          >
            {/* Wrapper interno para separación visual */}
            <div className="mt-2">
              <div className="flex gap-6 overflow-x-auto py-4">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="
                      whitespace-nowrap
                      text-sm
                      font-medium
                      text-gray-600
                      hover:text-gray-900
                      transition-colors
                      border-b-2
                      border-transparent
                      hover:border-gray-900
                      pb-2
                    "
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SECCIONES */}
          <div className="space-y-24 pt-8">
            {/* IMÁGENES */}
            {imageSections.map(section => (
              <section key={section.id} id={section.id}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  {section.label}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {section.images.map((img, idx) => (
                    <div key={idx} className="h-80 rounded-xl overflow-hidden">
                      <img
                        src={img}
                        alt={section.label}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* VIDEOS (AL FINAL) */}
            <section id="videos">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Videos
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {videos.map((src, idx) => (
                  <div
                    key={idx}
                    className="h-80 rounded-xl overflow-hidden bg-black"
                  >
                    <video
                      src={src}
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default GalleryPage;
