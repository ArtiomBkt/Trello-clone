import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from '../../styled/Mixins.styled'
import * as taskInterfaces from '../../interfaces/task.interface'

type TaskProps = {
  taskStyle: taskInterfaces.task['style']
}

export const TaskPreviewContainer = styled(Link)<TaskProps>`
  display: ${({ taskStyle }) => (taskStyle?.fullCover ? 'flex' : 'block')};
  flex-direction: ${({ taskStyle }) => (taskStyle?.fullCover ? 'row' : '')};

  cursor: pointer;

  margin-bottom: 8px;
  max-width: 300px;
  min-height: ${({ taskStyle }) => (taskStyle?.fullCover ? '56px' : '20px')};

  border-radius: 3px;
  box-shadow: 0 1px 0 #091e4240;

  background-color: ${({ taskStyle }) => (taskStyle?.background || '#fff')};
  position: relative;

  text-decoration: none;
  z-index: 0;

  &:hover {
    span {
      visibility: visible;
    }
  }
`

export const TaskCover = styled.div<TaskProps>`
  height: 32px;
  border-radius: 3px 3px 0 0;

  background-color: ${({ taskStyle }) => taskStyle?.background};
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;

  user-select: none;
`

type IconBtnProps = {
  size: string
  content: string
}

export const TaskEditIcon = styled.span`
  box-sizing: content-box;
  position: absolute;
  top: 2px;
  right: 2px;

  border-radius: 3px;

  padding: 4px;

  opacity: 0.8;
  visibility: hidden;

  background-clip: padding-box;
  background-color: #f4f5f7;
  background-origin: initial;

  z-index: 30;

  ${({ size }: IconBtnProps) => Icon(size)}

  &:before {
    ${({ content }: IconBtnProps) =>
      css`
        content: ${content};
      `}
  }

  &:hover {
    background-color: #ebecf0;
    opacity: 1;
  }
`
