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
    const [file, setFile] = useState(null);
    const [imageBase64, setImageBase64] = useState(null);
    const [result, setResult] = useState(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const file = e.target.files[0];
        //Para Enviar a la api
        if (selectedFile) {
            setFile(selectedFile);
        }
        //Para enviar a la otra pagina y vizualisarla
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageBase64(reader.result);
            };
            reader.readAsDataURL(file);
        }

    };

    useEffect(() => {
        const uploadImage = async () => {
            if (file) {
                const formData = new FormData();
                formData.append('image', file);

                const response = await fetch('https://02b1-2806-265-348b-719-5017-d82f-5468-ad1b.ngrok-free.app/predict', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                setResult(data);

                navigate('/Resultados', { state: { imageBase64, result: data } });
            }
        };
        uploadImage();
    }, [file,imageBase64, navigate]);

    return (
        <div className='container'>
            <div className="header">
                <CustomButton text="Cerrar Sesión" onClick={() => signOut(auth)} />
                <div className="mainlogo">
                    <img src={main_logo} alt="logo" />
                </div>
            </div>
            <div className="data">
                <div className="info_count-container">
                    <div className="text">¡Hola! Bienvenido</div>
                    <p>Usuario: {correoUsuario}</p>
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
                            <img src={camara} alt="Cargar foto" className='submit' />
                        </button>
                        <p>Cargar foto</p>
                    </div>
                    <div className="info-us">
                        <div>
                            <Link to={"/Nosotros"}><img src={info} alt="Acerca de nosotros" className='submit' /></Link>
                            <p>Acerca de nosotros</p>
                        </div>
                        <div>
                            <Link to={"/Politicas"}><img src={doc} alt="Políticas" className='submit' /></Link>
                            <p>Políticas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;