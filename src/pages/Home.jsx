import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListItem from '../components/list/ListItem';
import ButtonAddList from '../components/list/ButtomAddList';
import { getTodoList, addNewlist } from '../services/localstorage';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
  ul {
    padding: 0
  }
`

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTodoList(getTodoList());
    updateComponent(getTodoList())
  }, [data]);
  // TODO referenciar todoList para o useEffect causa loopinfinito
  // não sei a solução para o problema então usei 
  // window.location.reload(false) nos clicks para retornar a atualização
  // até descobrir como faço a atualização dinâmica.

  const [component, updateComponent] = useState(todoList);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(component);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateComponent(items);
  }
 
  const handleAddList = (data) => {
    if(typeof data !== 'string' || data.trim().length === 0) {
      alert("Campo Add Lista Vazio");
    } else {
      setData(data);
      addNewlist(data);
    }
  };
    return (
    <>
      <Header />
      <Container>
        <ButtonAddList
          handleAdd={handleAddList}>
          Qual lista você deseja criar ?
        </ButtonAddList>
      </Container>
        {
          component.length > 0 ? (
            <>
            <Container>
              <ContainerList>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId="component">
                    {(provided) => (
                      <ul className="component" {...provided.droppableProps} ref={provided.innerRef}>
                        {component.map((component, index) => {
                          return (
                            <Draggable key={component.id} draggableId={component.id} index={index}>
                              {(provided) => (
                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  {<ListItem list={component} key={component.id}/>}
                                </li>
                              )}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </DragDropContext>
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
