import Head from 'next/head'
import ArticleList from '../components/ArticleList'


export default function Home({article}) {
  console.log(article)
  return (
    <div>
      <Head>
        <title> Konoha news </title>
        <meta name='keywords' content='Anime, Manga' />
      </Head>
      <ArticleList article={article}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=3`
  );
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}