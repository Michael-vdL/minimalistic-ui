import React from 'react'
import styled from 'styled-components'

const MiniMapContainer = styled.div`
  position: absolute;
  left: 0;
  top: 50%;

  display: flex;
  flex-direction: column;
`

const MiniMapNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const MiniMapNavItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  &:hover {
    cursor: pointer;
  }
`

const MiniMapIndicator = styled.span`
  height: 20px;
  width: ${(props) => (props.active ? '2px' : '1px')};
  margin-bottom: 5px;
  margin-top: 5px;
  margin-left: 14px;
  margin-right: 0px;
  background-color: ${(props) => (props.active ? 'white' : 'grey')};
  /* opacity: 0.25; */
`
const MiniMapLabel = styled.span`
  color: grey;
  width: 304px;
  height: 20px;
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-top: 3px;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  pointer-events: none;
  opacity: ${(props) => (props.isHover ? 100 : 0)};
  transition: opacity 0.1s ease;
`

export const MiniMap = () => {
  return (
    <MiniMapContainer>
      <MiniMapNav>
        <MiniMapNavItem>
          <MiniMapIndicator></MiniMapIndicator>
          <MiniMapLabel>Model 3</MiniMapLabel>
        </MiniMapNavItem>
        <MiniMapNavItem>
          <MiniMapIndicator></MiniMapIndicator>
          <MiniMapLabel>Model 4</MiniMapLabel>
        </MiniMapNavItem>
        <MiniMapNavItem>
          <MiniMapIndicator></MiniMapIndicator>
          <MiniMapLabel isHover>Model 5</MiniMapLabel>
        </MiniMapNavItem>
        <MiniMapNavItem>
          <MiniMapIndicator active></MiniMapIndicator>
          <MiniMapLabel>Model 6</MiniMapLabel>
        </MiniMapNavItem>
      </MiniMapNav>
    </MiniMapContainer>
  )
}
