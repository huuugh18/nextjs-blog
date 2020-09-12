import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
// import { getSortedQuotes } from "../lib/quotes";

export default function Home({ allPostsData, quotes }) {
   // if (quotes.length < 1) {
   //    quotes = [{}]
   // }
   console.log({ allPostsData, quotes })
   return (
      <Layout home>
         <Head>
            <title>{siteTitle}</title>
         </Head>
         <section className={utilStyles.headingMd}>
            <p>
               Hey this is the home site of the Riverhawks. Welcome. Hope you
               like baseball!
            </p>
            <p>
               (This is a sample website - you’ll be building a site like this
               on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
         </section>
         <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
         >
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
               {allPostsData.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                     <Link href="/posts/[id]" as={`/posts/${id}`}>
                        <a>{title}</a>
                     </Link>
                     <br />
                     <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                     </small>
                  </li>
               ))}
            </ul>
         </section>
         <section>
            {/* {quotes.length > 1 && (
          <>
            {quotes.map(({ quote, charater, image }) => (
              <li className={utilStyles.listItem} key={image}>
                <img src={image} />
                {charater} - {quote}
              </li>
            ))}
          </>
        )} */}
         </section>
      </Layout>
   )
}
export async function getStaticProps() {
   const allPostsData = getSortedPostsData()
   //   const quotes = getSortedQuotes();
   return {
      props: {
         allPostsData,
         // quotes,
      },
   }
}
