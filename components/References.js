import styles from "../styles/References.module.scss"

const References = ({ blok }) => {

    return (
        <div className={styles.references}>
            <div className={styles.references__header}>
                <div className={styles.references__header__title}>{blok.Title}</div>
                <div className={styles.references__header__text}>{blok.Text}</div>
            </div>
            <div className={styles.references__group}>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src={blok.logos[0].filename} width="134" height="67" />
                    </div>
                </div>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src={blok.logos[1].filename} width="134" height="67" />
                    </div>
                    <div className={styles.references__group__col__item}>
                        <img src={blok.logos[2].filename} width="134" height="67" />
                    </div>

                </div>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src={blok.logos[3].filename} width="134" height="67" />
                    </div>
                    <div className={styles.references__group__col__item}>
                        <img src={blok.logos[4].filename} width="134" height="67" />
                    </div>
                    <div className={styles.references__group__col__item}>
                        <img src={blok.logos[5].filename} width="134" height="67" />
                    </div>
                </div>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src={blok.logos[6].filename} width="134" height="67" />
                    </div>
                    <div className={styles.references__group__col__item}>
                        <img src={blok.logos[7].filename} width="134" height="67" />
                    </div>
                </div>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src={blok.logos[8].filename} width="134" height="67" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default References
