import React from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main className='container'>
        
        <About></About>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
