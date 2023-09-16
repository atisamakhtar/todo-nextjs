import React from 'react'

const Record = (props:any) => {
  return (
    <section className='flex justify-between items-center space-x-10 px-10 bg-purple-900 py-6 rounded-md mb-7' >
      <div className='' >
          <h2 className='text-2xl text-white' >{props.title}</h2>
          <p className='text-gray-300 text-justify' >{props.description}</p>
      </div>
      <div>
        <button className='block bg-slate-50 px-3 py-1 w-[100px] rounded-md my-1' >Update</button>
        <button className='block bg-slate-50 px-3 py-1 w-[100px] rounded-md my-1' >Delete</button>
      </div>
    </section>
  )
}

export default Record