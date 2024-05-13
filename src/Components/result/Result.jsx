import React, { useRef } from 'react';
//css
import '../Styles/results.css'
//rutas de imagnenes
import back from '../../assets/MainMenu/back.png'
import prueba from '../../assets/prueba.jpg'

//importando los modulos de firebase
import appFirebase from '../../credenciales';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(appFirebase)
//Para desplazarse entre paginas
import { Link, useLocation } from 'react-router-dom';

export const result = () => {
// Utiliza el hook `useLocation` para obtener el estado con la imagen base64
const location = useLocation();
const { imageBase64 } = location.state || {};
    return (
        <div className='container_res'>
            <div className="header_res">
                <Link to={"/"}><img src={back} alt="" className='back-img' /></Link>
                <div className='head-text_res'>Jitomate Saladete</div>
                <div className='header_nav'>
                    <Link to={"/Resultados"}>Resultados</Link>
                </div>
            </div>
            <div className='imagen muestra'>
                    <img src={prueba} alt="" className='img_muestra'/>
            </div>
            <div className="data_res">
                <div className="info_daños">
                    <div className="text_res">Daño(s)</div>
                    <p>Saludable</p>
                    <p>Saludable</p>
                </div>
                <div className="info_recomendaciones">
                    <div className="text">Recomendaciones</div>
                    <p>Nuestro sistema está planeado para clasificar defectos en
                        tomate Saladette y chile serrano a través de imágenes tomadas a dichos productos; 
                        procesadas por la implementacion de una red neuronal capaz de identificar los defectos 
                        capturados en la imagen.</p>
                </div>
            </div>
        </div>
    )
}

export default result;