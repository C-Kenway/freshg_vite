import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// CSS
import '../Styles/results.css';
// Rutas de imágenes
import back from '../../assets/MainMenu/back.png';

const Result = () => {
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
            <div className='imagen_muestra'>
                {/* Muestra la imagen base64 */}
                {imageBase64 && <img src={imageBase64} className="img_muestra" />}
            </div>
            <div className="data_res">
                <div className="info_daños">
                    <div className="text_res">Daño(s)</div>
                    <p>Saludable</p>
                    <p>Saludable</p>
                </div>
                <div className="info_recomendaciones">
                    <div className="text">Recomendaciones</div>
                    <p>Tomate sano y ¡listo para comer!</p>
                </div>
            </div>
        </div>
    );
};

export default Result;