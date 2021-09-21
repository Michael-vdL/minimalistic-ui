import React, { createContext } from 'react'
import styled from 'styled-components'
import { MiniMap } from './components/Minimap'

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  background-color: black;
`

const App = () => {
  return (
    <>
      <Background></Background>

      <MiniMap></MiniMap>
    </>
  )
}

export default App
