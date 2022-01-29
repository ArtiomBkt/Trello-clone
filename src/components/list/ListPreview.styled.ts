import styled from 'styled-components'

export const ListPreviewContainer = styled.div`
  position: absolute;
  inset: 0;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;

  /* background-color: green;
  font-size: 2rem; */
`

export const ListContentPreview = styled.div`
  display: inline-block;
  height: 100%;
  margin: 0 4px;
  vertical-align: top;
  white-space: nowrap;
  width: 272px;

  &:first-child {
    margin-left: 12px;
  }
`
