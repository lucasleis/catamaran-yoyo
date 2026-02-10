import { Users, Music, Shield, Wifi, Utensils, Anchor } from "lucide-react";
import { useState } from "react";

// Imágenes
import img1 from "../assets/imgs/barco/barco-1.jpg";
import img2 from "../assets/imgs/barco/barco-3.jpg";

const ImageSkeleton = () => (
  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
);

const Features = () => {
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Capacidad hasta 20 personas",
      description: "Espacio amplio y cómodo para grupos grandes",
    },
    {
      icon: Music,
      title: "Sistema de sonido premium",
      description: "Música de alta calidad para ambientar tu experiencia",
    },
    {
      icon: Shield,
      title: "Equipo de seguridad certificado",
      description: "Chalecos salvavidas, botiquín y comunicación de emergencia",
    },
    {
      icon: Wifi,
      title: "Conectividad a bordo",
      description: "Wi-Fi disponible para compartir tus momentos",
    },
    {
      icon: Utensils,
      title: "Servicio de catering",
      description: "Opciones de comida y bebida según tu preferencia",
    },
    {
      icon: Anchor,
      title: "Zonas de anclaje exclusivas",
      description: "Acceso a las mejores bahías y playas privadas",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comodidad y Lujo en Alta Mar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nuestro catamarán cuenta con todas las comodidades para que disfrutes al máximo
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Imágenes */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Imagen 1 */}
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            {!img1Loaded && <ImageSkeleton />}
            <img
              src={img1}
              alt="Interior del catamarán"
              loading="lazy"
              decoding="async"
              onLoad={() => setImg1Loaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                img1Loaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Imagen 2 */}
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            {!img2Loaded && <ImageSkeleton />}
            <img
              src={img2}
              alt="Exterior del catamarán"
              loading="lazy"
              decoding="async"
              onLoad={() => setImg2Loaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                img2Loaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
