import React, {useState} from 'react'
import './Style.css';
import style from './Style.module.css'
import styled from 'styled-components'

const MyBtn= styled.button`background-color:#0d6efd;
    border-style: none; 
    color:white;`;

const myButtonColor = {backgroundColor:"#0d6efd", borderStyle: "none",  color:"white"}

const Products = () => {
    const[fruits,setFruits] = useState([
        {id: 1, name: "Apple"},
        {id: 2, name: "Orange"},
        {id: 3, name: "Banana"},
        {id: 4, name: "Grapes"},
    ])

    const deleteById = id =>{
        setFruits(oldvalues => {
            return oldvalues.filter(fruit => fruit.id !== id)
        })
    }

  return (
    <div>
      <ul>
        {fruits && fruits.map(fruit => (
            <li key={fruit.id}>
                <span className={style.BlueButton}> {fruit.name}</span>
                <button style={myButtonColor} onClick={() => deleteById(fruit.id)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
