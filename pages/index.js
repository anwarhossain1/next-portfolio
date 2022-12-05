import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    const mySelfIntroduction = 'I am a Software Engineer at 6amTech, working on Next.js and ReactJs. I enjoy working with NextJs, ReactJs, Redux, MaterialUi, React Query, Redux toolkit and making web pages faster. I am a Bangladeshi, living in Bangladesh 🇧🇩. I like riding my motorbike 🏍️ , reading books and adventurous trips. But mostly i enjoy coding 🤓.'
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{mySelfIntroduction}</p>
      </section>
    </Layout>
  )
}
