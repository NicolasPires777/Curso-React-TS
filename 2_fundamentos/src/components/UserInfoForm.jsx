import {useState} from 'react'

const UserInfoForm = () => {

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    };

    return <form onSubmit={handleSubmit}>
        <input type='text' placeholder='digite seu nome' value={name} onChange={(e)=>setName(e.target.value)}></input>
        {name}
        <button type='submit'>Enviar</button>
    </form>
}

export default UserInfoForm