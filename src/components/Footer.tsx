// import React from 'react';
export default function Footer(){
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-6xl mx-auto px-6 py-8'>
        <div className='flex flex-col md:flex-row justify-between gap-6'>
          <div>
            <h4 className='font-bold'>NFTNG</h4>
            <p className='text-sm'>Bringing NFTs & blockchain to the mainstream.</p>
          </div>
          <div className='text-sm'>© {new Date().getFullYear()} NFTNG. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
