import { getPostData } from '../lib/posts';
import Head from 'next/head';

export default function Home({ data, content }) {
  return (
    <>
      <Head>
        <title>{data.title} - My Static Site</title>
        <meta name="description" content={data.description || "This is a sample static site."} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description || "This is a sample static site using Next.js."} />
      </Head>

      <div>
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Fetch post data
  const { data, content } = getPostData();

  // Return the data as props to the page
  return {
    props: {
      data,
      content,
    },
  };
}
