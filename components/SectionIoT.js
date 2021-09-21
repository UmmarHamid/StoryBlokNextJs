import styles from "../styles/SectionIoT.module.scss"
import { CgChevronDoubleRightO } from "react-icons/cg";
import React from 'react'

const SectionIoT = ({ stories }) => {
    return (
        <div className={styles.sectionIot}>
            <div className={styles.sectionIot__header}>
                <div className={styles.sectionIot__header__title}>Test Yönetimiyle Neler Sağlıyoruz?</div>
                <div className={styles.sectionIot__header__text}>IoT Destekli Çözümler</div>
            </div>
            <div className={styles.sectionIot__group}>
                <div className={styles.sectionIot__group__item}>
                    <div className={styles.sectionIot__group__item__text}>Yazılım Kalitesini
                        Arttırıyoruz </div>
                    <div className={styles.sectionIot__group__item__icon}>
                        <CgChevronDoubleRightO size={32} />
                    </div>
                </div>
                <div className={styles.sectionIot__group__item}>
                    <div className={styles.sectionIot__group__item__text}>Yazılım Kalitesini
                        Arttırıyoruz </div>
                    <div className={styles.sectionIot__group__item__icon}>
                        <CgChevronDoubleRightO size={32} />
                    </div>
                </div>
                <div className={styles.sectionIot__group__item}>
                    <div className={styles.sectionIot__group__item__text}>Yazılım Kalitesini
                        Arttırıyoruz </div>
                    <div className={styles.sectionIot__group__item__icon}>
                        <CgChevronDoubleRightO size={32} />
                    </div>
                </div>
                <div className={styles.sectionIot__group__item}>
                    <div className={styles.sectionIot__group__item__text}>Yazılım Kalitesini
                        Arttırıyoruz </div>
                    <div className={styles.sectionIot__group__item__icon}>
                        <CgChevronDoubleRightO size={32} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionIoT
