import styles from "../styles/SectionKeyValues.module.scss"
import React from 'react'

const SectionKeyValues = ({ blok }) => {

    return (
        <div className={styles.values}>
            <div className={styles.values__value}>
                <div className={styles.values__value__group}>
                    <div className={styles.values__value__group__title}>{blok.value[1].Title}</div>
                    <div className={styles.values__value__group__text}>{blok.value[1].Text}</div>
                    <div className={styles.values__value__group__button}>Keşfet</div>
                </div>
                <div className={styles.values__value__image} style={{
                    backgroundImage: `url(${blok.value[1].Image.filename})`,
                }}></div>
            </div>
            <div className={styles.values__value}>
                <div className={styles.values__value__image} style={{
                    backgroundImage: `url(${blok.value[0].Image.filename})`,
                }}></div>
                <div className={styles.values__value__group}>
                    <div className={styles.values__value__group__title}>{blok.value[0].Title}</div>
                    <div className={styles.values__value__group__text}>{blok.value[0].Text}</div>
                    <div className={styles.values__value__group__button}>Keşfet</div>
                </div>

            </div>

        </div>
    )
}

export default SectionKeyValues
