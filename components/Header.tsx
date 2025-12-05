import React, { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Carregar logo salvo do localStorage ao iniciar
    const savedLogo = localStorage.getItem('powerfit_logo');
    if (savedLogo) {
      setLogoSrc(savedLogo);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        try {
          // Tenta salvar no localStorage
          localStorage.setItem('powerfit_logo', base64String);
          setLogoSrc(base64String);
        } catch (error) {
          alert("A imagem é muito grande para ser salva no navegador, mas será exibida nesta sessão.");
          setLogoSrc(base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Previne comportamento do link se houver
    fileInputRef.current?.click();
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Ajuste para compensar o header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Programas', href: '#programas' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  const whatsappLink = "https://wa.me/5589999867161";

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark shadow-md py-2' : 'bg-brand-dark/95 backdrop-blur-md shadow-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          
          {/* Input Oculto para Upload */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
          />

          {/* Botão Circular de Upload */}
          <button 
            onClick={handleUploadClick}
            className="w-10 h-10 md:w-12 md:h-12 -ml-2 rounded-full bg-gray-800 border-2 border-dashed border-brand-teal/50 hover:border-brand-teal hover:bg-gray-700 flex items-center justify-center overflow-hidden transition-all shadow-sm shrink-0 cursor-pointer group"
            title="Adicionar Logo/Foto"
          >
            {logoSrc ? (
              <img src={logoSrc} alt="Logo Personalizado" className="w-full h-full object-cover" />
            ) : (
              <i className="fas fa-camera text-brand-teal text-sm md:text-base opacity-70 group-hover:opacity-100 transition-opacity"></i>
            )}
          </button>

          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="font-heading font-extrabold text-2xl md:text-3xl text-white tracking-tight whitespace-nowrap">
              POWER<span className="text-brand-teal">FIT</span>.
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-gray-300 hover:text-brand-teal font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-purple text-white px-5 py-2 rounded-full font-bold hover:bg-purple-600 transition-transform transform hover:scale-105 shadow-lg shadow-purple-900/50 whitespace-nowrap text-sm lg:text-base cursor-pointer"
          >
            Comece Agora
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl text-brand-teal hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark shadow-xl border-t border-gray-700">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-gray-200 hover:text-brand-teal font-semibold p-2 border-b border-gray-700 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-purple text-white text-center py-3 rounded-lg font-bold mt-2 cursor-pointer hover:bg-purple-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Comece Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;