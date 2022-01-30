import styled from 'styled-components'

export const ListPreviewContainer = styled.div`
  position: absolute;
  inset: 0;
  overflow-x: auto;
  overflow-y: hidden;
  margin-bottom: 8px;
  padding: 0 0 8px 8px;
  white-space: nowrap;
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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  max-height: 100%;
  width: 100%;
  white-space: normal;

  background-color: #ebecf0;
  border-radius: 3px;
`

export const ListTasksWrapper = styled.div`
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0 4px;
  padding: 0 4px;
  min-height: 0;
  z-index: 1;
`

export const TaskComposerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 38px;
`
