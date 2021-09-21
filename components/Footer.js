import styles from "../styles/Footer.module.scss"
import React from 'react'
import { RiFacebookCircleLine, RiTwitterLine, RiLinkedinBoxLine, RiInstagramLine } from "react-icons/ri";

const Footer = ({ stories }) => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__group}>
                <div className={styles.footer__group__col}>
                    <ul>
                        <li><b>Çözüm ve Hizmetler</b></li>
                        <li>Yazılım Geliştirme</li>
                        <li>Yazılım Geliştirme</li>
                        <li>Yazılım Geliştirme</li>
                        <li>Yazılım Geliştirme</li>
                        <li>Yazılım Geliştirme</li>
                    </ul>
                </div>
                <div className={styles.footer__group__col}>
                    <ul>
                        <li><b>Ürünler</b></li>
                        <li>Yazılım Geliştirme</li>
                        <li>Yazılım Geliştirme</li>
                        <li>Yazılım Geliştirme</li>
                        <li>Yazılım Geliştirme</li>
                    </ul>
                </div>
                <div className={styles.footer__group__col}>
                    <ul>
                        <li><b>Kurumsal</b></li>
                        <li>Yazılım Geliştirme</li>
                        <li>Yazılım Geliştirme</li>
                        <li>Yazılım Geliştirme</li>
                    </ul>
                </div>
                <div className={styles.footer__group__col}>
                    <ul>
                        <li><b>İletişim</b></li>
                        <li>Yazılım Geliştirme</li>
                        <li>Yazılım Geliştirme</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer__marks}>
                <div className={styles.footer__marks__copyright}> &#169; Copyright 2010-2021 - Can Çevik</div>
                <div className={styles.footer__marks__socialMediaIcons}>
                    <RiLinkedinBoxLine size={32} style={{ margin: "0px 8px" }} />
                    <RiTwitterLine size={32} style={{ margin: "0px 8px" }} />
                    <RiInstagramLine size={32} style={{ margin: "0px 8px" }} />
                    <RiFacebookCircleLine size={32} style={{ margin: "0px 8px" }} />
                </div>
            </div>
        </div>
    )
}

export default Footer
