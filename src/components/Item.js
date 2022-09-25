import React, { useState } from 'react'
import EditItem from './EditItem'

const Item = ({item}) => {

    const [isChecked, setisChecked] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [modifiedItem, setModifiedItem] = useState('')

    function toggleChecked(){
        setisChecked(prev => !prev)
    }

    function makeDark(e){
        e.target.style.backgroundColor = 'black'
        e.target.style.color = 'white'
    }
    function handleEdit(e){
        setIsEditing(prev => !prev);
    }

    function handleDelete(e){
        e.target.parentElement.parentElement.remove();
    }
    return (
        <>
            <div className='item'>

                {
                isEditing? 
                <EditItem 
                inputValue = {modifiedItem?modifiedItem:item} 
                setIsEditing={setIsEditing}
                setModifiedItem = {setModifiedItem}
                makeDark = {makeDark}
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