'use client'

import React, { useState, useRef } from 'react';
// import styles from './styles/popup.module.css';

const PopupForm = ({ states, toggleForm, dispatch, title, description, indexId }) => {

    const [descriptionVal, setDescriptionVal] = useState(description);
    const [titleVal, setTitleVal] = useState(title);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        toggleForm();

        console.log(titleVal, descriptionVal);

        const toBeUpdated = states.data;
        toBeUpdated[indexId].title = titleVal;
        toBeUpdated[indexId].description = descriptionVal;

        dispatch({
            type: "setStarterData",
            payload: toBeUpdated,
        })
    }

    return (
        <div>
            {/* <button onClick={toggleForm}>Open Form</button> */}
            {/* <div className={`${styles['popup-form']} ${showForm ? 'show' : ''}`}> */}
            <div>
                <form className='my-10 md:w-[40vw]' onSubmit={onSubmitHandler} >
                    <div className='mt-5 w-100' >
                        <label className='mb-3' htmlFor="title">Title</label>
                        <input value={titleVal} onChange={(e) => setTitleVal(e.target.value)} className='px-3 py-1 rounded-sm block w-[100%] border-2 border-gray-400 border-r-2' type="text" id='title' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="description">Description</label>
                        <input value={descriptionVal} onChange={(e) => setDescriptionVal(e.target.value)} className='px-3 py-1 rounded-sm border-2 border-gray-400 w-[100%] block' id='description' />
                    </div>
                    <input className='text-sm bg-purple-900 hover:bg-purple-600 px-3 py-2 rounded-md text-gray-100 mt-5' type="submit" value="Update Record" />
                    <button className='ml-3 text-sm bg-purple-900 hover:bg-purple-600 px-3 py-2 rounded-md text-gray-100 mt-5' onClick={() => { toggleForm() }}>Close</button>
                </form>
            </div>
        </div>
    );
};

export default PopupForm;
