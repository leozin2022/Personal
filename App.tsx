import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <FAQ />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default App;