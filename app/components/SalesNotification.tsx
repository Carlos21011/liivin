"use client";

import React, { useState, useEffect } from 'react';

const locations = ['Bogotá', 'Miami', 'Medellín', 'Cartagena', 'Barranquilla', 'Santa Marta', 'Ciudad de México'];

export default function SalesNotification() {
  const [notification, setNotification] = useState<{ name: string; location: string } | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Simulamos notificaciones cada 12 segundos
    const interval = setInterval(() => {
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      setNotification({ name: 'Una nueva lideresa', location: randomLocation });
      setShow(true);

      // Ocultar después de 5 segundos
      setTimeout(() => setShow(false), 5000);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  if (!notification) return null;

  return (
    <div 
      className={`fixed bottom-6 left-6 z-[100] transition-all duration-700 ease-out flex items-center gap-4 bg-brand-cedar border border-brand-oak/30 p-4 shadow-2xl max-w-xs ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-brand-olive/20 flex items-center justify-center text-brand-offwhite text-xs font-serif italic">
        LV
      </div> 
      <div>
        <p className="text-brand-offwhite text-xs font-medium tracking-wide">
          {notification.name}
        </p>
        <p className="text-brand-oak text-[10px] uppercase tracking-widest">
          acaba de iniciar su viaje en {notification.location}
        </p>
      </div>
    </div>
  );
}