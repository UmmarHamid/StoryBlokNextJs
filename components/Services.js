import styles from "../styles/Services.module.scss"
import React from 'react'

const Services = ({ stories }) => {
    const services = stories.filter((story) =>
        story.parent_id == 72420272
    )
    // console.log(services);
    return (
        <>
            <div className={styles.group}>
                <div className={styles.group__heading}>
                    <div className={styles.group__heading__title}>
                        Kalite ve Süreç Yönetimi
                    </div>
                    <div className={styles.group__heading__description}>
                        Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
                    </div>
                </div>
                <div className={styles.group__services}>
                    <div className={styles.group__services__row}>

                        {services.map((service) => {

                            return (
                                <div className={styles.group__services__row__service}>
                                    <div className={styles.group__services__row__service__image}>Image</div>
                                    <div className={styles.group__services__row__service__title}>{service.content.Title}</div>
                                    <div className={styles.group__services__row__service__description}>{service.content.Text}</div>
                                </div>
                            )

                        })}


                    </div>

                </div>
            </div>
        </>
    )
}

export default Services
