import React from 'react'
import{FaTrashAlt} from 'react-icons/fa';
import "./App.css"



   
const Todo = ({items,handleCheck,handleDelete}) => {
    
  return (
    
        <main>
           
            <ul>
            {items.map((item) => (
                  <li className='item'key ={item.id}> I
                        <input
                        type = "checkbox"
                        checked = {item.checked}
                        onChange={() =>handleCheck(item.id)}
                        />
                  <label 
                 
                        onDoubleClick={() => handleCheck(item.id )}>{item.item}
                  </label>
                        
                        <FaTrashAlt 
                        role='button' 
                        onClick={()=> handleDelete(item.id)}
                        tabIndex= "0"/>
                
            </li>
        ))}
        </ul>

            
        
        </main>
  )
        }
    
    

export default Todo 