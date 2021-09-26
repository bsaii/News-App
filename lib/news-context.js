import React from "react"

const NewsContext = React.createContext()

export default function NewsContextProvider({ children }) {
  // we're using this to track selected sources
  const [sources, setSources] = React.useState([])

  function toggleSource(source) {
    if (sources.includes(source)) {
      // the old sources except this one
      setSources(sources.filter((s) => s !== source))
    } else {
      setSources([...sources, source])
    }
  }

  return (
    <NewsContext.Provider value={{ sources, toggleSource }}>
      {children}
    </NewsContext.Provider>
  )
}

export { NewsContext }