"use client"; // Necesario para la animación de scroll

import React, { useEffect } from 'react';

export default function Method() {
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

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const pilares = [
    { title: 'Introspección', desc: 'Entender qué está pasando realmente en tu hogar — y nombrarlo.' },
    { title: 'Verdad', desc: 'Dejar de creer que "si no estoy pendiente, nadie lo hace bien". Descubrir que lo que te falta es un sistema, no una empleada mejor.' },
    { title: 'Acción', desc: 'Empezar desde hoy. No esperar el momento perfecto. Una habitación. Una conversación. Un ritual.' },
    { title: 'Sistema', desc: 'Crear la estructura que sostiene el hogar aunque tú no estés mirando.' },
    { title: 'Amor', desc: 'Porque al final, lo que cuidamos en casa es lo que somos por dentro.' },
  ];

  return (
    <section id="metodo" className="w-full bg-brand-offwhite py-24 px-6 lg:px-12 relative overflow-hidden border-t border-brand-oak/20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Cabecera de la Sección (Aparece primero) */}
        <div className="text-center mb-20 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out">
          <p className="text-brand-olive tracking-[0.2em] text-xs font-semibold uppercase mb-4">
            La Estructura de Liviin
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-cedar mb-6">
            El método que te <span className="italic text-brand-olive">comparto</span>
          </h2>
          <p className="text-brand-taupe font-sans text-sm md:text-base max-w-xl mx-auto">
            Mi método no es una lista de tareas sueltas; es un sistema que se sostiene en cinco pilares fundamentales:
          </p>
        </div>

        {/* ========================================================= */}
        {/* CONTENEDOR HÍBRIDO (Swipe en Móvil / Grid en Desktop)    */}
        {/* ========================================================= */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:pb-0 md:grid md:grid-cols-5 md:gap-6 lg:gap-10 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          
          {pilares.map((pilar, idx) => (
            <div 
              key={idx} 
              /* La clase reveal-on-scroll activa el observer. 
                 El style aplica un retraso matemático (delay): 200ms, 400ms, 600ms... */
              className="min-w-[85%] sm:min-w-[60%] md:min-w-0 snap-center bg-white md:bg-transparent border border-brand-oak/30 md:border-0 md:border-t md:border-brand-cedar/30 p-8 md:p-0 pt-10 relative flex flex-col justify-between group reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1000ms] ease-out hover:bg-white/40 md:hover:bg-transparent"
              style={{ transitionDelay: `${idx * 150 + 200}ms` }}
            >
              <div>
                <div className="text-4xl lg:text-5xl font-sans font-bold text-brand-olive/30 mb-6 tracking-tighter group-hover:text-brand-olive transition-colors">
                  0{idx + 1}
                </div>
                
                <h3 className="text-xl font-serif text-brand-cedar mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {pilar.title}
                </h3>
                
                <p className="text-brand-taupe font-sans text-sm leading-relaxed font-light">
                  {pilar.desc}
                </p>
              </div>

              {/* Indicador visual de progreso sutil solo visible en móvil */}
              <div className="w-full h-[2px] bg-brand-oak/20 absolute bottom-0 left-0 md:hidden">
                <div className="h-full bg-brand-olive w-1/3 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          ))}

        </div>

        {/* Micro-UX indicador para Móvil (Oculto en Desktop) animado al final */}
        <div className="flex justify-center gap-2 mt-4 md:hidden reveal-on-scroll opacity-0 translate-y-6 transition-all duration-[1000ms] delay-[1000ms] ease-out">
          {pilares.map((_, idx) => (
            <span key={idx} className="w-1.5 h-1.5 rounded-full bg-brand-oak/50 last:bg-brand-olive/30"></span>
          ))}
        </div>

      </div>
    </section>
  );
}