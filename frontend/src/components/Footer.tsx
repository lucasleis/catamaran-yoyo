import { Anchor, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Anchor className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold">Catamarán Panamá</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creando experiencias inolvidables en el mar desde 2015. Tu seguridad y satisfacción
              son nuestra prioridad.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navegación</h3>
            <ul className="space-y-3">
              {['Nosotros', 'Experiencias', 'Galería', 'Contacto'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">+507 6666-6666</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">info@catamaranpanama.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Ciudad de Panamá, Panamá</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 mt-6 text-sm">
              Comparte tus experiencias con nosotros usando
              <span className="block text-cyan-400 font-semibold mt-1">#CatamaránPanamá</span>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Catamarán Panamá. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                Términos y Condiciones
              </button>
              <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
