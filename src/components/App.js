// create your App component here
import React, { useState, useEffect } from "react";

function App() {

  const [imagesLoaded, setImagesLoaded] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    
    fetch("https://dog.ceo/api/breeds/image/random").then((response) => response.json()) .then((data) => {
        setImagesLoaded(data)
      setIsLoading(true)
    })
  }, [])
  
  if (!isLoading) return <p>Loading...</p>

  return (

    <img src={imagesLoaded.message} alt="A Random Dog" />
  )
}

export default App