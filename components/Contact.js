import styles from "../styles/Contact.module.scss"
import React from 'react'
import { RiAccountPinCircleLine } from "react-icons/ri";

const Contact = ({ blok }) => {

    return (
        <div className={styles.contact}>
            <div className={styles.contact__avatar}>
                <RiAccountPinCircleLine size={120} />
            </div>
            <div className={styles.contact__title}>{blok.Title}</div>
            <div className={styles.contact__text}>{blok.Text}</div>
            <div className={styles.contact__button}>Click me!</div>
        </div>
    )
}

export default Contact
