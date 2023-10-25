

import Todo from './Todo';
import Header from './Header';
import "./App.css"
import { useState } from 'react';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo-list")),[]);

    const[newItem,setNewItem] = useState('')
    
    const addItem =(item) =>{

      const id = items.length ? items[items.length-1].id + 1 :1;
      const addNewItem = {id,checked:false,item}
      const listItems = [...items,addNewItem]
      setItems(listItems )
      localStorage.setItem("todo-list",JSON.stringify(listItems))
    }

    const handleCheck =(id) =>{
        const listItems = items.map((item)=>
         item.id===id ? {...item,checked:!item.checked }:item)
         setItems(listItems )

         localStorage.setItem("todo-list",JSON.stringify(listItems))
    }
    const handleDelete =(id)=>{
        const listItems = items.filter((item) => item.id!==id)
        setItems(listItems)
        localStorage.setItem("todo-list",JSON.stringify(listItems))
    }

    const handleSubmit =(e)=>{
      e.preventDefault();
      if(!newItem) return
      addItem(newItem)
      setNewItem('');
    }
  return (
    <div className="App">
      <Header/>
      <AddItem
      newItem = {newItem}
      setNewItem ={setNewItem}
      handleSubmit={handleSubmit}/>
      <Todo
      items ={items} 
      handleCheck ={handleCheck}
      handleDelete ={handleDelete}/>
    </div>
  );
}

export default App;
