import React from "react"
import Head from "next/head"
import styles from "../styles/Home.module.scss"
import Page from '../components/Page'
// The Storyblok Client and hook
import Storyblok, { useStoryblok } from "../lib/storyblok"
import Layout from "../components/Layout"
export default function Home({ story, preview, Sdata }) {
  //set single story
  story = useStoryblok(story, preview)
  //set all stories
  const stories = Sdata.data.stories
  // add stoies to state
  const [storyBlokData, setStoryBlokData] = React.useState(stories);
  //use stories
  // {
  //   storyBlokData.map(
  //     (item) => console.log(item)
  //   )
  // }
  return (
    <div >
      <Head>
        <title>Storyblok Project</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="//app.storyblok.com/f/storyblok-v2-latest.js" type="text/javascript" id="storyblokBridge">
        </script>
      </Head>

      <header>
        <Layout>
          <Page content={story.content} stories={storyBlokData} />
        </Layout>

      </header>


    </div>
  )
}

export async function getStaticProps(context) {
  let slug = "hero"
  let params = {
    version: "draft", // or 'published'
  }

  if (context.preview) {
    params.version = "draft"
    params.cv = Date.now()
  }

  let { data } = await Storyblok.get(`cdn/stories/project/components/${slug}`, params)
  //Get all data here
  let Sdata = await Storyblok.get('cdn/stories/', {
    version: "draft"

  })
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
      Sdata
    },
    revalidate: 3600, // revalidate every hour
  }
}
