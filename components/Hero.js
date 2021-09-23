import Link from 'next/link'

import Hcard from './Hcard'
import styles from '../styles/Hero.module.scss'


const Hero = ({ blok }) => {
    return (
        <div className={styles.hero}>
            <nav className={styles.hero__navbar}>
                <ul className={styles.hero__navbar__elements}>
                    <Link href="/home" >
                        <li className={styles.hero__navbar__elements__item}>Çözüm ve Hizmetler</li>
                    </Link>
                    <Link href="/" >
                        <li className={styles.hero__navbar__elements__item}>Ürünler</li>
                    </Link>
                    <Link href="/" >
                        <li className={styles.hero__navbar__elements__item}>Teknolojiler</li>
                    </Link>
                    <Link href="/" >
                        <li className={styles.hero__navbar__elements__item}>İnsan Kaynakları</li>
                    </Link>
                    <Link href="/" >
                        <li className={styles.hero__navbar__elements__item}>Kurumsal</li>
                    </Link>
                    <button className={styles.hero__navbar__elements__btn}>İletişim</button>
                </ul>
            </nav>
            <Hcard blok={blok} />
        </div>

    )

}


export default Hero
