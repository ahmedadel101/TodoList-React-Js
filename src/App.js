import React from 'react';
import './App.css'
import TodoList from './Components/TodoList/TodoList';
import AddItem from './Components/AddItem/AddItem'



class App extends React.Component {
  state = {
    items : [
      {id:1 ,name:"Ahmed" , age:"22"},
      {id:2 ,name:"mohamed" , age:"23"},
      {id:3 ,name:"Islam" , age:"24"}
    ]
    
  }

  deleteItem = (id) => {
   let items = this.state.items.filter(item => {
     return item.id !== id
   })
   
  this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item)
    this.setState({items})    
  }

  render() {
    return (
      <div className="App">
        <div className="Copy_App">
         <h2>Todo App</h2>
        <div className="Main_Todo">
          <div className="layout">
        <TodoList  items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem} />
        </div>
        </div>
        
        </div>
      </div>
    );
  }
}

export default App;
