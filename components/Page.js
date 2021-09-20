import DynamicHeroComponent from "./DynamicHeroComponent";
import SbEditable from "storyblok-react";
import Hero from "./Hero";
import Services from "./Services"
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

    </>

);

export default Page;
