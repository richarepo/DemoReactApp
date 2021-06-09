import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BookContainer from './Components'
import NavBar from './Components/Navbar'
import './theme.css'
import './App.css'

const MainContainer = styled.div``;

function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE")
  const [darkMode, setDarkMode] = useState<any>(storedDarkMode)
  const [listView, setView] = useState(true)

  const handleChange = (data: boolean) => {
    if (listView) setView(data)
    setView(data)
  }

  const toggleDarkMode = () => setDarkMode(darkMode ? false : true)

  useEffect(() => {
    if (darkMode) {
      localStorage.removeItem("LIGHT_MODE")
      localStorage.setItem("DARK_MODE", "dark")
    } else {
      localStorage.removeItem("DARK_MODE")
      localStorage.setItem("LIGHT_MODE", "light")
    }
  }, [darkMode])

  return (
    <MainContainer className="App" data-theme={darkMode ? "dark" : "light"}>
      <NavBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        listView={listView}
        setView={handleChange}
      />
      <BookContainer darkMode={darkMode} listView={listView} />
    </MainContainer>
  )
}

export default App
