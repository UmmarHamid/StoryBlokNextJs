import styles from "../styles/Services.module.scss"
import React from 'react'

const Services = ({ blok }) => {

    const header = blok.service.filter((el) => {
        return el.component == "Title Text"
    })

    const serviceCards = blok.service.filter((el) => {
        return el.component == "info-card"
    })
    return (
        <>
            <div className={styles.group}>
                <div className={styles.group__heading}>
                    <div className={styles.group__heading__title}>
                        {header[0].Title}
                    </div>
                    <div className={styles.group__heading__description}>
                        {header[0].Text}
                    </div>
                </div>
                <div className={styles.group__services}>
                    <div className={styles.group__services__row}>

                        {serviceCards.map((service) => {

                            return (
                                <div className={styles.group__services__row__service} key={service._uid}>
                                    <div className={styles.group__services__row__service__image} style={{
                                        backgroundImage: `url(${service.Image.filename})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        width: '80px',
                                        height: '80px'
                                    }}></div>
                                    <div className={styles.group__services__row__service__title}>{service.Title}</div>
                                    <div className={styles.group__services__row__service__description}>{service.Text}</div>
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
