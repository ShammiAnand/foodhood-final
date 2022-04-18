import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import { actionTypes } from "./reducer"
import { useStateValue } from "./StateProvider"

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });

                console.log(result);
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className='container'>
            <div className='login'>
                <div className='login__logo'>
                    <img
                        src='login-logo.png'
                    />
                </div>
                <div className='login__info'>
                    <div>
                        <p><i>Welcome to</i></p>
                        <p className='login__info__company'>FoodHood</p>
                    </div>
                    <Button type="submit" onClick={signIn}>
                        Sign In
                    </Button>
                </div>
            </div >
        </div>
    )
}

export default Login;