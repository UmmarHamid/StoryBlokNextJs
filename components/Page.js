import DynamicHeroComponent from "./DynamicHeroComponent";
import SbEditable from "storyblok-react";
import Hero from "./Hero";
const Page = ({ content }) => (
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

    </>

);

export default Page;
