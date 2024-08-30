import React from 'react'

const cars = ["MG Hector","Hyundai Venue","Toyota Fortuner", "Hyundai Creta"];

const Cars = () => {
  return (
    <div>
     <ul>
        {cars.map((car) => 
    <li key={car.toString()}>{car}</li>
     )}
     </ul>
     
    </div>
  )
}

export default Cars
