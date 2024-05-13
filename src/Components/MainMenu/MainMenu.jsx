import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// SCSS
import '../Styles/menu_style.scss';
// Rutas de imágenes
import CustomButton from './ButtonExit';
import main_logo from '../../assets/freshguard-logo.jpeg';
import camara from '../../assets/MainMenu/camara.png';
import info from '../../assets/MainMenu/info.png';
import doc from '../../assets/MainMenu/doc.png';
// Importando los módulos de Firebase
import appFirebase from '../../credenciales';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(appFirebase);

const MainMenu = ({ correoUsuario }) => {
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const [imageBase64, setImageBase64] = useState(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('Archivo seleccionado:', file);

            const reader = new FileReader();
            reader.onloadend = () => {
                // Convertir la imagen a base64
                setImageBase64(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        // Si la imagen base64 está disponible, navegar a la página de resultados
        if (imageBase64) {
            navigate('/Resultados', { state: { imageBase64 } });
        }
    }, [imageBase64, navigate]);

    return (
        <div className='container'>
            <div className="header">
                <CustomButton text="Cerrar Sesión" onClick={() => signOut(auth)} />
                <div className="mainlogo">
                    <img src={main_logo} alt="" />
                </div>
            </div>
            <div className="data">
                <div className="info_count-container">
                    <div className="text">Información de la cuenta</div>
                    <p>¡Bienvenido {correoUsuario}!</p>
                    <p>No olvide leer las políticas de la página así como acerca de nosotros si quisiera conocer más sobre Freshguard.</p>
                </div>
                <div className="submit-container">
                    <div className="photo-load">
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <button onClick={handleButtonClick}>
                            <img src={camara} alt="" className='submit' />
                        </button>
                        <p>Cargar foto</p>
                    </div>
                    <div className="info-us">
                        <div>
                            <Link to={"/Nosotros"}><img src={info} alt="" className='submit' /></Link>
                            <p>Acerca de nosotros</p>
                        </div>
                        <div>
                            <Link to={"/Politicas"}><img src={doc} alt="" className='submit' /></Link>
                            <p>Políticas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainMenu;