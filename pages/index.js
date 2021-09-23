import React from "react"
import Head from "next/head"
import Page from '../components/Page'
// The Storyblok Client and hook
import Storyblok from "../lib/storyblok"
import Layout from "../components/Layout"
export default function Home({ story, preview, }) {

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
          <Page content={story.content} />
        </Layout>

      </header>


    </div>
  )
}

export async function getStaticProps(context) {
  let slug = "home"
  let params = {
    version: "draft", // or 'published'
  }

  if (context.preview) {
    params.version = "draft"
    params.cv = Date.now()
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)


  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
    },
    revalidate: 3600, // revalidate every hour
  }
}
