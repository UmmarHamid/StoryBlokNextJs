import styles from "../styles/References.module.scss"

const References = ({ stories }) => {
    return (
        <div className={styles.references}>
            <div className={styles.references__header}>
                <div className={styles.references__header__title}>References Title</div>
                <div className={styles.references__header__text}>references Text</div>
            </div>
            <div className={styles.references__group}>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src="https://picsum.photos/200/300?random=1" width="134" height="67" />
                    </div>
                </div>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src="https://picsum.photos/200/300?random=2" width="134" height="67" />
                    </div>
                    <div className={styles.references__group__col__item}>
                        <img src="https://picsum.photos/200/300?random=3" width="134" height="67" />
                    </div>

                </div>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src="https://picsum.photos/200/300?random=4" width="134" height="67" />
                    </div>
                    <div className={styles.references__group__col__item}>
                        <img src="https://picsum.photos/200/300?random=5" width="134" height="67" />
                    </div>
                    <div className={styles.references__group__col__item}>
                        <img src="https://picsum.photos/200/300?random=6" width="134" height="67" />
                    </div>
                </div>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src="https://picsum.photos/200/300?random=7" width="134" height="67" />
                    </div>
                    <div className={styles.references__group__col__item}>
                        <img src="https://picsum.photos/200/300?random=8" width="134" height="67" />
                    </div>
                </div>
                <div className={styles.references__group__col}>
                    <div className={styles.references__group__col__item}>
                        <img src="https://picsum.photos/200/300?random=9" width="134" height="67" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default References
