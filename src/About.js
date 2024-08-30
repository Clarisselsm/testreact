import React, {useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'


const About = () => {
    const navigate = useNavigate();
    let {yourname} = useParams()
    
    useEffect(() => {
        if(yourname !== "defaultname"){
            navigate("/error");
        }
    })


  return (
    <div>
      <h1>This is my {yourname}</h1>
    </div>
  )
}

export default About
