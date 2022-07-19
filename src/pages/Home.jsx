import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListItem from '../components/list/ListItem';
import ButtonAddList from '../components/list/ButtomAddList';
import { getTodoList, addNewlist } from '../services/localstorage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  margin-bottom: 20px;
`
const ContainerList = styled.div`
  height: 560px;
  overflow: auto;
`

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTodoList(getTodoList());
  }, [data]);
  // TODO referenciar todoList para o useEffect causa loopinfinito
  // não sei a solução para o problema então usei 
  // window.location.reload(false) nos clicks para retornar a atualização
  // até descobrir como faço a atualização.
 
  const handleAddList = (data) => {
    setData(data);
    addNewlist(data);
  };
    return (
    <>
      <Header />
      <Container>
        {data}
        <ButtonAddList
          handleAdd={handleAddList}>
          Qual lista você deseja criar ?
        </ButtonAddList>
      </Container>
        {
          todoList.length > 0 ? (
            <>
            <Container>
              <ContainerList>
                {todoList.map(todoList => <ListItem list={todoList} key={todoList.id}/>)}
              </ContainerList>
            </Container>
              <Footer />
            </>
          ) : (
            <Container>
              <h1>Nenhuma lista Criada!</h1>
            </Container>
          )
        }
    </>
  );
}

export default Home
