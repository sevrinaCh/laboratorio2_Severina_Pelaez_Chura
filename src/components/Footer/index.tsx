import Link from 'next/link';
import seminario from '../../../public/imagenes/seminario.jpg'
//import seminario from 'next/seminario.jpg'
import styles from './styles.module.css';
const Footer = () => {
    return (
        <nav className={styles.footer}>
        <ul>
            <div className={styles.uno}>
                <li>Sistema </li>
                <li>Home </li>
                <li>Post </li>
                <li>About </li>
            </div>

            <div className={styles.dos}>
                <li>Conectate con nosotros</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Tik Tok</li>
            </div>
        
            <div className={styles.tres}>
                <li>
                    <img src="https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/2a443/next-js-logo.webp" alt="next" />
                </li>
            </div>
            
            <div className={styles.cuatro}>
                <li>
                    <img src="https://logowik.com/content/uploads/images/vercel1868.jpg" alt="vercel" />
                </li>
            </div>

            <div className={styles.cinco}>
                <li>
                <img src="imagenes/seminario.jpg" alt="seminar" />
               
                
                </li>
            </div>

        </ul>
        </nav>
    );
};
export default Footer;