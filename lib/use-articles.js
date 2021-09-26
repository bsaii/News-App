import React from "react"

export default function useArticles(sources = []) {
  const [articles, setArticles] = React.useState([])

  // whenever sources change, we fetch the articles
  React.useEffect(() => {
    const sourcesQuery = sources.join(',')
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/everything?sources=${sourcesQuery}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&q=corona`

    fetch(baseUrl).then(async (res) => {
      const { articles } = await res.json()
      setArticles(articles)
    })
  }, [sources])

  return articles
}