import React from 'react';

const testimonials = [
  {
    name: "Ana Paula S.",
    comment: "A consultoria mudou completamente minha relação com o espelho. Os treinos são intensos na medida certa!",
    stars: 5
  },
  {
    name: "Carla Mendes",
    comment: "Já tentei várias academias, mas só tive constância com o suporte online. O app é super fácil de usar.",
    stars: 5
  },
  {
    name: "Juliana Costa",
    comment: "Emagreci 6kg em 2 meses sem passar fome. A reeducação alimentar fez toda a diferença.",
    stars: 5
  },
  {
    name: "Beatriz Lima",
    comment: "A atenção que ela dá no WhatsApp é incrível. Me sinto treinando com uma personal do meu lado.",
    stars: 5
  },
  {
    name: "Fernanda R.",
    comment: "O desafio de 30 dias foi o pontapé que eu precisava para sair do sedentarismo. Recomendo muito!",
    stars: 4
  },
  {
    name: "Patrícia Alves",
    comment: "Treinos rápidos que cabem na minha rotina de mãe e empresária. Resultados visíveis em poucas semanas.",
    stars: 5
  },
  {
    name: "Mariana Torres",
    comment: "Profissional extremamente qualificada. Sabe adaptar o treino para quem tem dores no joelho como eu.",
    stars: 5
  },
  {
    name: "Gabriela F.",
    comment: "Minha autoestima está nas alturas! Obrigada por não desistir de mim quando eu queria parar.",
    stars: 5
  },
  {
    name: "Luiza Barbosa",
    comment: "Melhor investimento que fiz no ano. Saúde e estética andando juntas, sem neura.",
    stars: 5
  },
  {
    name: "Roberta Dias",
    comment: "A didática dos vídeos é perfeita. Nunca mais errei a execução de um agachamento.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-purple overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12 text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
          O que elas <span className="text-brand-teal">dizem</span>
        </h2>
        <p className="text-purple-200">Histórias reais de mulheres transformadas.</p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays to soften edges */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-brand-purple to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-brand-purple to-transparent z-10"></div>

        {/* The scrolling track */}
        <div className="flex animate-marquee gap-6 py-4">
          {/* We map twice to create the seamless loop effect */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl p-6 shadow-xl transform transition-transform hover:scale-105 border-b-4 border-brand-teal"
            >
              <div className="flex text-yellow-400 mb-3 text-sm">
                {[...Array(item.stars)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed text-sm md:text-base">
                "{item.comment}"
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-brand-purple font-bold text-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">Aluna Verificada</p>
                </div>
                <i className="fas fa-quote-right ml-auto text-brand-purple/20 text-2xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;