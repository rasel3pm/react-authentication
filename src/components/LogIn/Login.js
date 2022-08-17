import React from 'react';
import { autentication } from '../../config/config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const LogInwithgoogle = () => {

        const provider = new GoogleAuthProvider();
        signInWithPopup(autentication, provider)
            .then((re) => {
                console.log(re)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='container'>

            <form className="col s12 ">
                <h1>Login Account</h1>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" placeholder='Enter email' className="validate" />
                        <input id="password" placeholder='password' type="password" className="validate" />
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                </button>
            </form> <hr />
            <button onClick={LogInwithgoogle} className="btn waves-effect waves-light" type="submit" name="action">Log In with google</button>
        </div>
    );
};

export default Login;