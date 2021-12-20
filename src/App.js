import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />
      case 'Contact':
        return <Contact />
      case 'Resume':
        return <Resume />
      case 'About':
      default:
        return <About />
    }
  }

  return (
    <div>
      <header>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      </header>
      <main className='container'>
        <div>
          {renderPage()}
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
