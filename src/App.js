import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [state, setState] = useState({ items: [], itemsToShow: "all", id: uuid(), item: '',editItem: false,});

  const handleChange = event => {
    setState({...state, item: event.target.value,});
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newItem = {id: state.id, title: state.item, completed: false,};
    const updatedItems = [...state.items, newItem];

    if (state.item.length > 0) {
      setState({...state, items: updatedItems, id: uuid(), item: '', editItem: false,});
    }
  };

  const updateTodosToShow = string => {
    setState({...state, itemsToShow: string,});
  };

  const handleDoneTask = (id, completed) => {
    const filteredItems = state.items.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setState({...state, items: filteredItems,});
  };

  const handleDelete = id => {
    const filteredItems = state.items.filter(item => item.id !== id);
    setState({...state, items: filteredItems,});
  };

  const handleEdit = id => {
    const filteredItems = state.items.filter(item => item.id !== id);
    const selectedItem = state.items.find(item => item.id === id);
    setState({
      ...state,
      items: filteredItems,
      id: id,
      item: selectedItem.title,
      editItem: true,
    });
  };

  const handleDeleteDoneTasks = () => {
    const filteredItems = state.items.filter(item => item.completed === false);
    setState({
      ...state,
      items: filteredItems,
    });
  };

  const clearList = () => {
    setState({
      ...state,
      items: [],
    });
  };

  let items = [];

  if (state.itemsToShow === "all") {
    items = state.items;
  } else if (state.itemsToShow === "todo") {
    items = state.items.filter(item => !item.completed);
  } else if (state.itemsToShow === "done") {
    items = state.items.filter(item => item.completed);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-8 mx-auto mt-4">
          <h3 className="text-capitalize text-center">TodoInput</h3>
          <TodoInput
            item={state.item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <TodoList
            items={items}
            filterDoneTasks={handleDeleteDoneTasks}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleDoneTask={handleDoneTask}
            handleDeleteDoneTasks={handleDeleteDoneTasks}
            updateTodosToShow={updateTodosToShow}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
