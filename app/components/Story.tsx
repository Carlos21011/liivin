"use client"; 

import React, { useState, useEffect } from 'react';

export default function Story() {
  const [isExpanded, setIsExpanded] = useState(false);

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

  return (
    <section className="w-full bg-brand-offwhite py-24 md:py-32 relative overflow-hidden border-t border-brand-oak/20">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-oak/10 blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-olive/5 blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 lg:pr-12 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1200ms] ease-out">
              
              {/* NUEVO: Marca de agua gigante para llenar el espacio vacío con lujo */}
              <div className="absolute -top-16 -left-8 text-[250px] font-serif text-brand-oak/10 leading-none pointer-events-none select-none hidden lg:block">
                "
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-[1px] bg-brand-oak"></span>
                  <p className="text-brand-oak tracking-[0.2em] text-xs font-semibold uppercase">
                    Una conversación entre tú y yo.
                  </p>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-cedar leading-[1.1] tracking-tight mb-8">
                  El diseño no <br />
                  podía arreglar <br />
                  <span className="italic text-brand-olive">lo que pasaba por dentro.</span>
                </h2>

                <div className="hidden lg:block mt-16 p-8 border-l-2 border-brand-oak bg-brand-oak/5 backdrop-blur-sm shadow-sm relative">
                  <p className="font-serif italic text-brand-taupe text-xl">
                    "Entendí que ya no era falta de organización. Me faltaba liderazgo."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-16 lg:border-l lg:border-brand-oak/30 font-sans text-brand-taupe md:text-lg font-light leading-relaxed">
            
            <div className={`relative transition-all duration-700 ease-in-out lg:!max-h-none lg:overflow-visible ${
              isExpanded ? 'max-h-[3000px]' : 'max-h-[380px] overflow-hidden'
            }`}>
              
              <div className="space-y-12 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1200ms] delay-300 ease-out">
                
                {/* PARTE 1 */}
                <div className="space-y-6">
                  <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-brand-oak first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] text-brand-cedar/90">
                    Pasé 20 años diseñando casas. Elegía cada mueble, cada material, cada color, cada textura. Entraba a los hogares y los transformaba.
                  </p>
                  <p>Y unos meses después, volvía y descubría que nada se sostenía.</p>
                  <p>No era descuido. Era algo más profundo. Algo que el diseño no podía arreglar.</p>
                  <p>Hasta que ese mismo sentimiento llegó a mi propia casa.</p>
                  <p>Había un ruido silencioso que yo me negaba a escuchar. Rincones que me negaba a ver. Empecé a sentir que cargaba todo en silencio.</p>
                  <p>Daba instrucciones que nadie parecía entender. Hacía trabajo que ya había delegado. Y aunque mi equipo cumplía con lo basico, mi hogar solo funcionaba cuando yo estaba presente.</p>
                  
                  <div className="p-6 bg-brand-oak/10 border border-brand-oak/20 mt-8 rounded-sm">
                    <p className="text-brand-cedar font-medium mb-4">Ese fue el momento.</p>
                    <p className="text-brand-cedar/80 mb-4">Después de una transformación personal profunda y cambios de fondo en la forma de habitar mi casa, todo mejoró.</p>
                    <p className="text-brand-cedar font-medium">Entendí que ya no era falta de organización. Me faltaba liderazgo. Y eso, nadie me lo había enseñado.</p>
                  </div>
                </div>

                {/* PARTE 2: Lo que voy a decirte ahora */}
                <div className="pt-8 border-t border-brand-oak/10">
                  <h3 className="text-2xl font-serif text-brand-cedar mb-6 uppercase tracking-widest text-sm">Lo que voy a decirte ahora</h3>
                  <div className="space-y-4">
                    <p>Si tu casa solo funciona cuando tú estás ahí, si repites las mismas instrucciones cada semana, si sientes que cargas todo en silencio aunque tengas ayuda — esto es para ti.</p>
                    <p>Puede que SI sea un problema de organización, pero sobre todo es un problema de sistema y liderazgo</p>
                    <p>Y ambas se pueden aprender.</p>
                  </div>
                </div>

                {/* PARTE 3: Por qué escribí esto */}
                <div className="pt-8 border-t border-brand-oak/10">
                  <h3 className="text-2xl font-serif text-brand-cedar mb-6 uppercase tracking-widest text-sm">Por qué escribí esto</h3>
                  <div className="space-y-4">
                    <p>Porque descubrí algo durante esos años de quiebre personal: el liderazgo del hogar es una habilidad, no un don.</p>
                    <p>Y como toda habilidad, se puede enseñar.</p>
                    <p>Lo que está en estas páginas no es mi secreto guardado. Es lo que aprendí a hacer en mi propia casa, y lo que he implementado en decenas de hogares de mujeres como tú.</p>
                    <p className="font-serif italic text-xl text-brand-oak mt-6">Tres libros. Un método. Un solo viaje hacia la dueña que TU HOGAR necesita que seas.</p>
                  </div>
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
      {/* BLOQUE OSCURO DE PRUEBA SOCIAL (Texto exacto del cliente)   */}
      {/* ========================================================= */}
      <div className="max-w-6xl mx-auto mt-24 lg:mt-32 px-6 lg:px-12 relative z-10 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-[1200ms] delay-200 ease-out">
        <div className="bg-brand-cedar border-2 border-brand-oak text-brand-offwhite p-10 lg:p-20 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-oak/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 lg:gap-24">
            <div className="md:w-1/3">
              <p className="text-brand-oak tracking-[0.2em] text-xs font-semibold uppercase mb-4">La Comunidad</p>
              <h3 className="text-4xl lg:text-5xl font-serif text-brand-offwhite leading-tight">
                Lo que ya <br/><span className="italic text-brand-oak">está pasando</span>
              </h3>
            </div>
            
            <div className="md:w-2/3 space-y-6 font-sans text-brand-offwhite/80 font-light text-lg leading-relaxed">
              <p>
                Más de <strong className="text-white font-medium">140 asistentes de hogar</strong> han sido capacitadas con este método. En encuentros presenciales, donde aprendieron a cuidar con sistema, no con instrucciones sueltas.
              </p>
              <p>
                En <strong className="text-white font-medium">Santa Marta, Cartagena, Barranquilla y Miami</strong>, he realizado conversatorios con dueñas de hogar. Mujeres que llegaban cansadas, sintiendo que cargaban solas con todo, y salían luego de nuestras charlas, con otra mentalidad.
              </p>
              <p className="italic text-brand-oak font-serif text-xl pt-4">
                "Porque el cambio no empieza en los cajones ordenados o las listas de tareas. Empieza en cómo te ves a ti misma liderando tu hogar."
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}