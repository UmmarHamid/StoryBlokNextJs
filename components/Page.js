import DynamicComponent from "./DynamicComponent";
import SbEditable from "storyblok-react";

const Page = ({ content }) => (

    <>
        <SbEditable content={content}>
            <div>
                {content.body.map((blok) =>
                    <DynamicComponent blok={blok} key={blok._uid} />
                )}
            </div>
        </SbEditable>
    </>

);

export default Page;
