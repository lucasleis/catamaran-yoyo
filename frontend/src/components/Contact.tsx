import { useState } from 'react';
import { Calendar, Users, Mail, Phone, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    tourType: 'privado',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola! Me gustaría reservar un tour en catamarán.%0A%0ANombre: ${formData.name}%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone}%0AFecha: ${formData.date}%0APersonas: ${formData.guests}%0ATipo de tour: ${formData.tourType}%0AMensaje: ${formData.message}`;
    window.open(`https://wa.me/50766666666?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Reserva Tu Aventura
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo de inmediato
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="+507 6666-6666"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Fecha Deseada
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Users className="inline w-4 h-4 mr-2" />
                    Número de Personas
                  </label>
                  <input
                    type="number"
                    name="guests"
                    required
                    min="1"
                    max="20"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="Ej: 8"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Tipo de Tour</label>
                <select
                  name="tourType"
                  value={formData.tourType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                >
                  <option value="privado">Paseo Privado</option>
                  <option value="celebracion">Celebración</option>
                  <option value="islas">Tour por Islas</option>
                  <option value="atardecer">Atardecer</option>
                  <option value="personalizado">Personalizado</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                  placeholder="Cuéntanos más sobre lo que buscas..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Reserva por WhatsApp</span>
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <p className="text-gray-600">+507 6666-6666</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-gray-600">+507 6666-6666</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@catamaranpanama.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Horarios de Atención</h3>
              <p className="text-gray-600 mb-4">
                Lunes a Domingo: 7:00 AM - 7:00 PM
              </p>
              <p className="text-gray-700">
                Respondemos todas las consultas en menos de 2 horas. Para reservas de último
                minuto, contáctanos por WhatsApp para una respuesta inmediata.
              </p>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Contacto"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-semibold">
                  Tu aventura comienza con un solo mensaje
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
