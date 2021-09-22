import styles from "../styles/SectionKeyValues.module.scss"
import React from 'react'

const SectionKeyValues = ({ stories }) => {

    const value = stories.filter((story) =>
        story.slug == "quality-and-process-management"
    )

    const imgurl = value[0].content.Image.filename;
    return (
        <div className={styles.values}>
            <div className={styles.values__value}>
                <div className={styles.values__value__group}>
                    <div className={styles.values__value__group__title}>{value[0].content.Title}</div>
                    <div className={styles.values__value__group__text}>{value[0].content.Description}</div>
                    <div className={styles.values__value__group__button}>Keşfet</div>
                </div>
                <div className={styles.values__value__image} style={{
                    backgroundImage: `url(${imgurl})`,
                }}></div>
            </div>
            <div className={styles.values__value}>
                <div className={styles.values__value__image} style={{
                    backgroundImage: `url(${imgurl})`,
                }}></div>
                <div className={styles.values__value__group}>
                    <div className={styles.values__value__group__title}>Kalite ve Süreç Yönetimi</div>
                    <div className={styles.values__value__group__text}>
                        Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.
                    </div>
                    <div className={styles.values__value__group__button}>Keşfet</div>
                </div>

            </div>

        </div>
    )
}

export default SectionKeyValues
