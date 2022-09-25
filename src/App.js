import React , {useState} from "react";
import './style.css'
import InputListItems from "./components/InputListItems";

function App() {

  const [inputValue, setInputValue] = useState('');
  const [List, setList] = useState([])

function formAction(e){
  e.preventDefault()
  // Clear the input field after the user has entered his choice and hit ENTER 
  setInputValue('')
  
}

function handleInput(e){
  setInputValue(e.target.value)
}

function addItem(){

  // Show an alert if the user has not entered anything other , otherwise add it to the list 
  inputValue? setList([...List , inputValue]):alert('Empty input field ! Please enter something!')
}

return(
  <>
    <form onSubmit={formAction} className='form'>
      <input type="text" value={inputValue} onChange = {handleInput} id='user-input'/>
      <button className="btn" onClick={addItem}>Add Item</button>
    </form>
    <hr />
    <InputListItems List = {List}/>
  </>
)
}
export default App;
