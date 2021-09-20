import React from 'react'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div>
            <div className={styles.layoutContainer}>
                {children}
            </div>
        </div>
    )
}

export default Layout
