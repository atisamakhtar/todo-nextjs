import React from 'react'

const Record = ({ dataArray, description, dispatch, title, indexId }) => {
  // const Record = ( {description, dispatch, title} ) => {

  // console.log("states are : ", dataArray)
  // console.log("Key : ", key);

  // console.log("props from record element : ", props);

  let updatedData = [];

  const deleteHandler = (event) => {

    const userConfirmed = confirm(`Are you sure you want to delete ${title}?`);

    if (userConfirmed) {

      updatedData = dataArray.filter((element, index) => index != indexId)
      console.log("User confirmed.");

      dispatch({
        type: "setStarterData",
        payload: updatedData,
      })
    }
  }

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section className='flex justify-between items-center space-x-10 px-10 bg-purple-900 py-6 rounded-md mb-7' >
      <div className='' >
        <h2 className='text-2xl text-white' >{title}</h2>
        <p className='text-gray-300 text-justify' >{description}</p>
      </div>
      <div>
        <button className='block hover:bg-slate-300 bg-slate-50 px-3 py-1 w-[100px] rounded-md my-1' >Update</button>
        <button onClick={deleteHandler} className='block hover:bg-slate-300 bg-slate-50 px-3 py-1 w-[100px] rounded-md my-1' >Delete</button>
      </div>
    </section>
  )
}

export default Record