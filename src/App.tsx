import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from './page/Countries.tsx';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { useState, useEffect } from 'react';
import Country from './page/Country.tsx';
import {FloatButton} from 'antd'
import Footer from './components/Footer.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

function App() {
  const [theme, setTheme] = useState<string | null>(null);
  const [view, setView] = useState<string>('grid');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  return (
    <div className='app'>
      <BrowserRouter>
      <ScrollToTop>
      <FloatButton.BackTop className=' opacity-70 mr-4 mb-4 h-12 w-12' />
      <Navbar theme={theme} setTheme={setTheme} />
      <div className='flex justify-center w-11/12 mx-auto'>
       
        <Routes>
        <Route path='/:id' element={<Country />} />
          <Route path='/' element={<Countries view={view} setView={setView}/>} />
        </Routes>
       
        </div>
        <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    
      </div>
    
  );
}

export default App;