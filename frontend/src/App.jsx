import './App.css'
import { useState } from 'react'
import { styled } from 'styled-components'
import { HotelContainer } from './containers/HotelContainer'
import { ToggleTheme } from './components/ToggleTheme'
import { ThemeContext } from './context/ThemeContext'


const Container = styled.div`
    background-color: ${props => props.theme === 'light' ? '#fff' : '#333'};
    color: ${props => props.theme === 'light' ? '#000' : '#fff'};
    min-height: 100vh;
    padding: 20px;
    transition: all 0.3s ease;
  `;

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <Container theme={theme}>
      <ThemeContext value={{ theme, setTheme }}>
        <ToggleTheme />
        <h1>Hotels</h1>
        <HotelContainer />
      </ThemeContext>
    </Container>
  )
}

export default App
