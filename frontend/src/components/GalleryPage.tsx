import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import galeria_1 from "../assets/imgs/galeria_1.jpeg";
import galeria_2 from "../assets/imgs/galeria_2.jpg";
import galeria_3 from "../assets/imgs/galeria_3.jpg";
import galeria_4 from "../assets/imgs/galeria_4.jpeg";
import galeria_5 from "../assets/imgs/galeria_5.jpg";
import galeria_6 from "../assets/imgs/galeria_6.jpeg";
import galeria_7 from "../assets/imgs/galeria_7.jpeg";
import galeria_8 from "../assets/imgs/galeria_8.jpeg";

const sections = [
  {
    id: 'living',
    label: 'Living',
    images: [galeria_1],
  },
  {
    id: 'cocina',
    label: 'Cocina completa',
    images: [galeria_2],
  },
  {
    id: 'comedor',
    label: 'Comedor',
    images: [galeria_3],
  },
  {
    id: 'dormitorio1',
    label: 'Dormitorio 1',
    images: [galeria_4],
  },
  {
    id: 'dormitorio2',
    label: 'Dormitorio 2',
    images: [galeria_5],
  },
  {
    id: 'banos',
    label: 'Baños',
    images: [galeria_6, galeria_7],
  },
  {
    id: 'exterior',
    label: 'Exterior',
    images: [galeria_8],
  },
];

const GalleryPage = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Recorrido fotográfico
            </h1>
          </div>

          {/* MENÚ TIPO AIRBNB */}
          <div className="sticky top-24 z-20 bg-white border-b border-gray-200 mb-16">
            <div className="flex gap-6 overflow-x-auto pb-4">
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

          {/* SECCIONES */}
          <div className="space-y-24">
            {sections.map(section => (
              <section key={section.id} id={section.id}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  {section.label}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {section.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="h-80 rounded-xl overflow-hidden"
                    >
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
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default GalleryPage;
