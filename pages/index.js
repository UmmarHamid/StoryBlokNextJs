import Head from "next/head"
import styles from "../styles/Home.module.scss"
import Page from '../components/Page'
// The Storyblok Client
import Storyblok from "../lib/storyblok"
import Layout from "../components/Layout"
export default function Home(props) {
  const story = props.story

  return (
    <div >
      <Head>
        <title>Storyblok Project</title>
        <link rel="icon" href="/favicon.ico" />
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
      preview: context.preview || false
    },
    revalidate: 10,
  }
}
