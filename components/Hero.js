import SbEditable from 'storyblok-react'
import Link from 'next/link'

import Hcard from './Hcard'
import styles from '../styles/Hero.module.scss'

const Components = {
    'Hero-Card': Hcard,
}

const Hero = ({ blok, children }) => {
    return (
        <div className={styles.hero}>
            <nav className={styles.hero__navbar}>
                <ul className={styles.hero__navbar__elements}>

                    <Link href="/home" >
                        <a className={styles.hero__navbar__elements__item}>Çözüm ve Hizmetler</a>
                    </Link>
                    <Link href="/" >
                        <a className={styles.hero__navbar__elements__item}>Ürünler</a>
                    </Link>
                    <Link href="/" >
                        <a className={styles.hero__navbar__elements__item}>Teknolojiler</a>
                    </Link>
                    <Link href="/" >
                        <a className={styles.hero__navbar__elements__item}>İnsan Kaynakları</a>
                    </Link>
                    <Link href="/" >
                        <a className={styles.hero__navbar__elements__item}>Kurumsal</a>
                    </Link>
                    <button className={styles.hero__navbar__elements__btn}>İletişim</button>
                </ul>
            </nav>
            {children}
        </div>

    )

}


export default Hero
