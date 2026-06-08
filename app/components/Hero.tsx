import React from 'react';
import Image from 'next/image'; 

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen lg:min-h-[90vh] flex items-center bg-brand-offwhite overflow-hidden">
      
      {/* ========================================================= */}
      {/* 1. EL FONDO INMERSIVO                                     */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
        <div className="relative w-full lg:w-[65%] h-full">
          
          <Image 
            src="/hero1.webp" 
            alt="Liviin Method"
            fill
            priority
            quality={100} 
            className="object-cover object-top lg:object-center" 
          />

          {/* ESCRITORIO: Capas de atenuación laterales (Se ocultan en móvil con hidden lg:block) */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-offwhite via-brand-offwhite/10 to-transparent hidden lg:block"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-brand-offwhite to-transparent hidden lg:block"></div>

          {/* MÓVIL: Capa de atenuación exclusiva de abajo hacia arriba (Se oculta en escritorio) */}
          {/* Esto garantiza que el rostro quede libre arriba, y el texto tenga fondo sólido abajo */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-offwhite via-brand-offwhite/90 to-transparent lg:hidden"></div>
          
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. EL CONTENIDO                                           */}
      {/* ========================================================= */}
      {/* CAMBIO CLAVE MÓVIL: pt-[45vh] empuja el texto hacia la mitad inferior de la pantalla */}
      {/* ESCRITORIO: lg:py-32 restaura el centrado vertical normal */}
      <div className="relative z-10 w-full px-6 lg:px-12 pt-[45vh] pb-12 md:pt-[50vh] lg:py-32 max-w-[1400px] mx-auto">
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          
          <div className="flex items-center gap-4 mb-6 relative">
            <span className="w-12 h-[1px] bg-brand-olive"></span>
            <p className="text-brand-olive tracking-[0.2em] text-xs font-semibold uppercase">
              De interiorista a Home Coach
            </p>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-brand-cedar leading-[1.1] mb-8 font-light tracking-tight">
            El Arte de <br />
            <span className="font-serif italic text-brand-olive">Liderar tu Hogar</span>
          </h1>
          
          <p className="text-lg text-brand-taupe mb-10 font-sans max-w-lg leading-relaxed">
            Un método para mujeres que quieren una casa que funcione aunque ellas no estén. Entendí que no me faltaba organización, <strong className="text-brand-cedar font-medium">me faltaba liderazgo.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <button className="w-full sm:w-auto px-10 py-4 bg-brand-cedar text-brand-offwhite font-sans tracking-[0.15em] uppercase text-xs font-medium hover:bg-brand-olive transition-all duration-300 shadow-xl">
              Empezar el Viaje
            </button>
            
            {/* Prueba social optimizada sin fondo borroso para que se integre al nuevo degradado */}
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <div className="flex -space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-oak border-2 border-brand-offwhite"></div>
                <div className="w-9 h-9 rounded-full bg-brand-shadow border-2 border-brand-offwhite"></div>
                <div className="w-9 h-9 rounded-full bg-brand-taupe border-2 border-brand-offwhite"></div>
              </div>
              <p className="text-xs text-brand-taupe max-w-[140px] leading-snug">
                Más de <strong className="text-brand-cedar font-medium">140 asistentes</strong> capacitadas.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}