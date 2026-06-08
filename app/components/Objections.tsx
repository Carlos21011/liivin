"use client";

import React, { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    question: '"No tengo tiempo para leer otro libro."',
    answer: 'Es justo por eso que lo escribí. El método está diseñado para que lo implementes mientras lo lees — no después. Una hora esta semana te devuelve varias horas cada mes. Y muchas lo leen el sábado por la tarde con un café — no como tarea, sino como pausa que se merecen.'
  },
  {
    question: '"Ya intenté organizarme y no funciona."',
    answer: 'Lo que viste en otros libros era organización. Esto es liderazgo. Organizar es ordenar cajones. Liderar es crear un sistema que funcione aunque no estés mirando. No es lo mismo.'
  },
  {
    question: '"Mi asistente no parece interesada en mejorar."',
    answer: 'Casi siempre, eso cambia cuando cambias tú. La mayoría de asistentes responden con compromiso real cuando reciben claridad, respeto y método. No es magia. Es liderazgo.'
  },
  {
    question: '"¿USD 12? ¿Qué tan completo puede ser?"',
    answer: 'Lo entiendo. El precio es bajo a propósito — para que nadie se quede afuera por dinero. Lo que tienes adentro es el método que he aplicado durante veinte años en mi propia casa y en decenas de hogares. Lo que decidas hacer con él es lo que va a marcar la diferencia.'
  }
];

export default function Objections() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // =========================================================
  // MOTOR DE ANIMACIÓN NATIVO EN REACT (Soluciona el bug)
  // =========================================================
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Desconecta para que la animación solo ocurra una vez
      }
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="w-full bg-brand-offwhite py-24 px-6 lg:px-12 relative border-t border-brand-oak/20 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        
        {/* Cabecera */}
        <div 
          className={`text-center mb-16 transition-all duration-[1000ms] ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-brand-olive tracking-[0.2em] text-xs font-semibold uppercase mb-4">
            Derribando Barreras
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-cedar mb-6">
            Para quien aún <span className="italic text-brand-olive">duda</span>
          </h2>
        </div>

        {/* Contenedor del Acordeón Animado */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border transition-all duration-[800ms] ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${
                openIndex === index 
                  ? 'border-brand-olive bg-brand-olive/5 shadow-sm' 
                  : 'border-brand-oak/40 bg-transparent hover:border-brand-cedar/40'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 lg:p-8 text-left focus:outline-none"
              >
                <span className={`font-serif text-lg md:text-xl pr-8 transition-colors ${
                  openIndex === index ? 'text-brand-cedar font-medium' : 'text-brand-taupe'
                }`}>
                  {faq.question}
                </span>
                
                {/* Icono asimétrico estilo UX Premium */}
                <span className="relative w-4 h-4 flex-shrink-0 flex items-center justify-center">
                  <span className={`absolute w-full h-[2px] bg-brand-cedar transition-transform duration-500 ${openIndex === index ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}></span>
                  <span className={`absolute w-full h-[2px] bg-brand-cedar transition-transform duration-500 ${openIndex === index ? 'rotate-0 bg-brand-olive' : 'rotate-90'}`}></span>
                </span>
              </button>
              
              {/* Contenido Desplegable */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 text-brand-cedar/80 font-sans leading-relaxed text-sm md:text-base">
                  <p className="border-t border-brand-oak/20 pt-6 mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cierre */}
        <div 
          className={`mt-20 text-center transition-all duration-[1000ms] ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
        >
          <p className="text-brand-cedar font-serif italic text-xl md:text-2xl mb-8 relative inline-block">
            <span className="absolute -top-4 -left-6 text-4xl text-brand-oak/30">"</span>
            El cambio real es pasar de alguien que grita instrucciones, a alguien que comunica sistemas.
            <span className="absolute -bottom-4 -right-6 text-4xl text-brand-oak/30">"</span>
          </p>
        </div>

      </div>
    </section>
  );
}