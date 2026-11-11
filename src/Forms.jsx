// import React, { useState } from 'react';

// const Forms = () => {
//     const [name, setName] = useState('');
//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }
//     const handleChange = (e) => {
//         setName(e.target.value);
//     }
//     console.log(name);
//   return (
//     <div>
//         <h1>Form</h1>
//         <form onSubmit={handleSubmit}>
//             <input value={name} onChange={handleChange} placeholder='Name'></input>
//             <input placeholder='Email'></input>
//             <button type='submit'>Submit</button>
//             <h1>My Name is: {name}</h1>
//         </form>
//     </div>
//   )
// }
// export default Forms;

import React, { useRef } from 'react';

const Forms = () => {
    const nameRef = useRef(null); 

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(nameRef.current.value);
    }

    // console.log(nameRef.current.value);
  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            ref={nameRef}
            Ref = {nameRef} 
            placeholder='Name' />
            
            <button type='submit'>Submit</button>

            {/* <h1>My Name is: {name}</h1> */}
        </form>
    </div>
  )
}
export default Forms;
