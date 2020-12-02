import {useState} from 'react';

export default function App () {

    const [form, setForm] = useState({
        username: "",
        password: "",
        email: ""
    });
    const [user, setUser] = useState("");

    const handleChange = (event) => {
     setForm({
         ...form,
         [event.target.name] : event.target.value
     })
    }

    return (
        <div>
            <h1>Register Here!!!!</h1>
            <form>
                <input type="username" name="username" placeholder="enter username" onChange={handleChange}/>
                <input type="password" name="password" placeholder="enter password" onChange={handleChange}/>
                <input type="email" name="email" placeholder="enter email" onChange={handleChange}/>
                <button>Register</button>
            </form>
        </div>
    )
}