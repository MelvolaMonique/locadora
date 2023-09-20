import styles from './Estante.module.scss';
import Logo from 'assets/logo.svg';

export default function Estante(){
    return(
        <main>
        <nav className= {styles.jogos }>Estante da Locadora
        <img src={Logo} alt='Logo da Estante'/>
        </nav>
        <header className={styles.header}></header>
            </main>
    );
}
/*arrumar a parte do nome e mudar a foto da logo */