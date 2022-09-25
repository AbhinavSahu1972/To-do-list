import React, { useState, useEffect } from 'react'
import './inputItemStyle.css'

function EditItem({ setIsEditing, setModifiedItem, inputValue , makeDark }) {

    const [editValue, setEditValue] = useState(inputValue);

    function formSubmitHandler(e) {

        e.preventDefault()
        setIsEditing(false)
        setModifiedItem(editValue)
    }

    function inputChangeHandler(e) {
        const val = e.target.value
        setEditValue(val);
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <input
                className='edit-form'
                type="text"
                value={editValue}
                onChange={inputChangeHandler}
                onFocus = {makeDark}
            />
        </form>
    )
}

export default EditItem