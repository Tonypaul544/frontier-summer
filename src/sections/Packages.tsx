// import SponsorForm from './SponsorForm';
const tiers = [
  { name: 'Platinum', price: '$3,500', perks: ['30x30 booth', '3 passes', 'Full page ad', '10 min speak'] },
  { name: 'Gold', price: '$2,500', perks: ['15x15 booth','3 passes','Half page ad','10 min speak'] },
  { name: 'Silver', price: '$1,800', perks: ['15x15 booth','2 passes'] },
  { name: 'Bronze', price: '$1,200', perks: ['1 pass'] }
];

export default function Packages(){
  return (
    <section id='packages' className='max-w-6xl mx-auto px-6 py-16'>
      <h2 className='text-3xl font-bold'>Sponsorship Packages</h2>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-4 gap-6'>
        {tiers.map(t=>(
          <div key={t.name} className='border rounded-lg p-6 shadow-sm'>
            <h3 className='font-semibold text-xl'>{t.name}</h3>
            <p className='text-2xl mt-2'>{t.price}</p>
            <ul className='mt-4 space-y-1 text-sm'>
              {t.perks.map(p=> <li key={p}>• {p}</li>)}
            </ul>
            <button onClick={()=>document.getElementById(
              'sponsor-form-scroll')?.scrollIntoView({behavior:'smooth'}
              )}
            className='mt-6 w-full bg-indigo-600 text-white py-2 rounded'>Sponsor</button>
          </div>
        ))}
      </div>

      <div id='sponsor-form-scroll' className='mt-12'>
        <h3 className='text-xl font-semibold'>Interested in sponsoring?</h3>
        <p className='text-sm mt-2'>Fill the form below and we'll get back to you.</p>
        <div className='mt-6'>
          {/* <SponsorForm /> */}
        </div>
      </div>
    </section>
  );
}
