// import React, { useState } from 'react';
// import { saveSponsor } from '../firebase';

// export default function SponsorForm(){
//   const [form, setForm] = useState({name:'',company:'',email:'',package:'Platinum',message:''});
//   const [status, setStatus] = useState(null);

//   function update(e){
//     setForm(f=>({...f,[e.target.name]:e.target.value}));
//   }

//   async function submit(e){
//     e.preventDefault();
//     setStatus('sending');
//     try {
//       await saveSponsor(form);
//       setStatus('success');
//       setForm({name:'',company:'',email:'',package:'Platinum',message:''});
//     } catch(err){
//       console.error(err);
//       setStatus('error');
//     }
//   }

//   return (
//     <form onSubmit={submit} className='grid gap-3'>
//       <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
//         <input name='name' required value={form.name} onChange={update} placeholder='Full name' className='border p-2 rounded' />
//         <input name='company' value={form.company} onChange={update} placeholder='Company' className='border p-2 rounded' />
//       </div>
//       <input name='email' type='email' required value={form.email} onChange={update} placeholder='Email' className='border p-2 rounded' />
//       <select name='package' value={form.package} onChange={update} className='border p-2 rounded'>
//         <option>Platinum</option><option>Gold</option><option>Silver</option><option>Bronze</option>
//       </select>
//       <textarea name='message' value={form.message} onChange={update} placeholder='Message' className='border p-2 rounded' />
//       <div>
//         <button type='submit' className='bg-indigo-600 text-white px-4 py-2 rounded'>Send</button>
//       </div>
//       {status==='sending' && <div className='text-sm text-gray-600'>Sending...</div>}
//       {status==='success' && <div className='text-sm text-green-600'>Thanks — we received your sponsor request.</div>}
//       {status==='error' && <div className='text-sm text-red-600'>There was an error. Try again later.</div>}
//     </form>
//   );
// }
