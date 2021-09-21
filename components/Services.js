import styles from "../styles/Services.module.scss"
import React from 'react'

const Services = ({ stories }) => {
    // console.log(stories)
    const header = stories.filter((story) =>
        story.slug == "services-header"
    )
    // console.log(header)
    const services = stories.filter((story) =>
        story.parent_id == 72420272
    )
    // console.log(services);
    return (
        <>
            <div className={styles.group}>
                <div className={styles.group__heading}>
                    <div className={styles.group__heading__title}>
                        {header[0].content.Title}
                    </div>
                    <div className={styles.group__heading__description}>
                        {header[0].content.Text}
                    </div>
                </div>
                <div className={styles.group__services}>
                    <div className={styles.group__services__row}>

                        {services.map((service) => {
                            // console.log(service)

                            return (
                                <div className={styles.group__services__row__service} key={service.id}>
                                    <div className={styles.group__services__row__service__image} style={{
                                        backgroundImage: `url(${service.content.Image.filename})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        width: '80px',
                                        height: '80px'
                                    }}></div>
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
