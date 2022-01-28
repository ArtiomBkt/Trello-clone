import styled from 'styled-components'

const CommonBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  padding: 0 12px;
  margin-left: 4px;
  border-radius: 3px;
  border: none;
  
  line-height: 32px;
  height: 32px;

  &:hover {
    background-color: hsla(0, 0, 100%, .2);
    box-shadow: none;
    color: #fff;
    cursor: pointer;
  }
`

export default CommonBtn
