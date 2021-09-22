import styles from "../styles/SectionIoT.module.scss"
import { CgChevronDoubleRightO } from "react-icons/cg";
import React from 'react'
import Storyblok, { useStoryblok } from "../lib/storyblok"

const SectionIoT = ({ stories }) => {
    const header = stories.filter((story) =>
        story.slug == "section-iot-header"
    )

    return (
        <div className={styles.sectionIot}>
            <div className={styles.sectionIot__header}>
                <div className={styles.sectionIot__header__title}>{header[0].content.Title}</div>
                <div className={styles.sectionIot__header__text}>{header[0].content.Text}</div>
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
                    {/* <div className={styles.sectionIot__group__item__icon}>
                        <CgChevronDoubleRightO size={32} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SectionIoT
