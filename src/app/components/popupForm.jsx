import React, { useState } from 'react';
// import styles from './styles/popup.module.css';

const PopupForm = ({toggleForm, dispatch, title, description }) => {

    const onSubmitHandler = () => {

    }

    return (
        <div>
            {/* <button onClick={toggleForm}>Open Form</button> */}
            {/* <div className={`${styles['popup-form']} ${showForm ? 'show' : ''}`}> */}
            <div>
                <button onClick={toggleForm}>Close</button>
                <form className='my-10 md:w-[40vw]' onSubmit={onSubmitHandler} >
                    <div className='mt-5 w-100' >
                        <label className='mb-3' htmlFor="title">Title</label>
                        <input value={title} onChange={(e) => dispatch({ type: "titleUpdate", payload: e.target.value })} className='px-3 py-1 rounded-sm block w-[100%] border-2 border-gray-400 border-r-2' type="text" id='title' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="description">Description</label>
                        <textarea onChange={(e) => dispatch({ type: "descUpdate", payload: e.target.value })} rows={6} cols={20} className='px-3 py-1 rounded-sm border-2 border-gray-400 w-[100%] block' id='description' value={description} ></textarea>                    </div>
                    <input className='bg-purple-900 hover:bg-purple-600 px-7 py-3 text-gray-100 mt-5' type="submit" value="Add Record" />
                </form>
            </div>
        </div>
    );
};

export default PopupForm;
