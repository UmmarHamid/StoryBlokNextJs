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
            {children}
        </div>

    )

}


export default Hero
