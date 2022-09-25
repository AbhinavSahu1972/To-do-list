import React , {useState} from 'react'
import './inputItemStyle.css'
import Item from './Item'
const InputListItems = ({List}) => {

    const [isChecked, setIsChecked] = useState([])
  return (
    <div className='list-item-container'>
        {List.map((item , index) => <Item item = {item} key = {index}/>)}
    </div>
  )
}

export default InputListItems