import './App.css';
import Info from './Components/Info';
import About from './Components/About';
import Funfacts from './Components/Funfacts';
import Toggle from './Components/Toggle';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(mode => !mode);
  };

  return (
    <div className='wrapper'>
      <header className='items'/>
      <div className='items'/>
      <div className={`items contents ${darkMode ? "dark" : "light"}`} >
        <Info darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Funfacts darkMode={darkMode} />
      </div>
      <div className='items'><Toggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} /></div>
      <footer className='items'/>
    </div>
  );
}

export default App;
