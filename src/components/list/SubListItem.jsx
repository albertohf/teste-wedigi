import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { removeItemlist } from '../../services/localstorage';

const MainItemWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
const Item = styled.div`
  font-family: ${({ theme }) => theme.fonts.Item}, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin: 10px 0px;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
  }
`
const Divider = styled.span`
  margin: 10px 0px;
  width: 100%;
  border: 1px solid #F5F5F5;
`

function SubListItem({ id, item }) {

  const removeItem = (id, item) => {
    removeItemlist(id, item);
  }
  return (
    <MainItemWrapper>
      <Item>
      <div>
        {item}
      </div>
      <div onClick={()=>{
        removeItem(id, item),
        window.location.reload(false)
      }}>
        <FontAwesomeIcon icon={faTrashCan} size="lg" />
      </div>
      </Item>
      <Divider />
    </MainItemWrapper>
  )
}

export default SubListItem