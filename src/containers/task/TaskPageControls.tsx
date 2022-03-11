import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as DateIcon } from 'assets/images/watch.svg'
import { Icon } from 'styled/Mixins.styled'
import { PropTypes } from 'types/prop-types'

export const ControlsPanelWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;

  & > h3 {
    margin: 16px 0 -4px 0;

    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    color: #5e6c84;
  }

  &:first-of-type h3 {
    margin-top: 0;
  }
`

export const ControlBtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media only screen and (max-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 8px;
  }
`

type ControlBtnProps = {
  deleteBtn?: boolean
}

export const ControlBtn = styled.button<ControlBtnProps>`
  display: block;
  cursor: pointer;
  box-sizing: border-box;

  margin: 8px 0 0;
  height: 32px;
  max-width: 300px;
  overflow: hidden;

  ${({ deleteBtn }) =>
    deleteBtn
      ? css`
          color: #fff;
          background-color: #b04632;

          &:hover {
            background-color: #933b27;
          }
        `
      : css`
          color: #172b4d;
          background-color: rgba(9, 30, 66, 0.04);

          &:hover {
            background-color: rgba(9, 30, 66, 0.08);
          }
        `}

  transition: backgorund-color, border-color, box-shadow 85ms ease;

  @media only screen and (max-width: 750px) {
    display: inline-block;
    /* margin-right: 8px; */
    width: calc(50% - 8px);
  }
`

export const ControlBtnIcon = styled.span<PropTypes.StyledProps>`
  margin: 0 6px 0 -6px;

  ${({ size }) => Icon(size)};

  &:before {
    content: ${({ content }) => content};
  }
`

export const ControlDateIcon = styled.span`
  display: inline-block;
  color: rgb(66, 82, 110);

  svg {
    height: 16px;
    width: 16px;
    line-height: 16px;
    vertical-align: bottom;
  }
`

const TaskPageControls = () => {
  return (
    <>
      <ControlsPanelWrapper>
        <h3>Add to card</h3>
        <ControlBtnsContainer>
          <ControlBtn>
            <ControlBtnIcon content="'\e946'" size="sm" />
            <span>Members</span>
          </ControlBtn>
          <ControlBtn>
            <ControlBtnIcon content="'\e93f'" size="sm" />
            <span>Labels</span>
          </ControlBtn>
          <ControlBtn>
            <ControlBtnIcon style={{ margin: '0 8px 0 -4px', lineHeight: '14px', height: '16px', width: '16px' }}>
              <ControlDateIcon>
                <DateIcon />
              </ControlDateIcon>
            </ControlBtnIcon>
            <span>Dates</span>
          </ControlBtn>
          <ControlBtn>
            <ControlBtnIcon content="'\e91a'" size="sm" />
            <span>Checklist</span>
          </ControlBtn>
          <ControlBtn>
            <ControlBtnIcon content="'\e914'" size="sm" />
            <span>Cover</span>
          </ControlBtn>
        </ControlBtnsContainer>
      </ControlsPanelWrapper>
      <ControlsPanelWrapper>
        <h3>Actions</h3>
        <ControlBtnsContainer>
          <ControlBtn>
            <ControlBtnIcon content="'\e907'" size="sm" />
            <span>Archive</span>
          </ControlBtn>
          <ControlBtn>
            <ControlBtnIcon content="'\e963'" size="sm" />
            <span>Share</span>
          </ControlBtn>
          <ControlBtn deleteBtn>
            <ControlBtnIcon style={{ color: '#fff' }} content="'\e95c'" size="sm" />
            <span>Delete</span>
          </ControlBtn>
        </ControlBtnsContainer>
      </ControlsPanelWrapper>
    </>
  )
}

export default TaskPageControls
