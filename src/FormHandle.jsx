import react, {useState} from 'react';
import FormUse from './FormUse';

const FormHandle = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return(
        <div>
            <h1>This is Form Handle component</h1>
            <FormUse 
            type = "text"
            value = {name}
            onChange = {(e)=>setName(e.target.value)}
            placeholder = "Enter your name" 
            />
            <FormUse
            type = "email"
            value = {email}
            onChange = {(e)=>setEmail(e.target.value)}
            placeholder = "Enter your email"
            />
        </div>
    )
}
export default FormHandle;