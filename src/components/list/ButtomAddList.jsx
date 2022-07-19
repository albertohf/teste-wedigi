import React,{ useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const MainButtonWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  div {
    position: absolute;
    right: 20px;
  }
`
const Text = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primarygray};
  border-radius: 10px;
  height: 45px;
  font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
  font-size: 14px;
  border: none;
  padding: 10px;
`

function ButtomAddList(props) {
  const [list, setList] = useState()

  return (
    <MainButtonWrapper>
        <Text id="list"
          list="list"
          type="text"
          value={list}
          placeholder={props.children}
          onChange={(e) => setList(e.target.value)}/>
      <div onClick={()=>{
        props.handleAdd(list)
        }}>
        <FontAwesomeIcon icon={faPlus} size="lg" />
      </div>
    </MainButtonWrapper>
  )
}

export default ButtomAddList