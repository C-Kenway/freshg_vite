import '../Styles/info_us.css'
import main_logo from '../../assets/freshguard-logo.jpeg'
import info from '../../assets/MainMenu/info.png'
import back from '../../assets/MainMenu/back.png'
import { Link } from 'react-router-dom';

export const Politicas = () => {
    return (
        <div className='container'>
            <div className="header">
                <Link to={"/MainMenu"}><img src={back} alt="" className='exit-img' /></Link>
                <div className="mainlogo">
                    <img src={main_logo} alt="" />
                </div>
            </div>
            <div className="data">
                <div className="info_count-container">
                    <div className="text">Politicas de uso</div>
                    <p>En el mundo dinámico y cambiante de la industria alimentaria, la búsqueda constante de la mejora en la
                        calidad de productos perecederos se convierte en un desafío apremiante. En este contexto, surge la pregunta fundamental:
                        ¿Cómo puede la tecnología desempeñar un papel crucial en elevando la calidad de alimentos susceptibles a la descomposición?</p>
                    <p>
                        Los productos perecederos, desde derivados animales hasta las frutas más delicadas, enfrentan la constante
                        amenaza de deterioro, donde factores como la temperatura, la humedad y la presión son determinantes críticos. La necesidad de
                        identificar y abordar los defectos en estos productos se convierte en un imperativo, no solo desde la perspectiva de la industria, sino también en términos de los estándares establecidos por las Normas Oficiales Mexicanas (NOM) y las Normas Mexicanas (NMX). Este desafío se manifiesta de manera palpable en la pérdida de calidad, servicio inadecuado al cliente y pérdidas económicas.
                    </p>
                </div>
                <div className="submit-container">
                    <div className="politics">
                        <Link to={"/Nosotros"}><img src={info} alt="" className='submit' /></Link>
                        <p>Sobre Nosotros</p>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Politicas;
