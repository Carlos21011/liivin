"use client";

import React, { useEffect } from 'react';

export default function PainPoints() {
  // Motor de Animación Premium Ligero (Stagger Effect)
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

    const elements = document.querySelectorAll('.stagger-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="w-full bg-brand-cedar py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Elemento gráfico de fondo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-olive/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Cabecera (Animación Base) */}
        <div className="text-center mb-16 stagger-reveal opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out">
          <p className="text-brand-oak tracking-[0.2em] text-xs font-semibold uppercase mb-4">
            ¿Para quién es este método?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-offwhite mb-6">
            Una estructura para mujeres que <br className="hidden md:block"/>
            <span className="italic text-brand-oak">sostienen demasiado</span>
          </h2>
          <p className="text-brand-offwhite/70 font-sans max-w-2xl mx-auto">
            Si te identificas con una o más de estas situaciones, el problema no es tu capacidad de organización. Es la falta de un sistema.
          </p>
        </div>

        {/* Grid de Dolores (Aparición en Cascada mediante "delay") */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Tarjeta 1 - Retraso 100ms */}
          <div className="bg-white/5 border border-brand-oak/20 p-8 rounded-sm hover:bg-white/10 hover:border-brand-oak/40 transition-all duration-300 group stagger-reveal opacity-0 translate-y-12 delay-[100ms]">
            <h3 className="text-brand-oak font-serif text-2xl mb-4 group-hover:text-brand-offwhite transition-colors">
              Cargas todo en silencio...
            </h3>
            <p className="text-brand-offwhite/70 font-sans leading-relaxed text-sm">
              Incluso teniendo ayuda en casa, sientes la presión de que todo depende de ti. Asumes tareas que ya habías delegado porque es "más rápido hacerlo tú misma".
            </p>
          </div>

          {/* Tarjeta 2 - Retraso 200ms */}
          <div className="bg-white/5 border border-brand-oak/20 p-8 rounded-sm hover:bg-white/10 hover:border-brand-oak/40 transition-all duration-300 group stagger-reveal opacity-0 translate-y-12 delay-[200ms]">
            <h3 className="text-brand-oak font-serif text-2xl mb-4 group-hover:text-brand-offwhite transition-colors">
              Repites las mismas instrucciones...
            </h3>
            <p className="text-brand-offwhite/70 font-sans leading-relaxed text-sm">
              Das directrices claras, pero a la semana siguiente parece que nadie las recuerda. Hay un ruido silencioso de instrucciones sueltas que no se sostienen en el tiempo.
            </p>
          </div>

          {/* Tarjeta 3 - Retraso 300ms */}
          <div className="bg-white/5 border border-brand-oak/20 p-8 rounded-sm hover:bg-white/10 hover:border-brand-oak/40 transition-all duration-300 group stagger-reveal opacity-0 translate-y-12 delay-[300ms]">
            <h3 className="text-brand-oak font-serif text-2xl mb-4 group-hover:text-brand-offwhite transition-colors">
              Tu hogar funciona solo si tú estás...
            </h3>
            <p className="text-brand-offwhite/70 font-sans leading-relaxed text-sm">
              Sientes que cuando sales por la puerta, el sistema colapsa. El hogar depende de tu microgestión en lugar de un equipo que se anticipe.
            </p>
          </div>

          {/* Tarjeta 4 - Retraso 400ms */}
          <div className="bg-white/5 border border-brand-oak/20 p-8 rounded-sm hover:bg-white/10 hover:border-brand-oak/40 transition-all duration-300 group stagger-reveal opacity-0 translate-y-12 delay-[400ms]">
            <h3 className="text-brand-oak font-serif text-2xl mb-4 group-hover:text-brand-offwhite transition-colors">
              Buscas paz, pero encuentras carga...
            </h3>
            <p className="text-brand-offwhite/70 font-sans leading-relaxed text-sm">
              Tu hogar debería ser un refugio donde descansar, pero a menudo se siente como una segunda oficina llena de tareas pendientes y caos organizativo.
            </p>
          </div>

        </div>

        {/* Micro-Copy de cierre (Retraso 500ms) */}
        <div className="mt-16 text-center stagger-reveal opacity-0 translate-y-12 transition-all duration-[1000ms] delay-[500ms] ease-out">
          <p className="text-brand-offwhite font-sans text-lg mb-8">
            ¿Identificas estos patrones? <strong className="text-brand-oak font-medium">Este método es para ti.</strong>
          </p>
          <button className="px-10 py-4 bg-brand-oak text-brand-cedar font-sans tracking-[0.15em] uppercase text-xs font-bold hover:bg-brand-offwhite transition-all duration-300 shadow-[0_0_20px_rgba(199,194,172,0.15)] hover:scale-105">
            Quiero Liderar mi Hogar
          </button>
        </div>

      </div>
    </section>
  );
}