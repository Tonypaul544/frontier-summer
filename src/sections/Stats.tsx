export default function Stats(){
  const stats = [
    {label:'Event Attendance', value:'1,673'},
    {label:'Event Streaming', value:'292'},
    {label:'Newsletter', value:'2,632'},
    {label:'Community', value:'19,700'}
  ];
  return (
    <section className='bg-gray-100 py-16'>
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-3xl font-bold'>Our Community</h2>
        <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-6'>
          {stats.map(s=>(
            <div key={s.label} className='p-6 bg-white rounded shadow text-center'>
              <div className='text-2xl font-bold'>{s.value}</div>
              <div className='text-sm mt-1'>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
