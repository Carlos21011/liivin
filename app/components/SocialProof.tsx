"use client";

import React, { useState, useEffect } from 'react';

// Lista de clientas reales/avatares
const buyers = [
  "Camila de Bogotá", "Sofía de Medellín", "Valentina de Cali", "Mariana de Cartagena", 
  "Lucía de Barranquilla", "Elena de Miami", "Isabel de Santa Marta", "Valeria de Pereira", 
  "Daniela de Manizales", "Natalia de Bucaramanga", "Andrea de Bogotá", "Clara de Medellín", 
  "Ximena de Cali", "Paola de Bogotá", "Mónica de Medellín", "Beatriz de Cartagena", 
  "Lorena de Miami", "Claudia de Santa Marta", "Patricia de Bogotá", "Carolina de Medellín"
];

// Productos (Anclaje: Hacemos que el Pack Completo aparezca muchas más veces para sugestionar al usuario)
const products = [
  "El Pack Liviin Completo", "El Pack Liviin Completo", "El Pack Liviin Completo", 
  "El Pack Liviin Completo", "Manual de Capacitación", "Ebook: El Despertar", "El Pack Liviin Completo"
];

export default function SocialProof() {
  const [notification, setNotification] = useState<{name: string, product: string, time: number} | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomName = buyers[Math.floor(Math.random() * buyers.length)];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      const randomMinutes = Math.floor(Math.random() * 12) + 1; // Entre hace 1 y 12 minutos
      
      setNotification({ name: randomName, product: randomProduct, time: randomMinutes });
      setVisible(true);

      // Desaparece elegantemente después de 6 segundos
      setTimeout(() => {
        setVisible(false);
      }, 6000);
    };

    // Aparece la primera vez a los 8 segundos
    const initialDelay = setTimeout(showNotification, 8000);
    // Luego se repite aleatoriamente cada 25 segundos
    const interval = setInterval(showNotification, 25000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  if (!notification) return null;

  return (
    <div 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 z-[100] w-[calc(100%-3rem)] md:w-auto md:max-w-sm transition-all duration-1000 ease-out ${
        visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-95 opacity-0 pointer-events-none'
      }`}
    >
      {/* Tarjeta Glassmorphism Premium */}
      <div className="flex items-center gap-4 bg-brand-cedar/95 backdrop-blur-xl p-4 lg:p-5 rounded-2xl border border-brand-oak/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
        
        {/* Avatar/Monograma con efecto de "En Vivo" */}
        <div className="relative flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-brand-oak/40 bg-brand-offwhite/5 flex items-center justify-center overflow-hidden">
          {/* Anillo pulsante que indica actividad "Live" */}
          <span className="absolute inset-0 rounded-full bg-brand-olive/30 animate-ping" style={{ animationDuration: '3s' }}></span>
          <span className="relative text-brand-oak font-serif italic text-xl lg:text-2xl font-medium">L</span>
        </div>

        {/* Contenido de la Notificación */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[9px] lg:text-[10px] tracking-widest uppercase text-brand-oak/80 font-bold">
              Nueva Dueña de Hogar
            </p>
            <span className="text-[10px] text-brand-offwhite/50 font-sans">
              hace {notification.time} min
            </span>
          </div>
          <p className="text-brand-offwhite font-sans text-xs md:text-sm leading-tight">
            <strong className="font-medium text-white">{notification.name}</strong> adquirió <br />
            <span className="font-serif italic text-brand-oak text-sm md:text-base leading-relaxed">
              {notification.product}
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}