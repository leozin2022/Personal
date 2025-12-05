import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Preciso estar matriculada em uma academia?",
    answer: "Não necessariamente! A Consultoria Online pode ser adaptada para treinos em casa com peso do corpo ou acessórios simples, dependendo do seu objetivo."
  },
  {
    question: "O plano alimentar está incluso?",
    answer: "Eu forneço orientações nutricionais focadas em performance, mas para dietas prescritivas específicas, recomendo o acompanhamento com nutricionista (tenho parceiras para indicar!)."
  },
  {
    question: "Qual a forma de pagamento?",
    answer: "Aceitamos cartão de crédito (recorrente ou parcelado), PIX e boleto bancário."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="font-heading text-3xl font-bold text-center text-gray-900 mb-12">
          Dúvidas <span className="text-brand-purple">Frequentes</span>
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-bold text-gray-800 text-lg">{item.question}</span>
                <i className={`fas fa-chevron-down text-brand-teal transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 border-t border-gray-50 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;