import React, { useRef } from 'react';
//css
import '../Styles/menu_style.css'
//rutas de imagnenes
import main_logo from '../../assets/freshguard-logo.jpeg'
import camara from '../../assets/MainMenu/camara.png'
import doc from '../../assets/MainMenu/doc.png'
import info from '../../assets/MainMenu/info.png'
import exit from '../../assets/MainMenu/exit.png'

//importando los modulos de firebase
import appFirebase from '../../credenciales';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(appFirebase)
//Para desplazarse entre paginas
import { Link } from 'react-router-dom';

export const MainMenu = ({ correoUsuario }) => {
    // Crea una referencia al elemento de entrada de tipo file
    const fileInputRef = useRef(null);

    // Maneja el clic en el botón
    const handleButtonClick = () => {
        // Simula un clic en el input file cuando se hace clic en el botón
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <button onClick={()=>signOut(auth)}>
                    <img src={exit} alt="" className='exit-img' />
                </button>
                <div className="mainlogo">
                    <img src={main_logo} alt="" />
                </div>
            </div>
            <div className="data">
                <div className="info_count-container">
                    <div className="text">Información de la cuenta</div>
                    <p>¡Bienvenido {correoUsuario}!</p>
                    <p>No olvide leer las politicas de la pagina asi
                        como hacerca de nosotros si quisiera conocer mas
                        sobre Freshguard</p>
                </div>
                <div className="submit-container">
                    <div className="photo-load">
                        {/* Añade un input de tipo file y ocúltalo */}
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            accept="image/*" /* Permite solo imágenes */
                            onChange={(e) => {
                                // Maneja el cambio de archivo seleccionado
                                const file = e.target.files[0];
                                if (file) {
                                    // Maneja el archivo seleccionado aquí
                                    console.log('Archivo seleccionado:', file);
                                }
                            }}
                        />
                        {/* Botón que al hacer clic abrirá la ventana para seleccionar archivo */}
                        <button onClick={handleButtonClick}>
                            <img src={camara} alt="" className='submit' />
                        </button>
                        <p>Cargar foto</p>
                    </div>
                    <div className="info-us">
                        <div>
                            <Link to={"/Nosotros"}><img src={info} alt="" className='submit' /></Link>
                            <p>Hacerca de nosotros</p>
                        </div>
                        <div>
                            <Link to={"/Politicas"}><img src={doc} alt="" className='submit' /></Link>
                            <p>Politicas</p>
                        </div>
                    </div>
                </div>
                {/*<div className="history-container">
                <div className="text">Historial</div>
            </div>*/}
            </div>
        </div>
    )
}




export default MainMenu;