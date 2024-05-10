import '../Styles/login_signup.css';
import email_icon from '../../assets/LoginSignUp/email.png';
import password_icon from '../../assets/LoginSignUp/password.png';
import main_logo from '../../assets/freshguard-logo.jpeg';

import appFirebase from '../../credenciales';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const auth = getAuth(appFirebase);

export const LoginSignup = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const functAutentication = async (e) => {
        e.preventDefault();
        
        // Verifica si el checkbox está marcado
        if (!isChecked) {
            alert('Debes aceptar los términos y condiciones.');
            return;
        }
        
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        
        try {
            await createUserWithEmailAndPassword(auth, correo, contraseña);
            navigate('/');
        } catch (error) {
            alert("Correo o contraseña no válido");
        }
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <div className='container_log'>
            <div className='mainlogo_log'>
                <img src={main_logo} alt='' />
            </div>
            <div className='data_log'>
                <div className='header_log'>
                    <div className='text'>REGISTRO</div>
                    <div className='underline'></div>
                </div>
                <form onSubmit={functAutentication}>
                    <div className='inputs'>
                        <div className='input'>
                            <img src={email_icon} alt='' />
                            <input type='email' className='input-line' placeholder='Email' id='email' required />
                        </div>
                        <div className='input'>
                            <img src={password_icon} alt='' />
                            <input type='password' className='input-line' placeholder='Contraseña' id='password' required />
                        </div>
                        <div className='checkbox-link-container'>
                            <input
                                type='checkbox'
                                name='terms'
                                id='terms'
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                /*required*/
                            />
                            <Link to={'/Politicas'}>
                                <span>Términos, Condiciones y Aviso de privacidad</span>
                            </Link>
                        </div>
                    </div>
                    <div className='submit-container_log'>
                        <button className='submit_log'>Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginSignup;