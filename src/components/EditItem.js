import React  , { useState , useEffect} from 'react'

function EditItem({setIsEditing , setModifiedItem , inputValue}) {

// console.log('EditItem.js inputValue = ' , inputValue)
// const [initialValue, setinitialValue] = useState(inputValue)
const [editValue, setEditValue] = useState(inputValue);
// const [editValue, setEditValue] = useState('');

// useEffect(() => {

//     setEditValue(inputValue);

// }, [])


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
        <input 
            type="text" 
            value = {editValue}  
            onChange={inputChangeHandler}
        />
    </form>
  )
}

export default EditItem