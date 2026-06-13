"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'; // Importamos Image de Next.js

export default function Products() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.product-reveal');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const newActiveSlide = Math.round(scrollPosition / cardWidth);
      setActiveSlide(newActiveSlide);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    let isUserInteracting = false;
    let autoplayTimer: NodeJS.Timeout;

    const startAutoplay = () => {
      autoplayTimer = setInterval(() => {
        if (!isUserInteracting && container) {
          const cardWidth = container.offsetWidth;
          const isAtEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10;
          
          container.scrollTo({
            left: isAtEnd ? 0 : container.scrollLeft + cardWidth,
            behavior: 'smooth'
          });
        }
      }, 5000);
    };

    const pauseAutoplay = () => { isUserInteracting = true; };
    const resumeAutoplay = () => { 
      isUserInteracting = false; 
      clearInterval(autoplayTimer);
      startAutoplay();
    };

    container.addEventListener('touchstart', pauseAutoplay);
    container.addEventListener('touchend', resumeAutoplay);

    startAutoplay();

    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('touchstart', pauseAutoplay);
      container.removeEventListener('touchend', resumeAutoplay);
      clearInterval(autoplayTimer);
    };
  }, []);

  return (
    <section id="productos" className="w-full bg-brand-offwhite py-24 px-6 lg:px-12 relative border-t border-brand-oak/20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Cabecera */}
        <div className="text-center mb-16 product-reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <p className="text-brand-olive tracking-[0.2em] text-xs font-semibold uppercase mb-4">
            Elige tu camino
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-cedar mb-6">
            Qué encontrarás <span className="italic text-brand-olive">aquí</span>
          </h2>
          <p className="text-brand-taupe font-sans text-sm md:text-base max-w-2xl mx-auto">
            Tres libros. Un método. Un solo viaje hacia la dueña que tu hogar necesita ser.
          </p>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 lg:pb-0 lg:grid lg:grid-cols-3 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          
          {/* PRODUCTO 1: El Despertar */}
          <div className="min-w-[90%] sm:min-w-[70%] lg:min-w-0 snap-center bg-white border border-brand-oak/30 flex flex-col justify-between hover:shadow-xl transition-all duration-700 group relative product-reveal opacity-0 translate-y-12 delay-[100ms] ease-out overflow-hidden rounded-sm">
            
            <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-brand-oak/20">
              <Image 
                src="/book1.webp" 
                alt="Libro Liviin"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8 lg:p-10 border-b border-brand-oak/20 bg-brand-offwhite/30 flex flex-col items-center text-center">
              <p className="text-brand-olive tracking-[0.2em] text-[10px] font-bold uppercase mb-4">Ebook 01 + Bonus Empatía + Home Excel</p>
              <h3 className="text-2xl font-serif text-brand-cedar mb-2">El Despertar</h3>
              <p className="text-brand-taupe font-sans text-xs mb-6 h-12">El arte de LIDERAR tu hogar</p>
              <div className="text-4xl font-serif text-brand-cedar">USD 12</div>
            </div>
            
            <div className="p-8 lg:p-10 flex flex-col flex-grow">
              <p className="text-brand-cedar font-sans text-xs leading-relaxed italic mb-4">
                Un método para mujeres que quieren una casa que funcione aunque ellas no estén.
              </p>
              <p className="text-brand-cedar font-bold text-xs tracking-widest uppercase mb-4">Qué Incluye:</p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-xs text-brand-taupe leading-relaxed"><span className="text-brand-olive">✓</span> La Filosofía del hogar bien llevado.</li>
                <li className="flex items-start gap-3 text-xs text-brand-taupe leading-relaxed"><span className="text-brand-olive">✓</span> Las herramientas para conocer tu casa antes de delegarla.</li>
                <li className="flex items-start gap-3 text-xs text-brand-taupe leading-relaxed"><span className="text-brand-olive">✓</span> Cómo construir el equipo desde la entrevista hasta los acuerdos firmados.</li>
                <li className="flex items-start gap-3 text-xs text-brand-taupe leading-relaxed"><span className="text-brand-olive">✓</span> Cómo sostener la armonía en el tiempo.</li>
                <li className="flex items-start gap-3 text-xs text-brand-taupe leading-relaxed"><span className="text-brand-olive">✓</span> Mi historia — donde nació este método.</li>
                <li className="flex items-start gap-3 text-[11px] text-brand-taupe leading-relaxed"><span className="text-brand-olive">✓</span> Cinco scripts listos para las conversaciones que más cuestan: la entrevista de tu asistente, la primera semana, el feedback que reconoce, el feedback que corrige, y el momento de verdad cuando algo se rompe.</li>
              </ul>
              
              <div className="bg-brand-cedar/5 p-4 rounded-sm border border-brand-oak/20 mb-8">
                <p className="text-brand-cedar font-bold text-[10px] tracking-widest uppercase mb-2">Bonus Incluidos:</p>
                <p className="text-xs text-brand-taupe mb-2"><strong className="font-medium text-brand-cedar">✓ Empatía en casa:</strong> Un ensayo editorial corto sobre lo que sienten las asistentes del hogar al llegar a un lugar nuevo.</p>
                <p className="text-xs text-brand-taupe"><strong className="font-medium text-brand-cedar">✓ Home Excel descargable:</strong> La plantilla exacta que uso con mis clientas, lista para que la adaptes esta misma semana.</p>
                <p className="text-[10px] text-brand-taupe/70 text-center uppercase tracking-widest mt-4">Acceso inmediato · Descarga permanente</p>
              </div>

              <button className="w-full py-4 border border-brand-cedar text-brand-cedar font-sans tracking-widest uppercase text-xs font-bold hover:bg-brand-cedar hover:text-brand-offwhite transition-colors">
                Comprar Ebook 01
              </button>
            </div>
          </div>

          {/* PRODUCTO 2: El Llamado a la Acción */}
          <div className="min-w-[90%] sm:min-w-[70%] lg:min-w-0 snap-center bg-white border border-brand-oak/30 flex flex-col justify-between hover:shadow-xl transition-all duration-700 group relative product-reveal opacity-0 translate-y-12 delay-[300ms] ease-out overflow-hidden rounded-sm">
            
            <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-brand-oak/20">
              <Image 
                src="/book2.webp" 
                alt="Libro El Llamado - El arte de TRANSFORMAR tu hogar"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8 lg:p-10 border-b border-brand-oak/20 bg-brand-offwhite/30 flex flex-col items-center text-center">
              <p className="text-brand-olive tracking-[0.2em] text-[10px] font-bold uppercase mb-4">Ebook 02 + 8 Semanas de Menús + Lista</p>
              <h3 className="text-2xl font-serif text-brand-cedar mb-2">El Llamado a la Accion</h3>
              <p className="text-brand-taupe font-sans text-xs mb-6 h-12">El arte de TRANSFORMAR tu hogar</p>
              <div className="text-4xl font-serif text-brand-cedar">USD 12</div>
            </div>
            
            <div className="p-8 lg:p-10 flex flex-col flex-grow">
              <p className="text-brand-taupe font-sans text-xs leading-relaxed mb-8 flex-grow">
                Si el primero fue el libro del despertar, este es el libro del hacer. La depuración consciente, la organización con propósito. Una guia real para tomar acción sin presión pero con constancia.
              </p>
              
              <div className="bg-brand-cedar/5 p-4 rounded-sm border border-brand-oak/20 mb-8">
                <p className="text-brand-cedar font-bold text-[10px] tracking-widest uppercase mb-2">Bonus Incluidos:</p>
                <p className="text-xs text-brand-taupe mb-2"><strong className="font-medium text-brand-cedar">✓ 8 semanas de menús:</strong> Un sistema de menús que libera mente.</p>
                <p className="text-xs text-brand-taupe"><strong className="font-medium text-brand-cedar">✓ Lista de mercado:</strong> Inteligente descargable, y los rituales que sostienen el método.</p>
              </div>

              <button className="w-full py-4 border border-brand-cedar text-brand-cedar font-sans tracking-widest uppercase text-xs font-bold hover:bg-brand-cedar hover:text-brand-offwhite transition-colors mt-auto">
                Comprar Ebook 02
              </button>
            </div>
          </div>

          {/* PRODUCTO 3: La Capacitación */}
          <div className="min-w-[90%] sm:min-w-[70%] lg:min-w-0 snap-center bg-white border border-brand-oak/30 flex flex-col justify-between hover:shadow-xl transition-all duration-500 group relative product-reveal opacity-0 translate-y-12 delay-[500ms] ease-out overflow-hidden rounded-sm">
            
            {/* NUEVA FOTO: Contenedor con aspecto editorial 4:3 y zoom on hover */}
            <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-brand-oak/20">
              <Image 
                src="/book3.webp" 
                alt="Manual de Capacitación Liviin Premium"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8 lg:p-10 border-b border-brand-oak/20 bg-brand-offwhite/30 flex flex-col items-center text-center">
              <p className="text-brand-olive tracking-[0.2em] text-[10px] font-bold uppercase mb-4">3 Modulos con 12 temas fundamentales</p>
              <h3 className="text-2xl font-serif text-brand-cedar mb-2">La Capacitación</h3>
              <p className="text-brand-taupe font-sans text-xs mb-6 h-12">El arte de CUIDAR tu hogar</p>
              <div className="text-4xl font-serif text-brand-cedar">USD 30</div>
            </div>
            
            <div className="p-8 lg:p-10 flex flex-col flex-grow">
              <p className="text-brand-taupe font-sans text-xs leading-relaxed mb-6">
                El producto premium del universo Liviin. El método, ahora a cuatro manos. Tres módulos de capacitación diseñados de forma sencilla, pensados para que entregues el método a quién te ayuda a sostener tu hogar.
              </p>
              <p className="text-brand-cedar font-bold text-xs tracking-widest uppercase mb-4">Qué Incluye:</p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li>
                  <p className="text-xs font-bold text-brand-cedar leading-none mb-1"><span className="text-brand-olive mr-1">Módulo 1.</span> Cuidado general del hogar</p>
                  <p className="text-[11px] text-brand-taupe leading-relaxed">(manejo general, limpieza y productos, tendido de camas)</p>
                </li>
                <li>
                  <p className="text-xs font-bold text-brand-cedar leading-none mb-1"><span className="text-brand-olive mr-1">Módulo 2.</span> Detalles que Transforman</p>
                  <p className="text-[11px] text-brand-taupe leading-relaxed">(lavado y cuidado de ropa, limpieza de platería, cuidado de plantas y flores, etiqueta y protocolo en la mesa)</p>
                </li>
                <li>
                  <p className="text-xs font-bold text-brand-cedar leading-none mb-1"><span className="text-brand-olive mr-1">Módulo 3.</span> Organización Profesional</p>
                  <p className="text-[11px] text-brand-taupe leading-relaxed">(organización de closets, organización de nevera y despensa, organización de lencería)</p>
                </li>
              </ul>
              
              <div className="bg-transparent p-4 h-[10px] mb-8">
                 {/* Espaciador invisible para alinear los botones */}
              </div>

              <button className="w-full py-4 border border-brand-cedar text-brand-cedar font-sans tracking-widest uppercase text-xs font-bold hover:bg-brand-cedar hover:text-brand-offwhite transition-colors mt-auto">
                Comprar Manual
              </button>
            </div>
          </div>

        </div>

        {/* Indicador Dinámico de Swipe para Móvil */} 
        <div className="flex justify-center gap-2 mt-4 mb-12 lg:hidden product-reveal opacity-0 transition-opacity duration-1000 delay-[700ms]">
          {[0, 1, 2].map((dot) => (
            <span 
              key={dot} 
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                activeSlide === dot ? 'bg-brand-olive' : 'bg-brand-oak/30'
              }`}
            ></span>
          ))}
        </div>

        {/* ========================================================= */}
        {/* EL ANCLA: PACK COMPLETO (Oferta Irresistible)             */}
        {/* ========================================================= */}
        <div className="mt-8 relative flex flex-col lg:flex-row items-center justify-between bg-brand-cedar border-2 border-brand-oak p-10 lg:p-16 shadow-2xl product-reveal opacity-0 translate-y-12 transition-all duration-1000 delay-[700ms] ease-out">
          
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 bg-brand-oak text-brand-cedar px-6 py-1 font-sans text-xs tracking-widest uppercase font-bold whitespace-nowrap">
            Para Quien Quiere Todo
          </div>
          
          <div className="w-full lg:w-7/12 text-center lg:text-left mb-10 lg:mb-0 mt-4 lg:mt-0">
            <h3 className="text-4xl md:text-5xl font-serif text-brand-offwhite mb-4">
              El Pack Liviin <span className="italic text-brand-oak">Completo</span>
            </h3>
            <p className="text-brand-offwhite/80 font-sans text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Los tres libros. El método entero. Un solo viaje. Acceso permanente a todo lo que se publique, en el orden que tú quieras recorrerlo. <strong className="text-brand-oak font-normal">Para quien ya sabe que esto no es un ebook que se lee y se olvida. Es una transformación.</strong>
            </p>
          </div>
          
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-end">
            <div className="flex flex-col items-center lg:items-end mb-6">
              <div className="text-sm text-brand-oak line-through mb-1">En lugar de USD 54</div>
              <div className="text-6xl md:text-7xl font-serif text-brand-offwhite leading-none">USD 40</div>
            </div>

            <button className="w-full sm:w-auto px-10 py-5 bg-brand-oak text-brand-cedar font-sans tracking-widest uppercase text-sm font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(199,194,172,0.15)] text-center">
              Garantizar el Pack
            </button>
            <p className="text-brand-offwhite/50 text-[10px] tracking-widest uppercase mt-4">Acceso inmediato · Descarga permanente</p>
          </div>

        </div>

      </div>
    </section>
  );
}