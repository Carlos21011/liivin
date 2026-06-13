import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contacto" className="w-full bg-brand-cedar pt-32 pb-10 px-6 lg:px-12 relative overflow-hidden">
      
      {/* Resplandor decorativo de fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-oak/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-24 relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-brand-oak/50"></div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-offwhite/90 italic tracking-tight mb-6">
            "Que tu hogar nunca más <br className="hidden md:block" />
            <span className="text-brand-oak font-light">te quede grande."</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 border-t border-brand-oak/20 pt-16 mb-16">

          {/* Columna Izquierda: Logo y Firma */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative w-[180px] h-[50px] mb-8">
              <Image
                src="/logo.webp"
                alt="Liviin Logo"
                fill
                className="object-contain object-center md:object-left brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="text-brand-offwhite/90 font-sans space-y-2">
              <p className="text-sm italic">Con amor,</p>
              <p className="text-2xl tracking-[0.3em] font-serif text-brand-oak mb-1">M T E</p>
              <p className="text-sm font-light">María Teresa Espinosa</p>
            </div>
          </div>

          {/* Columna Central: Navegación Rápida */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-brand-offwhite font-bold tracking-[0.2em] uppercase text-xs mb-6">Explorar Liviin</h4>
            <ul className="space-y-4 text-brand-offwhite/90 font-sans text-sm font-light">
              <li><a href="#productos" className="hover:text-brand-oak transition-colors">Los Libros y Manuales</a></li>
              <li><a href="#metodo" className="hover:text-brand-oak transition-colors">El Método de 5 Pilares</a></li>
              <li><a href="#quien-soy" className="hover:text-brand-oak transition-colors">Conoce a la Creadora</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-brand-offwhite font-bold tracking-[0.2em] uppercase text-xs mb-6">Comunidad</h4>
            <ul className="space-y-4 text-brand-offwhite/90 font-sans text-sm font-light">
              <li>
                <a href="#" className="hover:text-brand-oak transition-colors flex items-center justify-center md:justify-start gap-3 group">
                  <span className="w-4 h-[1px] bg-brand-oak/50 group-hover:w-6 transition-all duration-300"></span>
                  Instagram · @mte_disenointerior
                </a>
              </li>
              <li> 
                <a href="#" className="hover:text-brand-oak transition-colors flex items-center justify-center md:justify-start gap-3 group">
                  <span className="w-4 h-[1px] bg-brand-oak/50 group-hover:w-6 transition-all duration-300"></span>
                  TikTok · @mariateresaespinosa_
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center text-[10px] md:text-xs font-sans text-brand-offwhite/80 pt-8 border-t border-brand-oak/10 tracking-wider">
          <p className="mt-4 md:mt-0">© 2024 Liviin. Todos los derechos reservados.</p>
          <div className="flex gap-6 uppercase">
            <a href="#" className="hover:text-brand-offwhite transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-brand-offwhite transition-colors">Política de Privacidad</a>
          </div>
        </div>

      </div>
    </footer>
  );
}