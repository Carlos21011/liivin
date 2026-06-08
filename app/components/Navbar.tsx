"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. Detectar Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. UX Premium: Bloquear el scroll del fondo cuando el menú esté abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Productos', href: '#productos' },
    { name: 'El Método', href: '#metodo' },
    { name: 'Quién soy', href: '#quien-soy' },
  ];

  return (
    <>
      {/* ========================================== */}
      {/* BARRA SUPERIOR (NAV) - Z-Index 60            */}
      {/* ========================================== */}
      <nav
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-brand-offwhite/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.08)] py-3'
            : 'bg-transparent py-8 md:py-10'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* LOGO DINÁMICO */}
          <a href="#" className="relative flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <div className={`relative transition-all duration-500 ${
              isScrolled || isMobileMenuOpen 
                ? 'w-[180px] h-[45px] md:w-[160px] md:h-[40px]' 
                : 'w-[280px] h-[75px] md:w-[340px] md:h-[90px]'
            }`}>
              <Image
                src="/LOGOn.png"
                alt="Liviin Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* NAVEGACIÓN DE ESCRITORIO */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex gap-10 text-xs tracking-[0.2em] uppercase transition-all duration-500">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative group transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-brand-cedar font-medium hover:text-brand-olive' 
                      : 'text-brand-cedar font-bold hover:text-brand-olive' 
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'w-0 bg-brand-olive' : 'w-0 bg-brand-cedar'
                  }`}></span>
                </a>
              ))}
            </div>
            
            <a
              href="#productos"
              className={`px-8 py-4 text-xs tracking-[0.15em] uppercase font-bold transition-all duration-500 shadow-lg hover:-translate-y-1 ${
                isScrolled
                  ? 'bg-brand-cedar text-brand-offwhite hover:bg-brand-olive'
                  : 'bg-brand-cedar text-brand-offwhite border border-brand-cedar/20 hover:bg-brand-olive hover:border-transparent'
              }`}
            >
              Adquirir Método
            </a>
          </div>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <button
            className="md:hidden relative p-2 focus:outline-none text-brand-cedar transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-8 flex flex-col gap-[6px] items-end">
              <span className={`h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-[8px]' : 'w-8'}`}></span>
              <span className={`h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
              <span className={`h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-[8px]' : 'w-4'}`}></span>
            </div>
          </button>

        </div>
      </nav>

      {/* ========================================== */}
      {/* MENÚ MÓVIL DESPLEGABLE - Z-Index 50          */}
      {/* ========================================== */}
      {/* Se coloca AFUERA del <nav> para que no sea cortado por el efecto de cristal */}
      <div
        className={`fixed inset-0 z-50 bg-brand-cedar flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Agregamos pt-20 para que los enlaces no queden escondidos debajo de la barra blanca superior */}
        <div className="flex flex-col items-center gap-10 text-brand-offwhite w-full px-6 pt-20">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-4xl font-serif tracking-wide hover:text-brand-oak transition-colors transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#productos"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mt-12 w-full text-center px-10 py-5 bg-brand-oak text-brand-cedar text-sm tracking-[0.2em] uppercase font-bold hover:bg-white transition-all duration-300 transform ${
               isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Adquirir Método
          </a>
        </div>
      </div>
    </>
  );
}