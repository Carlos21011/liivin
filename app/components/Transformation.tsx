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
        
        {/* ========================================================= */}
        {/* PARTE 1: El cambio de mentalidad que estoy esperando      */}
        {/* ========================================================= */}
        <div className="text-center mb-16 trans-reveal opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out">
          <p className="text-brand-oak tracking-[0.2em] text-xs font-semibold uppercase mb-4">El cambio real</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            El cambio de mentalidad <br className="hidden md:block"/> que estoy <span className="italic text-brand-oak">esperando</span>
          </h2>
          
          <p className="text-brand-offwhite/80 font-sans text-base md:text-lg max-w-2xl mx-auto mb-12">
            No espero que leas esto y ordenes mejor tus cajones. <br className="hidden md:block" />
            <strong className="text-white font-medium">Espero que cambies cómo te ves a ti misma.</strong>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
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

          <p className="text-brand-oak font-serif italic text-xl md:text-2xl trans-reveal opacity-0 translate-y-12 transition-all duration-[800ms] delay-[700ms] ease-out">
            Ese es el cambio real. Y es el que transforma todo.
          </p>
        </div>

        {/* ========================================================= */}
        {/* PARTE 2: Lo que pasa cuando eso cambia                    */}
        {/* ========================================================= */}
        <div className="mt-24 max-w-3xl mx-auto">
          
          <div className="text-center mb-12 trans-reveal opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out">
            <h3 className="text-2xl md:text-3xl font-serif text-brand-oak mb-4">
              Lo que pasa cuando eso cambia
            </h3>
            <p className="text-brand-offwhite/80 font-sans text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Cuando tu mentalidad cambia, todo cambia con ella. Tu casa no se va a ordenar mágicamente. Pero tu energía sí va a cambiar. Y tu equipo va a sentirlo.
            </p>
          </div>
          
          <div className="space-y-12 border-l border-brand-oak/30 ml-4 md:ml-0 md:pl-12 relative">
            
            {/* Paso 1 */}
            <div className="relative pl-8 md:pl-0 trans-reveal opacity-0 translate-y-12 transition-all duration-[800ms] delay-[100ms] ease-out">
              <div className="absolute w-3 h-3 bg-brand-oak rounded-full -left-[6px] md:-left-[54px] top-2 shadow-[0_0_10px_rgba(199,194,172,0.8)]"></div>
              <h4 className="text-brand-oak font-bold tracking-widest text-xs uppercase mb-2">En dos semanas</h4>
              <p className="text-brand-offwhite/80 font-sans text-sm md:text-base leading-relaxed">
                Vas a notar que repites menos. Que tu asistente anticipa más. Que las cosas funcionan distinto porque tú diriges distinto.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="relative pl-8 md:pl-0 trans-reveal opacity-0 translate-y-12 transition-all duration-[800ms] delay-[300ms] ease-out">
              <div className="absolute w-3 h-3 bg-brand-oak rounded-full -left-[6px] md:-left-[54px] top-2 shadow-[0_0_10px_rgba(199,194,172,0.8)]"></div>
              <h4 className="text-brand-oak font-bold tracking-widest text-xs uppercase mb-2">En un mes</h4>
              <p className="text-brand-offwhite/80 font-sans text-sm md:text-base leading-relaxed">
                Vas a reconocer que tu hogar empieza a funcionar aunque tú no estés pendiente. Y eso no es un lujo — es tu derecho como mujer que ya carga demasiado.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="relative pl-8 md:pl-0 trans-reveal opacity-0 translate-y-12 transition-all duration-[800ms] delay-[500ms] ease-out">
              <div className="absolute w-3 h-3 bg-brand-oak rounded-full -left-[6px] md:-left-[54px] top-2 shadow-[0_0_10px_rgba(199,194,172,0.8)]"></div>
              <h4 className="text-brand-oak font-bold tracking-widest text-xs uppercase mb-2">En tres meses</h4>
              <p className="text-brand-offwhite/80 font-sans text-sm md:text-base leading-relaxed">
                Vas a sentir algo que hace años no sentías: que tu hogar es un lugar donde puedes descansar, no un lugar donde tienes que cargar.
              </p>
            </div>
 
          </div>

          {/* Cierre emocional enviado por el cliente */}
          <div className="mt-16 bg-brand-oak/10 border border-brand-oak/20 p-8 rounded-sm trans-reveal opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out">
             <p className="text-brand-offwhite/90 font-sans leading-relaxed text-center">
               Pero lo más importante es esto: vas a sentirte a ti misma distinta. Como la dueña que tu hogar necesita. Como la mujer que crea sistemas, no caos. <strong className="text-brand-oak font-medium">Como la lideresa que siempre fuiste, pero que no sabías cómo ser.</strong>
             </p>
          </div>

        </div>

      </div>
    </section>
  );
}