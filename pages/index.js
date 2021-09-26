import Head from 'next/head';
import Articles from '../components/Articles';
import Sources from '../components/Sources';
import NewsContextProvider from '../lib/news-context';

export default function Home({ sources }) {

  return (
    <NewsContextProvider>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Sources {...{ sources }} />
          </div>

          <div className="col-lg-8">
            <Articles />
          </div>
        </div>
      </div>
    </NewsContextProvider>
  )
}


export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const res = await fetch(`${baseUrl}/top-headlines/sources?country=us&apiKey=${apiKey}`);

  const { sources } = await res.json()

  return { props: { sources } }
}


