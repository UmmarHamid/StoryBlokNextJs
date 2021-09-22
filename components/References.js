import styles from "../styles/References.module.scss"

const References = ({ stories }) => {
    const references = stories.filter((story) =>
        story.slug == "references"
    )
    const logo = references[0].content.Logos;
    return (
        <div className={styles.references}>
            <div className={styles.references__header}>
                <div className={styles.references__header__title}>{references[0].content.Title}</div>
                <div className={styles.references__header__text}>{references[0].content.Text}</div>
            </div>
            <div className={styles.references__group}>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src={logo[0].filename} width="134" height="67" />
                    </div>
                </div>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src={logo[1].filename} width="134" height="67" />
                    </div>
                    <div className={styles.references__group__col__item}>
                        <img src={logo[2].filename} width="134" height="67" />
                    </div>

                </div>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src={logo[3].filename} width="134" height="67" />
                    </div>
                    <div className={styles.references__group__col__item}>
                        <img src={logo[4].filename} width="134" height="67" />
                    </div>
                    <div className={styles.references__group__col__item}>
                        <img src={logo[5].filename} width="134" height="67" />
                    </div>
                </div>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src={logo[6].filename} width="134" height="67" />
                    </div>
                    <div className={styles.references__group__col__item}>
                        <img src={logo[7].filename} width="134" height="67" />
                    </div>
                </div>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src={logo[8].filename} width="134" height="67" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default References
