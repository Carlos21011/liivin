"use client";

import React, { useState, useEffect } from 'react';

export default function ExitIntent() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Si el mouse sale por la parte de arriba de la pantalla (hacia cerrar pestaña o buscar url)
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true); // Se marca como activado para no molestar dos veces
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-brand-cedar/80 backdrop-blur-md transition-opacity duration-500">
      
      {/* Contenedor del Pop-up con animación de entrada */}
      <div className="bg-brand-offwhite max-w-lg w-full p-8 md:p-12 relative shadow-2xl border-2 border-brand-oak/20 animate-in fade-in zoom-in duration-500">
        
        {/* Botón de cerrar */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-6 text-brand-taupe hover:text-brand-cedar text-3xl font-light transition-colors"
        >
          &times; 
        </button>

        <p className="text-brand-olive tracking-[0.2em] text-[10px] font-bold uppercase mb-4 text-center">
          Un momento...
        </p>
        <h3 className="text-3xl md:text-4xl font-serif text-brand-cedar mb-4 text-center leading-tight">
          ¿Vas a dejar que tu hogar siga <span className="italic text-brand-olive">funcionando al azar</span>?
        </h3>
        <p className="text-brand-taupe font-sans text-sm text-center mb-8 leading-relaxed">
          La diferencia entre una casa que agota y un hogar que se sostiene solo, es un sistema. El <strong className="text-brand-cedar">Pack Liviin Completo</strong> tiene todo lo que necesitas para empezar a liderar desde hoy.
        </p>

        <div className="flex flex-col gap-4">
          <a 
            href="#productos" 
            onClick={() => setIsVisible(false)} 
            className="w-full py-4 bg-brand-oak text-brand-cedar font-sans tracking-widest uppercase text-xs font-bold text-center hover:bg-brand-cedar hover:text-brand-offwhite transition-all duration-300 shadow-lg"
          >
            Ver el Pack Completo
          </a>
          <button 
            onClick={() => setIsVisible(false)} 
            className="text-[10px] text-brand-taupe/70 uppercase tracking-widest hover:text-brand-cedar transition-colors mt-2"
          >
            No, prefiero seguir con el caos
          </button>
        </div>

      </div>
    </div>
  );
}