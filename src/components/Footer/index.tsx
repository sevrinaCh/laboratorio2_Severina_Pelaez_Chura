import Link from 'next/link';
import seminario from '../../../public/imagenes/seminario.jpg'
import styles from './styles.module.css';

const Footer = () => {
    return (
        <nav className={styles.footer}>
        <div className={styles.footer2}>
            <div className={styles.footerText}>
                <p>Sistemap</p>
                <p>Home </p>
                <p>Post </p>
                <p>About </p>
            </div>

            <div className={styles.footerText}>
                <p>Conectate con nosotros</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Tik Tok</p>
            </div>
        
            <div className={styles.tres}>
                
                    <img src="./next.svg" alt="next" />
                
            </div>
            
            <div className={styles.cuatro}>
                
                    <img src="./vercel.svg" alt="vercel" />
                
            </div>

            <div className={styles.cinco}>
                
                <img src="imagenes/seminario.jpg" alt="seminar" />
               
                
                
            </div>

        </div>
        </nav>
    );
};
export default Footer;