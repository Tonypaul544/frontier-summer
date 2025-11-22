// import React, { useState } from 'react';
// import { saveContact } from '../firebase';

// export default function ContactForm(){
//   const [form, setForm] = useState({name:'',email:'',message:''});
//   const [status, setStatus] = useState(null);

//   function update(e){ setForm(f=>({...f,[e.target.name]:e.target.value})); }

//   async function submit(e){
//     e.preventDefault();
//     setStatus('sending');
//     try {
//       await saveContact(form);
//       setStatus('success');
//       setForm({name:'',email:'',message:''});
//     } catch(err){
//       console.error(err);
//       setStatus('error');
//     }
//   }

//   return (
//     <form onSubmit={submit} className='grid gap-3'>
//       <input name='name' required value={form.name} onChange={update} placeholder='Full name' className='border p-2 rounded' />
//       <input name='email' type='email' required value={form.email} onChange={update} placeholder='Email' className='border p-2 rounded' />
//       <textarea name='message' required value={form.message} onChange={update} placeholder='Message' className='border p-2 rounded' />
//       <div><button type='submit' className='bg-indigo-600 text-white px-4 py-2 rounded'>Send message</button></div>
//       {status==='sending' && <div className='text-sm text-gray-600'>Sending...</div>}
//       {status==='success' && <div className='text-sm text-green-600'>Thanks — message received.</div>}
//       {status==='error' && <div className='text-sm text-red-600'>There was an error. Try again later.</div>}
//     </form>
//   );
// }
