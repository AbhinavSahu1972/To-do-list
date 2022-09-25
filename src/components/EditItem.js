import React, { useState, useEffect } from 'react'

function EditItem({ setIsEditing, setModifiedItem, inputValue }) {

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
                type="text"
                value={editValue}
                onChange={inputChangeHandler}
            />
        </form>
    )
}

export default EditItem