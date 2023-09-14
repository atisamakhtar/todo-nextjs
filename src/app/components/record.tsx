import React from 'react'

const Record = (props:any) => {
  return (
    <div className='px-10 bg-purple-900 py-6 rounded-md mb-7' >
        <h2 className='text-2xl text-white' >{props.title}</h2>
        <p className='text-gray-300' >{props.description}</p>
    </div>
  )
}

export default Record