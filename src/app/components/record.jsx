"use client"

import React from 'react';
import { useState } from 'react';
import PopupForm from "./popupForm";
import styles from "./styles/popup.module.css";

const Record = ({states , dataArray, description, dispatch, title, indexId }) => {

  // ********** delete functionality written over here

  let leftoverDataArray = [];
  const deleteHandler = (event) => {

    const userConfirmed = confirm(`Are you sure you want to delete ${title}?`);

    if (userConfirmed) {

      leftoverDataArray = dataArray.filter((element, index) => index != indexId)
      console.log("User confirmed.");

      dispatch({
        type: "setStarterData",
        payload: leftoverDataArray,
      })
    }
  }

  // ********** update functionality written over here

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    // console.log("Updated request form : ", title);
    setShowForm(!showForm);
    // console.log("Updated request form : ", title, showForm);
  };

  return (
    <>
      <section className='flex justify-between items-center space-x-10 px-10 bg-purple-900 py-6 rounded-md mb-7' >
        <div className='' >
          <h2 className='text-2xl text-white' >{title}</h2>
          <p className='text-gray-300 text-justify' >{description}</p>
        </div>
        <div>
          <button onClick={toggleForm} className='block hover:bg-slate-300 bg-slate-50 px-3 py-1 w-[100px] rounded-md my-1' >Update</button>
          <button onClick={deleteHandler} className='block hover:bg-slate-300 bg-slate-50 px-3 py-1 w-[100px] rounded-md my-1' >Delete</button>
        </div>
      </section>

      { showForm && <div className={`transition-opacity ease-in duration-700 opacity-100 ${styles.poupForm}`}  >
        <PopupForm
          title={title}
          description={description}
          states={states}
          dispatch={dispatch}
          toggleForm={toggleForm}
          indexId={indexId}
        />
      </div> }
    </>
  )
}

export default Record