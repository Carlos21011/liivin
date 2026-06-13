import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story'; /* <--- Importamos la historia */
import PainPoints from './components/PainPoints';
import Method from './components/Method';
import Products from './components/Products';
import Transformation from './components/Transformation';
import Objections from './components/Objections';
import Author from './components/Author';
import Footer from './components/Footer';
import SalesNotification from './components/SalesNotification';
import ScrollToTop from './components/ScrollToTop';
import ExitIntent from './components/ExitIntent';
import SocialProof from './components/SocialProof';
export default function Home() {
  return (
    <main className="min-h-screen bg-brand-offwhite overflow-hidden selection:bg-brand-olive selection:text-brand-offwhite">
      <Navbar />
      <Hero />
      <Story />     
  
      <Method />
      <Products />
      <Transformation />
      <Objections />
      <Author />
      <Footer />
     
      <SocialProof />
      <ScrollToTop />
      <ExitIntent />
    </main>
  );
}