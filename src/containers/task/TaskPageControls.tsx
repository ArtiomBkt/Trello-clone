import React from 'react'
import styled from 'styled-components'
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
  flex-wrap: wrap;

  @media only screen and (max-width: 750px) {
    padding: 0 8px;
    justify-content: space-between;
  }
`

export const ControlBtn = styled.button`
  display: block;
  cursor: pointer;
  box-sizing: border-box;

  margin: 8px 0 0;
  height: 32px;
  max-width: 300px;
  overflow: hidden;

  color: #172b4d;
  background-color: #091e4214;
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
      </ControlsPanelWrapper>
    </>
  )
}

export default TaskPageControls
