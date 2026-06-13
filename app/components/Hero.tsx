import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen lg:min-h-[90vh] flex items-center bg-brand-offwhite overflow-hidden">
      <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
        <div className="relative w-full lg:w-[65%] h-full">

          <Image 
            src="/hero1.webp" 
            alt="Liviin Method"
            fill
            priority={true} 
            fetchPriority="high" 
            quality={100} 
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-[center_30%]" 
          />

          {/* ESCRITORIO: Agregamos tonos 'taupe/café' al degradado para romper el verde */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-offwhite via-brand-taupe/10 to-transparent hidden lg:block"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-brand-offwhite to-transparent hidden lg:block"></div>

          {/* MÓVIL: Degradado cálido de abajo hacia arriba */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-offwhite via-brand-offwhite/90 to-transparent lg:hidden"></div>

        </div>
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 pt-[45vh] pb-12 md:pt-[50vh] lg:pt-64 lg:pb-32 max-w-[1400px] mx-auto">
        <div className="w-full lg:w-[55%] flex flex-col justify-center">

          <div className="flex items-center gap-4 mb-6 relative">
            <span className="w-12 h-[1px] bg-brand-cedar"></span>
            <p className="text-brand-cedar tracking-[0.2em] text-xs font-bold uppercase">
              De interiorista a home coach!
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl text-brand-cedar leading-[1.1] mb-8 font-light tracking-tight animate-none opacity-100">
            El Arte de <br />
            <span className="font-serif italic text-brand-olive">Liderar tu Hogar</span>
          </h1>

          <p className="text-lg text-brand-cedar/80 mb-10 font-sans max-w-lg leading-relaxed animate-none opacity-100">
            Después de 20 años diseñando casas, hoy te enseño a liderar la tuya. <strong className="text-brand-cedar font-bold">Bienvenida a Liviin.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <button className="w-full sm:w-auto px-10 py-4 bg-brand-cedar text-brand-offwhite font-sans tracking-[0.15em] uppercase text-xs font-bold hover:bg-brand-oak hover:text-brand-cedar transition-all duration-300 shadow-xl">
              Empezar el Viaje
            </button>

            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <div className="flex -space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-oak border-2 border-brand-offwhite"></div>
                <div className="w-9 h-9 rounded-full bg-brand-shadow border-2 border-brand-offwhite"></div>
                <div className="w-9 h-9 rounded-full bg-brand-taupe border-2 border-brand-offwhite"></div>
              </div>
              <p className="text-xs text-brand-cedar/80 max-w-[140px] leading-snug">
                Más de <strong className="text-brand-cedar font-bold">140 asistentes</strong> capacitadas.
              </p>
            </div>
          </div>

        </div> 
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <p className="text-[9px] text-brand-cedar tracking-[0.2em] uppercase font-bold">
          Desliza
        </p>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-brand-cedar">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}