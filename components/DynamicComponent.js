import Services from "./Services"
import SectionIoT from './SectionIoT'
import SectionKeyValues from './SectionKeyValues'
import References from './References'
import Contact from './Contact'
import Footer from './Footer'
import Hero from './Hero'

const Components = {
    'Hero-Card': Hero,
    "services": Services,
    "iot-teaser": SectionIoT,
    "our-values": SectionKeyValues,
    "our-references": References,
    "contact-us": Contact,
    "footer": Footer,

}

const DynamicComponent = ({ blok }) => {

    if (typeof Components[blok.component] == 'undefined') {
        return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)

    }

    const Component = Components[blok.component]
    return (
        <div>
            <Component blok={blok} />
        </div>
    )

}

export default DynamicComponent
