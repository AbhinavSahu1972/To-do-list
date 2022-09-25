import React, { useState } from 'react'
import EditItem from './EditItem'
// import delete from '..../images/delete-btn'
// import edit from './images/edit-btn'



const Item = ({item}) => {
    //console.log(item)
    const [isChecked, setisChecked] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [modifiedItem, setModifiedItem] = useState('')
    // const isChecked = true

    function toggleChecked(){
        //console.log('toggleChecked is fired!')
        setisChecked(prev => !prev)
    }

    function editClickHandler(){
        //console.log('editClickHandler fired!')
    }

    function handleEdit(e){
        //console.log('handleEdit fired!')
        // e.target.parentElement.parentElement.inse 
        //console.log('handleEdit Abhinav = ' , e.target.parentElement.parentElement)

        //console.log(e.target.parentElement.parentElement.children[0].innerHTML)

        // const parent = e.target.parentElement.parentElement;
        // const elementToEdit = e.target.parentElement.parentElement.children[0];
        // elementToEdit.remove();

        // const newInput = document.createElement('input')
        // newInput.setAttribute('type' , 'text')
        // newInput.setAttribute('onClick' , 'editClickHandler')
        // newInput.classList.add('edit-input')
        // newInput.innerHTML = parent.children[0].innerHTML;

        // parent.append(newInput)
        // const newInput = `<input type = 'text' className = 'edit-input' value = 'Edit Now!'></input>`
        // parent.append(newInput)
        // parent.insertBefore(newInput , parent.children[0])

        // elementToEdit.innerHTML = 'element has been edited!'

        setIsEditing(prev => !prev);

    }
    function handleDelete(e){
        //console.log('handleDelete fired!')
        e.target.parentElement.parentElement.remove();
    }
    return (
        <>
            <div className='item'>

                {
                isEditing? 
                <EditItem 
                inputValue = 'Abhinav' 
                setIsEditing={setIsEditing}
                setModifiedItem = {setModifiedItem}
                />
                :
                <div className='flex-items'>{modifiedItem? modifiedItem : item}</div>
                }
                
                <div className='flex-items'>
                    <input type="checkbox" checked={isChecked} onChange = {toggleChecked}/>
                </div>
                <div className='flex-items button-container'>
                    <button onClick={handleEdit}>edit</button>
                    <button onClick={handleDelete}>delete</button>
                </div>
            </div>
        </>
    )
}

export default Item