import React, { useState } from 'react'
import styled from 'styled-components'
import dot from '../../assets/dot.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import ButtonAddList from './ButtomAddList';
import SubListItem from './SubListItem';
import { addItemlist, removelist, editListTitle } from '../../services/localstorage';

const MainListWrapper = styled.article`
  width: 360px;
  display: flex;
  flex-direction: column;
  border: 1px solid #E2E8E9;
  border-radius: 10px;
  padding: 14px 15px;
  margin-top: 25px;
`
const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
`
const Icon = styled.div`
  margin-right: 20px;
`

function ListItem({ list }) {
  const { id, title, item } = list
  const [value, setValue] = useState(list);

  const handleAddSubIten = (item) => {
    if(typeof item !== 'string' || item.trim().length === 0) {
      alert("Campo Add Sub-item Lista Vazio");
    } else {
      addItemlist(id, item);
    }
  };
  const onChange = (e) => {
    const html = e.target.innerHTML;
    setValue(html);
  };
  const submitItem = () => {
    editListTitle(id, value)
  }
  const removeItem = (id) => {
    removelist(id)
  } 
  return (
    <MainListWrapper>
      <Title>
      <div>
      <img src={dot} alt="" />
      <div suppressContentEditableWarning="true"
      contentEditable={true} onInput={onChange} onBlur={submitItem}>
        {title}
      </div>
      </div>
      <Icon>
        <div onClick={()=>{removeItem(id), window.location.reload(false)}}>
          <FontAwesomeIcon icon={faTrashCan} size="lg" />
        </div>
      </Icon>
      </Title>
      <ButtonAddList handleAdd={handleAddSubIten}>
        Adicione sub-itens a sua lista
      </ButtonAddList>
      {item.map((item, index) => <SubListItem index={index} id={id} item={item}/>)}
    </MainListWrapper>
  )
}

export default ListItem