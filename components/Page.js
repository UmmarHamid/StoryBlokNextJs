import DynamicHeroComponent from "./DynamicHeroComponent";
import SbEditable from "storyblok-react";
import Hero from "./Hero";
import Services from "./Services"
import SectionIoT from "./SectionIoT";
import SectionKeyValues from "./SectionKeyValues";
import References from "./References";
import Contact from "./Contact";
import Footer from "./Footer";
const Page = ({ content, stories }) => (
    <>
        <Hero>
            <SbEditable content={content}>
                <div>
                    {content.body.map((blok) =>
                        <DynamicHeroComponent blok={blok} key={blok._uid} />
                    )}
                </div>
            </SbEditable>
        </Hero>
        <Services stories={stories} />
        <SectionIoT stories={stories} />
        <SectionKeyValues stories={stories} />
        <References stories={stories} />
        <Contact stories={stories} />
        <Footer stories={stories} />


    </>

);

export default Page;
