export default function Team(){
  const members = ['Momoh Kingsley','Juliet Godwin','Someh Crypto','Olalere Joshua'];
  return (
    <section className='max-w-6xl mx-auto px-6 py-16'>
      <h2 className='text-3xl font-bold'>Our Team</h2>
      <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-6'>
        {members.map(m=>(
          <div key={m} className='p-4 border rounded text-center'>
            <div className='h-24 w-24 bg-gray-200 rounded-full mx-auto'></div>
            <div className='mt-4 font-semibold'>{m}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
