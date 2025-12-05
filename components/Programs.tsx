import React from 'react';

const programs = [
  {
    icon: 'fa-mobile-screen',
    title: 'Consultoria Online',
    description: 'Treinos periodizados entregues via app exclusivo com vídeos explicativos e suporte via WhatsApp.',
  },
  {
    icon: 'fa-dumbbell',
    title: 'Personal Presencial',
    description: 'Acompanhamento VIP durante seu treino para garantir execução perfeita e intensidade máxima.',
  },
  {
    icon: 'fa-calendar-check',
    title: 'Desafio 30 Dias',
    description: 'Um plano intensivo de emagrecimento com treinos metabólicos e guia alimentar para resultados rápidos.',
  },
];

const Programs: React.FC = () => {
  const whatsappLink = "https://wa.me/5589999867161";

  return (
    <section id="programas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            Escolha o seu <span className="text-brand-teal">Programa</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Opções flexíveis desenhadas para se adaptar ao seu estilo de vida e objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, index) => (
            <div 
              key={index} 
              className="bg-brand-purple rounded-2xl p-8 relative overflow-hidden shadow-xl animate-breathing border-2 border-purple-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-6 bg-white/20 text-white backdrop-blur-sm">
                <i className={`fas ${prog.icon}`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 font-heading">{prog.title}</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                {prog.description}
              </p>
              
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-brand-teal hover:text-white transition-colors"
              >
                Saiba Mais <i className="fas fa-chevron-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;