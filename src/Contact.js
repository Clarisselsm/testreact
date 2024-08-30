import React, {useState} from 'react'


const Contact = (myprop) => {
  const [customers, setCustomers] = useState(myprop.customer)

  return (
    <div>
      {customers.map((customerList) => {
          return(<div>
            <h1>{customerList.name}</h1>
            <h2>{customerList.age}</h2>
            <h4>{customerList.gender}</h4>
          </div> )
        })
      }
    </div>
  )
}

export default Contact
