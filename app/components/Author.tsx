"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Author() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-16');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('.author-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // =========================================================
  // 2. EFECTO PARALLAX SUTIL EN LA FOTO DE LA AUTORA
  // =========================================================
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY;
        // Mueve ligeramente la imagen hacia abajo creando un efecto 3D
        imageRef.current.style.transform = `translateY(${scrolled * 0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="quien-soy" className="relative w-full bg-brand-cedar py-32 px-6 lg:px-12 overflow-hidden">
      
      {/* Resplandor sutil de fondo para dar profundidad 3D */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-brand-olive/10 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-center">
        
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 author-reveal opacity-0 translate-y-16 transition-all duration-[1200ms] ease-out">
            
             <div className="absolute -inset-6 border border-brand-oak/20 hidden md:block transition-all duration-1000 delay-500 hover:border-brand-oak/60"></div>
             
             <div className="relative aspect-[3/4] w-full max-w-[480px] mx-auto overflow-hidden shadow-2xl">
                <Image 
                   src="/author.webp" 
                   alt="María Teresa Espinosa"
                   fill
                   className="object-cover object-center grayscale-[30%] hover:grayscale-0 hover:scale-[1.03] transition-all duration-1000 ease-in-out"
                />
             </div>

             {/* Tarjeta Flotante Asimétrica */}
             <div className="absolute -bottom-10 -right-4 lg:-right-12 bg-brand-offwhite p-6 md:p-8 shadow-2xl hidden md:block max-w-[280px] border-l-4 border-brand-olive author-reveal opacity-0 translate-y-16 transition-all duration-[1000ms] delay-[600ms] ease-out">
                <p className="font-serif italic text-brand-cedar text-lg md:text-xl leading-snug">
                  "El problema no era tu casa — era tu mentalidad."
                </p>
             </div>
          </div>

          {/* ========================================================= */}
          {/* LADO DERECHO: Copywriting EXACTO DEL CLIENTE              */}
          {/* ========================================================= */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <div className="flex items-center gap-4 mb-8 author-reveal opacity-0 translate-y-16 transition-all duration-[1000ms] delay-[200ms] ease-out">
              <span className="w-16 h-[1px] bg-brand-oak"></span>
              <p className="text-brand-oak tracking-[0.3em] text-xs font-semibold uppercase">
                Quién soy yo
              </p>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-offwhite mb-4 leading-none tracking-tight author-reveal opacity-0 translate-y-16 transition-all duration-[1000ms] delay-[300ms] ease-out">
              María Teresa <br />
              <span className="italic text-brand-oak font-light">Espinosa</span>
            </h2>
            
            <p className="text-brand-offwhite/50 tracking-[0.2em] text-sm uppercase mb-12 font-sans author-reveal opacity-0 translate-y-16 transition-all duration-[1000ms] delay-[400ms] ease-out">
              Interiorista y Home Coach
            </p>

            <div className="space-y-6 text-brand-offwhite/80 font-sans text-base lg:text-lg leading-relaxed font-light max-w-lg author-reveal opacity-0 translate-y-16 transition-all duration-[1000ms] delay-[500ms] ease-out">
              <p>
                Me llamo María Teresa Espinosa. Llevo más de veinte años diseñando interiores en Latinoamérica.
              </p>
              <p>
                Y ahora, desde Liviin, acompaño a mujeres como tú a hacer exactamente eso: <strong className="text-brand-offwhite font-normal border-b border-brand-oak/50 pb-0.5">transformar su casa en un hogar bien llevado</strong> — y ellas transformarse en la dueña que ese hogar necesita sean.
              </p>
              <p>
                He estado en muchísimas ciudades y participado en infinidad de proyectos. He escuchado a mujeres como tú. He visto sus ojos cambiar cuando entienden que el problema no era su casa — era su mentalidad.
              </p>
            </div>

            {/* Sello Final (Firma Monograma y Quote del cliente) */}
            <div className="mt-12 pt-10 border-t border-brand-oak/20 flex flex-col sm:flex-row items-start sm:items-center gap-8 author-reveal opacity-0 translate-y-16 transition-all duration-[1000ms] delay-[700ms] ease-out">
              <div className="flex-shrink-0">
                <p className="text-6xl font-serif text-brand-oak tracking-tighter hover:text-brand-offwhite transition-colors duration-500 cursor-default">MTE</p>
              </div>
              <p className="text-brand-offwhite/60 italic text-sm md:text-base font-serif leading-relaxed">
                "¡Que tu hogar siempre se sienta como refugio, nunca como una carga!"
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}