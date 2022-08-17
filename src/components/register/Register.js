import React, { useState } from 'react';
// import {autentication} from '../../config/config';
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Register = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const submitHandle=(event)=>{
        event.preventDefault()
        console.log(email,password)

    }
    return (
        <div className='container'>

            <form onSubmit={submitHandle} className="col s12 ">
                <h1>Register Account</h1>
                <div className="row">
                    <div className="input-field col s12">
                        <input onChange={(e)=>setEmail(e.target.value)} id="email" type="email" placeholder='Enter email' className="validate" />
                        <input onChange={(e)=>setPassword(e.target.value)} id="password" placeholder='password' type="password" className="validate" />
                    </div>
                </div>
                <button onClick={submitHandle} className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            </form>
            
        </div>
    );
};

export default Register;