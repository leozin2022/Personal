import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h2 className="font-heading font-extrabold text-3xl mb-2">
              POWER<span className="text-brand-teal">FIT</span>.
            </h2>
            <p className="text-gray-400 max-w-xs">
              Sua jornada de força e autoconhecimento começa aqui.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-purple transition-colors text-white text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors text-white text-xl">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:email@exemplo.com" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition-colors text-white text-xl">
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PowerFit. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Feito para inspirar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;