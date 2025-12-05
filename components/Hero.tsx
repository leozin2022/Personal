import React, { useState, useRef, useEffect } from 'react';

const Hero: React.FC = () => {
  // Estado para armazenar a URL do vídeo. Começa com o vídeo padrão.
  const [videoSrc, setVideoSrc] = useState("https://assets.mixkit.co/videos/preview/mixkit-woman-running-on-treadmill-930-large.mp4");
  
  // Referência para o input de arquivo oculto
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Função auxiliar para abrir o IndexedDB
  const openDB = () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('PowerFitDB', 1);
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('media')) {
          db.createObjectStore('media');
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  };

  useEffect(() => {
    // Carrega o vídeo do IndexedDB ao iniciar
    const loadVideo = async () => {
      try {
        const db = await openDB();
        const tx = db.transaction('media', 'readonly');
        const store = tx.objectStore('media');
        const request = store.get('hero_video');
        
        request.onsuccess = () => {
          const file = request.result;
          if (file instanceof Blob) {
            // Cria uma URL temporária para o Blob armazenado
            const url = URL.createObjectURL(file);
            setVideoSrc(url);
          }
        };
      } catch (err) {
        console.error("Erro ao carregar vídeo do banco de dados:", err);
      }
    };
    loadVideo();
  }, []);

  // Função para lidar com a seleção do arquivo
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Cria URL para preview imediato
      const url = URL.createObjectURL(file);
      setVideoSrc(url);

      // Salva no IndexedDB (suporta arquivos grandes)
      try {
        const db = await openDB();
        const tx = db.transaction('media', 'readwrite');
        const store = tx.objectStore('media');
        store.put(file, 'hero_video');
      } catch (err) {
        console.error("Erro ao salvar vídeo:", err);
        alert("Ocorreu um erro ao tentar salvar o vídeo permanentemente.");
      }
    }
  };

  // Função para simular o clique no input oculto
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-purple/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="text-center md:text-left space-y-6">
          <div className="inline-block bg-purple-100 text-brand-purple px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-2">
            TRANSFORME SEU CORPO E MENTE
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Sua melhor versão <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-teal">
              começa hoje.
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Treinos personalizados, acompanhamento próximo e a motivação que faltava para você conquistar seus objetivos.
          </p>
          <div className="pt-4">
            <a 
              href="https://wa.me/5589999867161" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-brand-purple text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-800 transition-all shadow-xl shadow-purple-300 hover:-translate-y-1"
            >
              Quero agendar uma avaliação
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Right Column: Vertical Video */}
        <div className="relative flex justify-center md:justify-end">
          {/* 
            Container do Vídeo Vertical (Aspect Ratio 9:16)
          */}
          <div className="relative z-10 w-full max-w-[380px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-gray-900 transform transition-transform hover:scale-[1.02] duration-500 group">
             
            {/* Botão de Upload (Aparece ao passar o mouse ou sempre visível em mobile) */}
            <button 
              onClick={handleUploadClick}
              className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-brand-purple text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-lg border border-white/20 group-hover:opacity-100 md:opacity-0 opacity-100"
              title="Trocar Vídeo"
            >
              <i className="fas fa-camera"></i>
            </button>

            {/* Input Oculto */}
            <input 
              type="file" 
              accept="video/*" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
            />

            <video 
              key={videoSrc} // A chave força o reload do componente quando a URL muda
              autoPlay 
              loop 
              muted 
              playsInline 
              poster="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              className="w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
            
            {/* Overlay Gradient (Optional aesthetic, keeping it simple as it fades the bottom slightly) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
          
          {/* Decorative Pattern behind video */}
          <div className="absolute top-10 -right-4 w-full max-w-[380px] aspect-[9/16] border-2 border-brand-teal rounded-3xl -z-0 hidden md:block opacity-60"></div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-brand-purple/20 rounded-full blur-2xl -z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;