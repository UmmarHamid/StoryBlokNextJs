import styles from "../styles/Contact.module.scss"
import React from 'react'
import { RiAccountPinCircleLine } from "react-icons/ri";

const Contact = ({ stories }) => {
    const contactcard = stories.filter((story) =>
        story.slug == "contact-1"
    )
    // console.log(contactcard)
    return (
        <div className={styles.contact}>
            <div className={styles.contact__avatar}>
                <RiAccountPinCircleLine size={120} />
            </div>
            <div className={styles.contact__title}>{contactcard[0].content.Title}</div>
            <div className={styles.contact__text}>{contactcard[0].content.Text}</div>
            <div className={styles.contact__button}>{contactcard[0].content.ButtonText}</div>
        </div>
    )
}

export default Contact
