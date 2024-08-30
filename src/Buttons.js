import React, {useState} from 'react'

const Buttons = () => {

    const[name,setName] = useState('');
    const[inputName, setInputName] = useState('');

    const handleInputChange = (event) => {
        setInputName(event.target.value)
    }

    const handleSubmit = (event) => {
        setName(event.target.value)
    }

  return (
    <div>
      <input type = "text" onChange={handleSubmit}/>
      <button type = "submit" onClick={handleSubmit}>Submit</button>
      <br />
      Your name is: <label>{name}</label>
    </div>
  )
}

export default Buttons
