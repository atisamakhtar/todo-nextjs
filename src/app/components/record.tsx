import React from 'react'

const Record = (props:any) => {
  return (
    <div className='p-10' >
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  )
}

export default Record