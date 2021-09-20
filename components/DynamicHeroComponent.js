import styles from '../styles/HeroContainer.module.scss'
import Hcard from './Hcard'

// resolve Storyblok components to Next.js components
const Components = {
    'Hero-Card': Hcard,
}

const DynamicHeroComponent = ({ blok }) => {
    // check if component is defined above
    if (typeof Components[blok.component] !== 'undefined') {
        const Component = Components[blok.component]
        // wrap with SbEditable for visual editing
        return (
            <div className={styles.heroContainer}>
                <Component blok={blok} />
            </div>
        )
    }

    // fallback if the component doesn't exist
    return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}

export default DynamicHeroComponent
