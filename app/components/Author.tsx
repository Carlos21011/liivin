import React from 'react';
import Image from 'next/image';

export default function Author() {
  return (
    <section id="quien-soy" className="relative w-full bg-brand-cedar py-32 px-6 lg:px-12 overflow-hidden">
      
      {/* Resplandor sutil de fondo para dar profundidad 3D */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-brand-olive/10 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-center">
          
          {/* ========================================================= */}
          {/* LADO IZQUIERDO: Fotografía Editorial con Solapamiento       */}
          {/* ========================================================= */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
             {/* Marco exterior desplazado (Estilo Galería de Arte) */}
             <div className="absolute -inset-6 border border-brand-oak/20 hidden md:block"></div>
             
             {/* Contenedor Principal de la Imagen */}
             <div className="relative aspect-[3/4] w-full max-w-[480px] mx-auto overflow-hidden shadow-2xl">
                <Image 
                   src="/author.webp" 
                   alt="María Teresa Espinosa"
                   fill
                   /* Filtro premium: Ligeramente apagada, revela todo el color al hacer hover */
                   className="object-cover object-center grayscale-[30%] hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-in-out"
                />
             </div>

             {/* Tarjeta Flotante Asimétrica (UX de Alta Gama) */}
             <div className="absolute -bottom-10 -right-4 lg:-right-12 bg-brand-offwhite p-6 md:p-8 shadow-2xl hidden md:block max-w-[280px] border-l-4 border-brand-olive">
                <p className="font-serif italic text-brand-cedar text-lg md:text-xl leading-snug">
                  "El problema no era tu casa — era tu mentalidad."
                </p>
             </div>
          </div>

          {/* ========================================================= */}
          {/* LADO DERECHO: Tipografía Gigante y Copywriting              */}
          {/* ========================================================= */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-[1px] bg-brand-oak"></span>
              <p className="text-brand-oak tracking-[0.3em] text-xs font-semibold uppercase">
                La Creadora
              </p>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-offwhite mb-4 leading-none tracking-tight">
              María Teresa <br />
              <span className="italic text-brand-oak font-light">Espinosa</span>
            </h2>
            
            <p className="text-brand-offwhite/50 tracking-[0.2em] text-sm uppercase mb-12 font-sans">
              Interiorista & Home Coach
            </p>

            <div className="space-y-6 text-brand-offwhite/80 font-sans text-base lg:text-lg leading-relaxed font-light max-w-lg">
              <p>
                Llevo más de veinte años diseñando interiores en Latinoamérica. Pero lo más importante de mí no es lo que diseñé.
              </p>
              <p>
                A través de Liviin, acompaño a mujeres como tú a hacer exactamente eso: <strong className="text-brand-offwhite font-normal">transformar tu casa en un hogar bien llevado</strong> — y transformarte tú en la dueña que ese hogar necesita ser.
              </p>
              <p>
                He estado en muchísimas ciudades y participado en infinidad de proyectos. He escuchado a mujeres como tú. He visto sus ojos cambiar cuando entienden la raíz de su cansancio.
              </p>
            </div>

            {/* Sello Final (Firma Monograma) */}
            <div className="mt-12 pt-10 border-t border-brand-oak/20 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <div className="flex-shrink-0">
                <p className="text-6xl font-serif text-brand-oak tracking-tighter">MTE</p>
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