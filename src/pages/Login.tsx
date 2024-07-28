import React, { useState } from "react";


function Login() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        console.log('Account', account);
        console.log('Password', password);
    }

    return <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label className="text-3xl font-bold underline">Account:</label>
            <input type="text" value={account} onChange={(e) => setAccount(e.target.value)}></input>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit"></button>
        </form>
    </div>
}



export default Login;