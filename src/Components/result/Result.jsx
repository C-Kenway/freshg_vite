import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// CSS
import '../Styles/results.css';
// Rutas de imágenes
import back from '../../assets/MainMenu/back.png';

const Result = () => {
    // Utiliza el hook `useLocation` para obtener el estado con la imagen base64
    const location = useLocation();
    const { imageBase64, result } = location.state || {};

    return (
        <div className='container_res'>
            <div className="header_res">
                <Link to={"/"}><img src={back} alt="" className='back-img' /></Link>
                <div className='head-text_res'>{result.fruitName}</div>
                <div className='header_nav'>
                    <Link to={"/Resultados"}>Resultados</Link>
                </div>
            </div>
            <div className='imagen_muestra'>
                {/* Muestra la imagen base64 */}
                {imageBase64 && <img src={imageBase64} className="img_muestra" />}
            </div>
            <div className="data_res">
                {result && (<div className="info_daños">
                    <div className="text_res">Predicción:</div>
                    <h6>{result.prediction}</h6>
                </div>)}
                {result && (<div className="info_recomendaciones">
                    <div className="text_res">Extra:</div>
                    <p>{result.additional_text}</p>
                </div>)}
            </div>
        </div>
    );
};

export default Result;