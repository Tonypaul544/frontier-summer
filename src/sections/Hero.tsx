// import React from 'react';
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section className=' from-indigo-600 to-purple-600 text-white py-24'>
      <div className='max-w-6xl mx-auto px-6'>
        <motion.h1 initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }} className='text-4xl md:text-6xl font-extrabold leading-tight'>
          NFT NG — DeFi Summer
        </motion.h1>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.2 }} className='mt-4 text-lg md:text-xl max-w-2xl'>
          Empowering builders, creatives, and thought leaders across Africa. Bringing NFTs & blockchain to the mainstream.
        </motion.p>
        <div className='mt-8'>
          <a href='#packages' className='inline-block bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold'>Sponsorship Packages</a>
        </div>
      </div>
    </section>
  );
}
