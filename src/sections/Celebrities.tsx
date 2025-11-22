// import React from 'react';
export default function Celebrities(){
  const names = ['Don Jazzy','Bad Boy Timz','Korede Bello','Cross Okonkwo','Blaqbonez','Cheque','Nasty Black','Liya'];
  return (
    <section className='max-w-6xl mx-auto px-6 py-16'>
      <h2 className='text-3xl font-bold'>Celebrities</h2>
      <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-6'>
        {names.map(n=>(
          <div key={n} className='p-4 border rounded text-center'>
            <div className='h-20 w-20 bg-gray-200 rounded-full mx-auto'></div>
            <div className='mt-3'>{n}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
