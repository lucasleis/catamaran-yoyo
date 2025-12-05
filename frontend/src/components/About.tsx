import { Shield, Users, Heart, Award } from 'lucide-react';
import barco from "../assets/imgs/barco_altura.jpeg"; 
// import barco from "../assets/barco_altura_altura.jpeg"; 


const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Más que un paseo,
              <span className="block text-blue-600">una experiencia inolvidable</span>
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
              <div className="flex items-start space-x-3">
                <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Seguridad Total</h3>
                  <p className="text-sm text-gray-600">Equipo certificado y protocolos rigurosos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Tripulación Experta</h3>
                  <p className="text-sm text-gray-600">Profesionales con años de experiencia</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Compromiso Total</h3>
                  <p className="text-sm text-gray-600">Tu satisfacción es nuestra prioridad</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Excelencia</h3>
                  <p className="text-sm text-gray-600">Servicio premium garantizado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={barco}
              alt="Catamarán navegando"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
