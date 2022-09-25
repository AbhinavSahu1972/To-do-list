import React  , { useState } from 'react'

function EditItem({setIsEditing , setModifiedItem}) {
const [editValue, setEditValue] = useState('');

function formSubmitHandler(e){

    e.preventDefault()
    setIsEditing(false)
    setModifiedItem(editValue)
}

function inputChangeHandler(e){

    // console.log('inputChangeHandler fired!+++++++++++++++Abhinav Sahu')
    const val = e.target.value
    setEditValue(val);
}
  return (
    <form onSubmit={formSubmitHandler}>
        <input type="text" defaultValue='default value' value = {editValue}  onChange={inputChangeHandler}/>
    </form>
  )
}

export default EditItem