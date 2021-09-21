import styles from "../styles/Contact.module.scss"
import React from 'react'
import { RiAccountPinCircleLine } from "react-icons/ri";

const Contact = ({ stories }) => {
    return (
        <div className={styles.contact}>
            <div className={styles.contact__avatar}>
                <RiAccountPinCircleLine size={120} />
            </div>
            <div className={styles.contact__title}>Bize Ulaşın</div>
            <div className={styles.contact__text}>Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.</div>
            <div className={styles.contact__button}>Bize Ulaşın</div>
        </div>
    )
}

export default Contact
