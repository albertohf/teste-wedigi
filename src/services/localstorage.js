import { v4 as key } from 'uuid';
export const getTodoList = () => {
  if (!localStorage["todoList"]) {
    localStorage["todoList"] = "[]";
  }

  let todoList = localStorage["todoList"];
  todoList = JSON.parse(todoList);
  return todoList;
};
export const addNewlist = (listItem) => {
  const todoList = getTodoList();
  todoList.push({"id": key(), "title": listItem, "item": []});
  localStorage["todoList"] = JSON.stringify(todoList);
};

export const addItemlist = (id, listItem) => {
  const todoList = getTodoList();
  const index = todoList.map(object => object.id).indexOf(id);
  todoList[index].item.push(listItem);
  localStorage["todoList"] = JSON.stringify(todoList);
};

export const removelist = (id) => {
  let todoList = getTodoList();
  todoList = todoList.filter((list) => list.id !== id);
  localStorage["todoList"] = JSON.stringify(todoList);
};

export const removeItemlist = (id, item) => {
  let todoList = getTodoList();
  const indexItem = todoList.filter(object => object.id === id );
  const index = indexItem[0].item.map(object => object).indexOf(item);
  indexItem[0].item.splice(index, 1);
  localStorage["todoList"] = JSON.stringify(todoList);
};

// export const editListItem = (id, newListItem) => {
//   let todoList = getTodoList();
//   const index = todoList[id].item.map(object => object).indexOf(item);
//   console.log(index);
//   todoList[id].item.splice(index, 1);
//   localStorage["todoList"] = JSON.stringify(todoList);
// };