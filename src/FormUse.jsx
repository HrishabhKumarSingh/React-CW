import React from 'react';

const FormUse = () => {

    const FormUse = {type, value, placeholder, onChange} 
    return(
        <div>
            <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder} 
            />
        </div>
    )
}
export default FormUse;