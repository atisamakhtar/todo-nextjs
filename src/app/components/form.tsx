"use client"

import { ACTION } from 'next/dist/client/components/app-router-headers';
import React from 'react';
import { useReducer, useState } from 'react';

const redFunc = (currState: any, action: any) => {

    if (action.type === "titleUpdate") {
        // // console.log("updating title");
        return {
            ...currState,
            title: action.payload,
        }
    } else if (action.type === "descUpdate") {
        // // console.log("updating title");
        return {
            ...currState,
            description: action.payload,
        }
    } else if (action.type === "pushData") {
        // console.log("pushing data to array");

        currState.data.push({
            title: action.payload.title,
            description: action.payload.description,
        });

        return {
            ...currState,
            data: currState.data,
        }
    } else if (action.type === "setError") {
        return {
            ...currState,
            error: action.payload,
        }
    }

}

const MyForm = () => {

    const [states, dispatch] = useReducer(redFunc, {
        title: "",
        description: "",
        data: [],
        setError: null,
    });

    const onSubmitHandler = (event: any) => {
        event.preventDefault();
        // console.log("submitted");
        // console.log(states.title, states.description);

        if (states.title === "" || states.description === "") {
            dispatch({
                type: "setError",
                payload: "Please enter someting in title and description in order to save",
            });
            return;
        }

        dispatch({
            type: "pushData", payload: {
                title: states.title,
                description: states.description,
            }
        });

        dispatch({
            type: "setError",
            payload: null,
        });

        dispatch({
            type: "titleUpdate",
            payload: "",
        });

        dispatch({
            type: "descUpdate",
            payload: "",
        });
    }

    return (
        <>
            <section className='my-20 container flex items-center flex-col' >
                <h1 className='text-3xl md:w-[40vw] font-bold' >Save your record in your to do app</h1>
                <form className='my-10 md:w-[40vw]' onSubmit={onSubmitHandler} >
                    <div className='mt-5 w-100' >
                        <label className='mb-3' htmlFor="title">Title</label>
                        <input value={states.title} onChange={(e) => dispatch({ type: "titleUpdate", payload: e.target.value })} className='px-3 py-1 rounded-sm block w-[100%] border-2 border-gray-400 border-r-2' type="text" id='title' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="description">Description</label>
                        <textarea onChange={(e) => dispatch({ type: "descUpdate", payload: e.target.value })} rows={6} cols={20} className='px-3 py-1 rounded-sm border-2 border-gray-400 w-[100%] block' id='description' value={states.description} ></textarea>                    </div>
                    <input className='bg-purple-900 hover:bg-purple-600 px-7 py-3 text-gray-100 mt-5' type="submit" value="Add Record" />
                </form>

                <section className='container md:w-[40vw]'  >

                    {(states.error !== null) && <div className='text-red-500' >
                        {states.error}
                    </div>}

                    {
                        (states.data.length <= 0) && <div>
                            Please add some record using above form to show here
                        </div>
                    }

                    {(states.data.length > 0) && <table className='my-10' >
                        <thead>
                            <tr className='text-left' >
                                <th> Title </th>
                                <th className='pl-20' > Description </th>
                            </tr>
                        </thead>
                        <tbody>
                            {states.data.map((singData: any, index: any) => (
                                <tr className='text-left' key={index}>
                                    <td> <h2>{singData.title}</h2> </td>
                                    <td> <p className='pl-20'>{singData.description}</p> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>}

                </section>
            </section>

        </>
    )
}

export default MyForm