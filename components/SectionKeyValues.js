import styles from "../styles/SectionKeyValues.module.scss"
import React from 'react'

const SectionKeyValues = ({ stories }) => {

    const value = stories.filter((story) =>
        story.parent_id == 72882792
    )

    // const imgurl1 = value[0].content.Image.filename;
    return (
        <div className={styles.values}>
            <div className={styles.values__value}>
                <div className={styles.values__value__group}>
                    <div className={styles.values__value__group__title}>{value[1].content.Title}</div>
                    <div className={styles.values__value__group__text}>{value[1].content.Description}</div>
                    <div className={styles.values__value__group__button}>Keşfet</div>
                </div>
                <div className={styles.values__value__image} style={{
                    backgroundImage: `url(${value[1].content.Image.filename})`,
                }}></div>
            </div>
            <div className={styles.values__value}>
                <div className={styles.values__value__image} style={{
                    backgroundImage: `url(${value[0].content.Image.filename})`,
                }}></div>
                <div className={styles.values__value__group}>
                    <div className={styles.values__value__group__title}>{value[0].content.Title}</div>
                    <div className={styles.values__value__group__text}>{value[0].content.Description}</div>
                    <div className={styles.values__value__group__button}>Keşfet</div>
                </div>

            </div>

        </div>
    )
}

export default SectionKeyValues
