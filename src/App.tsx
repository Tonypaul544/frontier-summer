// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

export default function App(){
  return (
    <div className='min-h-screen flex flex-col bg-grey-400'>
      <Header />
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
