import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';

const App = () => {
  return (
 
 
    <div style={{ minHeight: '100vh', backgroundColor:'lavenderblush'}}>
      <Header style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px' }}>
        <About style={{ margin: '32px 0', padding: '24px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
      <Skills style={{ margin: '32px 0', padding: '24px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} /> 
        <Projects style={{ margin: '32px 0', padding: '24px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
        <Contact style={{ margin: '32px 0', padding: '24px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
      </main>
      <Footer style={{ backgroundColor: '#2d3748', color: '#ffffff', padding: '16px 0' }} />
    </div>
    
  );
}

export default App;