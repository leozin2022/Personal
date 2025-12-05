import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            Onde nos <span className="text-brand-purple">encontrar</span>
          </h2>
          <p className="text-gray-600 mt-4">Venha fazer uma visita e conhecer nosso espaço.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-6xl mx-auto">
          {/* Informações de Contato/Endereço */}
          <div className="w-full lg:w-1/3 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            
            <div className="relative z-10 mb-8">
              <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple text-2xl mb-4">
                <i className="fas fa-map-pin"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Endereço</h3>
              <p className="text-gray-600 leading-relaxed">
                Rua José Anacleto da Silva, 318<br />
                Osasco - SP<br />
                <span className="text-sm text-gray-400 mt-1 block">Próximo ao ponto de referência local</span>
              </p>
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal text-2xl mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Horários</h3>
              <ul className="text-gray-600 space-y-1">
                <li className="flex justify-between">
                  <span>Seg - Sex:</span>
                  <span className="font-semibold">06:00 - 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-semibold">08:00 - 14:00</span>
                </li>
                <li className="flex justify-between text-red-400">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <a 
                  href="https://www.google.com/maps/dir//Rua+José+Anacleto+da+Silva,+318+-+Osasco,+SP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-purple font-bold hover:text-purple-700 transition-colors"
                >
                  <i className="fas fa-directions"></i> Traçar Rota
                </a>
            </div>
          </div>

          {/* Mapa Google Maps */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-auto bg-gray-200 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?q=Rua%20Jose%20Anacleto%20da%20Silva%20318%20Osasco%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
              title="Localização PowerFit - Rua José Anacleto da Silva 318"
              className="w-full h-full filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;