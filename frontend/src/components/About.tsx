import { Shield, Users, Heart, Award } from "lucide-react";
import { useState } from "react";
import barco from "../assets/imgs/barco_altura.jpeg";

/* Skeleton SOLO para la imagen */
const ImageSkeleton = () => (
  <div className="absolute inset-0 animate-pulse bg-gray-200" />
);

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* TEXTO */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Más que un paseo,
              <span className="block text-blue-600">
                una experiencia inolvidable
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              En Catamarán Panamá, nos dedicamos a crear experiencias únicas en el mar.
              Con más de 10 años de experiencia navegando las aguas cristalinas del Pacífico
              panameño, garantizamos tu seguridad y comodidad en cada travesía.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestro equipo de capitanes certificados y tripulación profesional está
              comprometido con brindarte el mejor servicio, cuidando cada detalle para que
              disfrutes al máximo del clima perfecto y las vistas espectaculares que
              Panamá tiene para ofrecer.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <Feature icon={<Shield />} title="Seguridad Total" desc="Equipo certificado y protocolos rigurosos" />
              <Feature icon={<Users />} title="Tripulación Experta" desc="Profesionales con años de experiencia" />
              <Feature icon={<Heart />} title="Compromiso Total" desc="Tu satisfacción es nuestra prioridad" />
              <Feature icon={<Award />} title="Excelencia" desc="Servicio premium garantizado" />
            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            {!imageLoaded && <ImageSkeleton />}

            <img
              src={barco}
              alt="Catamarán navegando"
              loading="lazy"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({
  icon,
  title,
  desc,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
}) => (
  <div className="flex items-start space-x-3">
    <div className="w-8 h-8 text-blue-600 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);

export default About;
