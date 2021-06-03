import './App.css';
import './theme.css';
import React, { useState, useEffect } from 'react';
import BookContainer from './Components';
import NavBar from './Components/Navbar';
import styled from 'styled-components';


const MainContainer = styled.div``;

function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const [listView, setView] = React.useState(false);

  const handleChange = (event) => {
    setView(!listView);
  };

  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

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
  );
}

export default App;
