import styles from '../styles/Hcard.module.scss'
import React from 'react'

const Hcard = ({ blok }) => {
    return (
        <div className={styles.card}>
            <h1 className={styles.card__title}> {blok.title}</h1>
            <p className={styles.card__content}>{blok.content}</p>
            <div className={styles.card__footer}>
                <input type="text" placeholder={blok.mailInput[0].placeholder} className={styles.card__footer__input} />
                <div className={styles.card__footer__button}>
                    <p className={styles.card__footer__button__text}>{blok.mailInput[0].buttonText}</p>
                </div>
            </div>
        </div>
    )
}

export default Hcard
