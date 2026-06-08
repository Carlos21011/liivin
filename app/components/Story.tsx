"use client"; 

import React, { useState, useEffect } from 'react';

export default function Story() {
  const [isExpanded, setIsExpanded] = useState(false);

  // =========================================================
  // MOTOR DE ANIMACIÓN PREMIUM (Intersection Observer)
  // =========================================================
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Cuando el elemento entra en pantalla, quitamos la invisibilidad y el desplazamiento
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target); // Asegura que la animación solo ocurra una vez
        }
      });
    }, { threshold: 0.15 }); // Se activa cuando el 15% del elemento es visible

    // Buscamos todos los elementos con la clase secreta 'reveal-on-scroll'
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="w-full bg-brand-offwhite py-24 md:py-32 relative overflow-hidden border-t border-brand-oak/20">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          
          {/* ========================================================= */}
          {/* COLUMNA IZQUIERDA (Animada con un ligero retraso)         */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 relative">
            {/* Clases de animación añadidas aquí */}
            <div className="lg:sticky lg:top-32 lg:pr-12 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1200ms] ease-out">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-brand-olive"></span>
                <p className="text-brand-olive tracking-[0.2em] text-xs font-semibold uppercase">
                  Una conversación entre tú y yo
                </p>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-cedar leading-[1.1] tracking-tight mb-8">
                El diseño no <br />
                podía arreglar <br />
                <span className="italic text-brand-olive">lo que pasaba por dentro.</span>
              </h2>

              <div className="hidden lg:block mt-16 p-8 border-l-2 border-brand-oak bg-white/40 backdrop-blur-sm shadow-sm">
                <p className="font-serif italic text-brand-taupe text-xl">
                  "Entendí que no me faltaba organización. Me faltaba liderazgo."
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMNA DERECHA (Animada con retraso de 300ms)              */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 lg:pl-16 lg:border-l lg:border-brand-oak/30 font-sans text-brand-taupe md:text-lg font-light leading-relaxed">
            
            <div className={`relative transition-all duration-700 ease-in-out lg:!max-h-none lg:overflow-visible ${
              isExpanded ? 'max-h-[2500px]' : 'max-h-[380px] overflow-hidden'
            }`}>
              
              {/* Clases de animación añadidas aquí, nota el delay-300 */}
              <div className="space-y-12 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1200ms] delay-300 ease-out">
                <div className="space-y-6">
                  <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-brand-cedar first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] text-brand-cedar/90">
                    Pasé 20 años diseñando casas. Elegía cada material, cada color, cada textura. Entraba a los hogares y los transformaba. Y unos meses después, volvía y descubría que nada se mantenía.
                  </p>
                  <p>No por descuido — era algo más profundo. Algo que no podía arreglarse con diseño.</p>
                  <p>Hasta que la pandemia llegó a mi propia casa. Me encontré cargando todo en silencio. Dando instrucciones que nadie parecía entender. Haciendo trabajo que ya había delegado. Y aunque mi equipo cumplía, sentía que mi hogar solo funcionaba cuando yo estaba presente.</p>
                  
                  <div className="p-6 bg-brand-cedar/5 border border-brand-oak/20 mt-8 rounded-sm">
                    <p className="text-brand-cedar font-medium">
                      Ese fue el momento. Entendí que no me faltaba organización. Me faltaba liderazgo. Y nadie me había enseñado cómo liderar un hogar.
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-brand-oak/10">
                  <h3 className="text-2xl font-serif text-brand-cedar mb-6 uppercase tracking-widest text-sm">Por qué escribí esto</h3>
                  <p className="mb-6">
                    Porque descubrí algo durante esos años de quiebre personal: <strong className="text-brand-cedar font-normal border-b border-brand-olive/50 pb-1">el liderazgo del hogar es una habilidad, no un don.</strong> Y como toda habilidad, se puede enseñar.
                  </p>
                  <p>
                    Lo que está en estas páginas no es mi secreto guardado. Es lo que aprendí a hacer en mi propia casa, lo que he acompañado en decenas de hogares de mujeres como tú, y lo que ahora te entrego a ti.
                  </p>
                </div>
              </div>

              {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-brand-offwhite via-brand-offwhite/90 to-transparent lg:hidden pointer-events-none"></div>
              )}
            </div>

            <div className="mt-2 flex justify-center lg:hidden relative z-10">
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-brand-cedar font-sans tracking-[0.2em] uppercase text-[10px] font-bold border border-brand-oak px-6 py-3 rounded-full bg-brand-offwhite hover:bg-brand-oak transition-colors"
              >
                {isExpanded ? 'Ocultar historia' : 'Leer historia completa'}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* BLOQUE OSCURO DE PRUEBA SOCIAL (Animado individualmente)    */}
      {/* ========================================================= */}
      {/* Clases de animación añadidas aquí */}
      <div className="max-w-6xl mx-auto mt-24 lg:mt-32 px-6 lg:px-12 relative z-10 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1200ms] delay-200 ease-out">
        <div className="bg-brand-cedar border-2 border-brand-oak text-brand-offwhite p-10 lg:p-20 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-olive/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 lg:gap-24">
            <div className="md:w-1/3">
              <p className="text-brand-oak tracking-[0.2em] text-xs font-semibold uppercase mb-4">La Comunidad</p>
              <h3 className="text-4xl lg:text-5xl font-serif text-brand-offwhite leading-tight">
                Lo que ya <br/><span className="italic text-brand-oak">está pasando</span>
              </h3>
            </div>
            
            <div className="md:w-2/3 space-y-6 font-sans text-brand-offwhite/80 font-light text-lg leading-relaxed">
              <p>
                Más de <strong className="text-white font-medium">140 asistentes de hogar</strong> han sido capacitadas con este método. Y no desde una pantalla. Desde encuentros presenciales, mano a mano, donde aprendieron a cuidar con sistema, no con instrucciones sueltas.
              </p>
              <p>
                He realizado encuentros de dueñas de hogar en <strong className="text-white font-medium">Santa Marta, Cartagena, Barranquilla y Miami</strong>. Mujeres que llegaban cansadas, sintiendo que cargaban solas. Y que se iban con otra mentalidad.
              </p>
              <p className="italic text-brand-oak font-serif text-xl pt-4">
                "Porque el cambio no empieza en los cajones ordenados o las listas de tareas. Empieza en cómo te ves a ti misma como lideresa de tu propio hogar."
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}