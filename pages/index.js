import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
    const mySelfIntroduction = 'I am a Software Engineer at 6amTech, working on Next.js and ReactJs. I enjoy working with NextJs, ReactJs, Redux, MaterialUi, React Query, Redux toolkit and making web pages faster. I am a Bangladeshi, living in Bangladesh 🇧🇩. I like riding my motorbike 🏍️ , reading books and having adventurous trips. But mostly i enjoy coding 🤓.'
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{mySelfIntroduction}</p>
          {/*<p>Wants to know more about my <Link href='/projects'>projects?</Link></p>*/}
      </section>
        <Footer/>
    </Layout>
  )
}
