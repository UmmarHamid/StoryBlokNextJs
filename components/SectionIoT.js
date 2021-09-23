import styles from "../styles/SectionIoT.module.scss"
import { CgChevronDoubleRightO } from "react-icons/cg";
import React from 'react'


const SectionIoT = ({ blok }) => {

    return (
        <div className={styles.sectionIot}>
            <div className={styles.sectionIot__header}>
                <div className={styles.sectionIot__header__title}>{blok.content[0].Title}</div>
                <div className={styles.sectionIot__header__text}>{blok.content[0].Text}</div>
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

                </div>
            </div>
        </div>
    )
}

export default SectionIoT
