import styled from 'styled-components'

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  outline: none;
  flex-grow: 1;
`

export const BoardContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
  position: relative;
  overflow-y: auto;
`

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0px;
  overflow-y: auto;
  position: relative;
`

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  transition: margin 0.1s ease-in;
`
