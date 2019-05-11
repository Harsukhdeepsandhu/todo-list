import React, { Component } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Items from './components/Items';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: localStorage.getItem('reactTodoList')
    };
  }

  itemAdded = (arg) => {
    let itemsArray = [];
    let itemObj = {
      item: arg,
      checked: false
    };

    if (JSON.parse(localStorage.getItem('reactTodoList'))[0] !== undefined) {
      itemsArray = JSON.parse(localStorage.getItem('reactTodoList'));
      itemsArray.push(itemObj);
    } else {
      itemsArray[0] = itemObj;
    }

    itemsArray = JSON.stringify(itemsArray);
    localStorage.setItem('reactTodoList', itemsArray);
    this.setState({ items: itemsArray });
  }

  render() {
    return (
      <div className="app-container">
        <AddItem itemAdded={this.itemAdded} />
        <Items items={JSON.parse(this.state.items)} />
      </div>
    );
  }
}

export default App;
