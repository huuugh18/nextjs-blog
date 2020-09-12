import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

import Layout from '../../components/layout'
import Date from '../../components/date'

export default function Post({ postData }) {
   const { title, id, date, contentHtml } = postData
   return (
      <Layout>
         <Head>
            <title>{title}</title>
         </Head>
         <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
               <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
         </article>
      </Layout>
   )
}

export async function getStaticPaths() {
   const paths = getAllPostIds()
   return {
      paths,
      fallback: false,
   }
}

export async function getStaticProps({ params }) {
   const postData = await getPostData(params.id)
   return { props: { postData } }
}
