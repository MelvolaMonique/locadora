import styles from './Estante.module.scss';
import Logo from 'assets/logo.svg';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';

export default function Estante(){

  const[busca, setBusca] = useState("");
    return(
        <main>
        <nav className= {styles.jogos }>Estante da Locadora
        <img src={Logo} alt='Logo da Estante'/>
        </nav>
        <header className={styles.header}>
            <div className={styles.header__text}>
              "Locadora de todos os jogos"
            </div>
            </header>
            <section className={styles.estante}>
              <h3 className={styles.cardapio__titulo}>JOGOS</h3>
              <Buscador busca={busca} setBusca={setBusca}/>
            <div className={styles.estante__filtros}>
            </div>
            <Filtros/>


            </section>
            </main>
    );
}
/*arrumar a parte do nome e mudar a foto da logo */
