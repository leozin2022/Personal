import React from 'react';

const Results: React.FC = () => {
  return (
    <section id="resultados" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Resultados <span className="text-brand-purple">Reais</span>
        </h2>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
           {/* 
              IMAGENS DE RESULTADOS:
              Substitua por fotos reais de antes e depois.
              Use dimensões similares para manter o grid alinhado.
           */}
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
            <img src="https://picsum.photos/id/325/600/400" alt="Resultado 1" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold border-2 border-white px-4 py-2 rounded">Ver História</span>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
            <img src="https://picsum.photos/id/431/600/400" alt="Resultado 2" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold border-2 border-white px-4 py-2 rounded">Ver História</span>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer md:hidden lg:block">
            <img src="https://picsum.photos/id/129/600/400" alt="Resultado 3" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold border-2 border-white px-4 py-2 rounded">Ver História</span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-brand-purple/5 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex text-brand-teal mb-4">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Eu nunca gostei de academia, mas o método de treinar respeitando meu corpo mudou tudo. Em 3 meses perdi 8kg e ganhei muita disposição!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                   {/* Avatar Cliente 1 */}
                  <img src="https://picsum.photos/id/1027/100/100" alt="Avatar" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Mariana Silva</h4>
                  <p className="text-xs text-gray-500">Aluna Consultoria Online</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex text-brand-teal mb-4">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="text-gray-600 italic mb-6">
                "O desafio de 30 dias foi o pontapé que eu precisava. O suporte no WhatsApp faz toda a diferença quando bate o desânimo."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                    {/* Avatar Cliente 2 */}
                  <img src="https://picsum.photos/id/338/100/100" alt="Avatar" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Carla Nunes</h4>
                  <p className="text-xs text-gray-500">Aluna Desafio 30 Dias</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;