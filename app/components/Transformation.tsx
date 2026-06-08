"use client";

import React, { useEffect } from 'react';

export default function Transformation() {
  // =========================================================
  // MOTOR DE ANIMACIÓN LIGERO
  // =========================================================
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('.trans-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="w-full bg-brand-cedar py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-brand-offwhite relative z-10">
        
        {/* Cabecera Cambio de Mentalidad */}
        <div className="text-center mb-16 trans-reveal opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out">
          <p className="text-brand-oak tracking-[0.2em] text-xs font-semibold uppercase mb-4">El cambio real</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-12">
            El cambio de mentalidad <br className="hidden md:block"/> que estoy <span className="italic text-brand-oak">esperando</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Cuadro 1 */}
            <div className="bg-white/5 border-l-2 border-brand-oak p-6 trans-reveal opacity-0 translate-y-12 transition-all duration-[800ms] delay-[100ms] ease-out">
              <p className="text-brand-offwhite/60 italic text-sm mb-2">De una mujer que carga todo en silencio...</p>
              <p className="text-brand-offwhite font-medium">a una mujer que lidera con claridad.</p>
            </div>
            {/* Cuadro 2 */}
            <div className="bg-white/5 border-l-2 border-brand-oak p-6 trans-reveal opacity-0 translate-y-12 transition-all duration-[800ms] delay-[300ms] ease-out">
              <p className="text-brand-offwhite/60 italic text-sm mb-2">De alguien que grita instrucciones...</p>
              <p className="text-brand-offwhite font-medium">a alguien que comunica sistemas.</p>
            </div>
            {/* Cuadro 3 */}
            <div className="bg-white/5 border-l-2 border-brand-oak p-6 trans-reveal opacity-0 translate-y-12 transition-all duration-[800ms] delay-[500ms] ease-out">
              <p className="text-brand-offwhite/60 italic text-sm mb-2">De una dueña pendiente cada minuto...</p>
              <p className="text-brand-offwhite font-medium">a una dueña que confía en lo que construyó.</p>
            </div>
          </div>
        </div>

        {/* Línea de Tiempo */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif text-center mb-12 text-brand-oak trans-reveal opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out">
            Lo que pasa cuando eso cambia
          </h3>
          
          <div className="space-y-12 border-l border-brand-oak/30 ml-4 md:ml-0 md:pl-12 relative">
            
            {/* Paso 1: Dos semanas */}
            <div className="relative pl-8 md:pl-0 trans-reveal opacity-0 translate-y-12 transition-all duration-[800ms] delay-[100ms] ease-out">
              <div className="absolute w-3 h-3 bg-brand-oak rounded-full -left-[6px] md:-left-[54px] top-2 shadow-[0_0_10px_rgba(199,194,172,0.8)]"></div>
              <h4 className="text-brand-oak font-bold tracking-widest text-xs uppercase mb-2">En dos semanas</h4>
              <p className="text-brand-offwhite/80 font-sans text-sm md:text-base leading-relaxed">
                Vas a notar que repites menos. Que tu asistente anticipa más. Que las cosas funcionan distinto porque tú diriges distinto.
              </p>
            </div>

            {/* Paso 2: Un mes */}
            <div className="relative pl-8 md:pl-0 trans-reveal opacity-0 translate-y-12 transition-all duration-[800ms] delay-[300ms] ease-out">
              <div className="absolute w-3 h-3 bg-brand-oak rounded-full -left-[6px] md:-left-[54px] top-2 shadow-[0_0_10px_rgba(199,194,172,0.8)]"></div>
              <h4 className="text-brand-oak font-bold tracking-widest text-xs uppercase mb-2">En un mes</h4>
              <p className="text-brand-offwhite/80 font-sans text-sm md:text-base leading-relaxed">
                Vas a reconocer que tu hogar empieza a funcionar aunque tú no estés pendiente. Y eso no es un lujo — es tu derecho como mujer que ya carga demasiado.
              </p>
            </div>

            {/* Paso 3: Tres meses */}
            <div className="relative pl-8 md:pl-0 trans-reveal opacity-0 translate-y-12 transition-all duration-[800ms] delay-[500ms] ease-out">
              <div className="absolute w-3 h-3 bg-brand-oak rounded-full -left-[6px] md:-left-[54px] top-2 shadow-[0_0_10px_rgba(199,194,172,0.8)]"></div>
              <h4 className="text-brand-oak font-bold tracking-widest text-xs uppercase mb-2">En tres meses</h4>
              <p className="text-brand-offwhite/80 font-sans text-sm md:text-base leading-relaxed">
                Vas a sentir algo que hace años no sentías: que tu hogar es un lugar donde puedes descansar, no un lugar donde tienes que cargar. Vas a sentirte como la lideresa que siempre fuiste.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}