import '../Styles/login_signup.css'
import email_icon from '../../assets/LoginSignUp/email.png'
import password_icon from '../../assets/LoginSignUp/password.png'
import main_logo from '../../assets/freshguard-logo.jpeg'

import appFirebase from '../../credenciales'
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
const auth = getAuth(appFirebase)

export const LoginSignup = () => {

    const navigate = useNavigate();
    
    const functAutentication = async (e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        try {
            await createUserWithEmailAndPassword(auth,correo,contraseña)
            navigate('/');
        } catch (error) {
            alert("Correo o contraseña no valido")
        }
        
    }

    return (
        <div className='container_log'>
            <div className="mainlogo_log">
                <img src={main_logo} alt="" />
            </div>
            <div className="data_log">
                <div className='header_log'>
                    <div className="text">REGISTRO</div>
                    <div className="underline"></div>
                </div>
                <form onSubmit={functAutentication}>
                    <div className="inputs">
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" class="input-line" placeholder="Email" id='email'/>
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" class="input-line" placeholder='Contraseña' id='password'/>
                        </div>
                    </div>
                    <div className="submit-container_log">
                        <button className={"submit_log"}>Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginSignup