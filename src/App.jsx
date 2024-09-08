import React from 'react';
import Landing from './sections/Landing';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  return (
    <>
      <div className="w-screen overflow-hidden">
        <Header />
        <Landing />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
