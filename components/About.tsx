import React, { useState, useRef, useEffect } from 'react';

const About: React.FC = () => {
  const [aboutImage, setAboutImage] = useState("https://picsum.photos/id/64/600/600");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Carregar imagem salva do localStorage ao iniciar
    const savedImage = localStorage.getItem('powerfit_about_image');
    if (savedImage) {
      setAboutImage(savedImage);
    }
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        try {
          localStorage.setItem('powerfit_about_image', base64String);
          setAboutImage(base64String);
        } catch (error) {
          alert("A imagem é muito grande para ser salva permanentemente.");
          setAboutImage(base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
             {/* 
                IMAGEM SOBRE MIM:
                Com funcionalidade de upload.
             */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/*" 
                className="hidden" 
              />
              
              <img 
                src={aboutImage}
                alt="Foto de Perfil da Personal" 
                className="w-full h-full object-cover rounded-full border-4 border-brand-purple shadow-xl"
              />
              
              <button 
                onClick={handleUploadClick}
                className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              >
                <i className="fas fa-camera text-white text-3xl"></i>
              </button>

              <div className="absolute top-0 right-0 bg-brand-teal text-white p-3 rounded-full shadow-lg pointer-events-none">
                <i className="fas fa-heart text-xl"></i>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Muito prazer, sou a <span className="text-brand-purple">sua Personal</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Com mais de 8 anos de experiência em fisiologia do exercício e nutrição esportiva, minha missão vai além de prescrever séries: eu ajudo mulheres a resgatarem sua autoestima e força.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Acredito em um treino que respeita sua individualidade, seu ciclo e sua rotina. Não se trata apenas de estética, mas de construir um corpo funcional e uma mente resiliente. Vamos juntas nessa jornada?
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 text-gray-700 font-semibold bg-gray-50 px-4 py-2 rounded-lg">
                <i className="fas fa-graduation-cap text-brand-purple"></i>
                <span>Bacharel em Ed. Física</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-semibold bg-gray-50 px-4 py-2 rounded-lg">
                <i className="fas fa-certificate text-brand-teal"></i>
                <span>Esp. em Fisiologia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;