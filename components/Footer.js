import styles from "../styles/Footer.module.scss"
import React from 'react'
import { RiFacebookCircleLine, RiTwitterLine, RiLinkedinBoxLine, RiInstagramLine } from "react-icons/ri";

const Footer = ({ blok }) => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__group}>
                <div className={styles.footer__group__col}>
                    <ul>
                        <li><b>Çözüm ve Hizmetler</b></li>
                        <a href="#"><li>Yazılım Geliştirme</li></a>
                        <a href="#"><li>Yazılım Geliştirme</li></a>
                        <a href="#"><li>Yazılım Geliştirme</li></a>
                        <a href="#"><li>Yazılım Geliştirme</li></a>
                        <a href="#"><li>Yazılım Geliştirme</li></a>


                    </ul>
                </div>
                <div className={styles.footer__group__col}>
                    <ul>
                        <li><b>Ürünler</b></li>
                        <a href="#"><li>Yazılım Geliştirme</li></a>
                        <a href="#"><li>Yazılım Geliştirme</li></a>
                        <a href="#"><li>Yazılım Geliştirme</li></a>
                        <a href="#"><li>Yazılım Geliştirme</li></a>
                    </ul>
                </div>
                <div className={styles.footer__group__col}>
                    <ul>
                        <li><b>Kurumsal</b></li>
                        <a href="#"><li>Yazılım Geliştirme</li></a>
                        <a href="#"><li>Yazılım Geliştirme</li></a>
                        <a href="#"><li>Yazılım Geliştirme</li></a>
                    </ul>
                </div>
                <div className={styles.footer__group__col}>
                    <ul>
                        <li><b>İletişim</b></li>
                        <a href="#"><li>Yazılım Geliştirme</li></a>
                        <a href="#"><li>Yazılım Geliştirme</li></a>
                    </ul>
                </div>
            </div>
            <div className={styles.footer__marks}>
                <div className={styles.footer__marks__copyright}> &#169; Copyright 2010-2021 - Can Çevik</div>
                <div className={styles.footer__marks__socialMediaIcons}>
                    <RiLinkedinBoxLine size={32} style={{ margin: "0px 8px", cursor: "pointer" }} />
                    <RiTwitterLine size={32} style={{ margin: "0px 8px", cursor: "pointer" }} />
                    <RiInstagramLine size={32} style={{ margin: "0px 8px", cursor: "pointer" }} />
                    <RiFacebookCircleLine size={32} style={{ margin: "0px 8px", cursor: "pointer" }} />
                </div>
            </div>
        </div>
    )
}

export default Footer
