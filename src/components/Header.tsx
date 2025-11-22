import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(){
  return (
    <header className='bg-white shadow-sm sticky top-0 z-30'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link to='/' className='font-bold text-xl'>NFTNG</Link>
        <nav className='space-x-4 hidden md:flex'>
          <a href='#mission' className='hover:underline'>Mission</a>
          <a href='#structure' className='hover:underline'>Event</a>
          <a href='#packages' className='hover:underline'>Packages</a>
          <Link to='/contact' className='hover:underline'>Contact</Link>
        </nav>
        <div className='md:hidden'>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu(){
  const [open,setOpen]=React.useState(false);
  return (
    <div>
      <button onClick={()=>setOpen(!open)} className='p-2 bg-gray-100 rounded'>
        Menu
      </button>
      {open && (
        <div className='absolute right-4 mt-2 bg-white shadow-lg rounded p-4'>
          <a href='#mission' className='block py-1'>Mission</a>
          <a href='#structure' className='block py-1'>Event</a>
          <a href='#packages' className='block py-1'>Packages</a>
          <a href='/contact' className='block py-1'>Contact</a>
        </div>
      )}
    </div>
  );
}
