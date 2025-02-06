// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// PRIME REACT IMPORTS
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

// FILES IMPORTS
import InputTextElement from '../../uiComponents/InputTextElement';
import ButtonElement from '../../uiComponents/ButtonElement';
// import LoginService from '../../services/login/LoginService';

// REACT COMPONENT
const Login = (props) => {

    // HOOKS
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // REACT INITIATIONS
    let navigate = useNavigate();

    const authentication = process.env.REACT_AUTHENTICATION;

    // FUNCTIONS
    const onClickLogin = () => {

        if(username != undefined && username != '' && password != undefined && password != ''){


            if(username == 'antonyjo' && password == 'antonyjo'){
                sessionStorage.setItem('authentication', authentication);
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            } else {
                console.log('Authentication Failed ...!');
            }
            
            // let loginData = {
            //     'email': username,
            //     'password': password
            // }

            // LoginService.userLogin(loginData).then(data => {
            //     if(data.success === true){
            //         sessionStorage.setItem('authentication', 'blessings');
            //         sessionStorage.setItem('role', data.role);
    
            //         setTimeout(() => {
            //             navigate('/dashboard');
            //         }, 2000);
            //     }
            //     else {
            //         console.log('Authentication Failed ...!');
            //     }
            // });
        } else {
            console.log('Validation Failed ...!');
        }
    }

    // RETURN COMPONENT
    return (
        <div className='login'>
                
            <div className='login-wrapper'>
                <div className='login-section content-center'>
                    <div className='login-box tx-left'>
                        <div class="marquee">
                            <span class="marquee-text tx-violet">Welcome to React Core...</span>
                        </div>
                        <div className='login-input-box'>
                            <InputTextElement id='username' placeholder="Username" className='username input-text' labelClassName="label-hide" value={username}   onChangeText={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='login-input-box'>
                            <InputTextElement id="password" type='password' placeholder="Password" className='password input-text' labelClassName="label-hide" value={password}  onChangeText={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='login-button-box tx-center'>
                            <ButtonElement
                                label="LOGIN"   
                                className="login-button tx-black bg-pink fw-semibold"
                                onClickButton={() => onClickLogin()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;