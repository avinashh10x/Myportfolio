// App.jsx
import React from 'react';
import Landing from './sections/Landing';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import Cursor from './component/Cursor'; // Ensure the path is correct
import Projects from './sections/Projects';

function App() {
  return (
    <>
      {/* Render the custom cursor globally */}
      
      <Cursor />

      {/* Main website content */}
      <div className="w-screen overflow-hidden">
        <Header />
        <Landing />
        <Projects/>
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
