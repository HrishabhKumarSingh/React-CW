import React, { useState } from 'react';

const Forms = () => {
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }
    console.log(name);
  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={handleChange} placeholder='Name'></input>
            <input placeholder='Email'></input>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
export default Forms;