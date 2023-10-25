import React from 'react'
import "./App.css"

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='additem ' onSubmit={handleSubmit  }>
        <label htmlFor='addItem'>Add Item</label>
        <input 
            autoFocus
            id='addItem'
            type='text'
            placeholder='Enter the list'
            required
            value={newItem}
            onChange={(e)=>
                 setNewItem(e.target.value)
                }
        />
        <button type='submit'>
            Add
         </button> 
    </form>
  )
}

export default AddItem