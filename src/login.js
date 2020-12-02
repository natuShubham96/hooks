import {useState} from "react";

export default function App () {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [user, setUser] = useState(null);

    const handleChange = (event) => {
        if(event.target.placeholder === "enter username")
      setUserName(event.target.value);
      if(event.target.placeholder === "enter password")
      setPassword(event.target.value);
     setUser({username, password});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setUserName("");
        setPassword("");
    }

    return (
        <div style = {{ textAlign : "center", flexDirection: "row"}}>
            <h1>Login</h1>
            <form style={{display: "grid", alignItems: "center", justifyItems: "center"}} onSubmit={handleSubmit}>
                <input type="username" placeholder="enter username" value={username} onChange={handleChange}/>
                <input type="password" placeholder="enter password" value={password} onChange={handleChange}/>
                <button>Submit</button>
            </form>
            {submitted && <div><h2>Username - {user.username}</h2> <h2>Password - {user.password}</h2></div>}
        </div>
    )
}