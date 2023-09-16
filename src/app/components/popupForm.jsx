import React, { useState } from 'react';
import styles from './styles/popup.module.css';

const PopupForm = ({title, description}) => {
    // const [showForm, setShowForm] = useState(false);

    // const toggleForm = () => {
    //     setShowForm(!showForm);
    // };

    return (
        <div>
            <button onClick={toggleForm}>Open Form</button>
            <div className={`${styles['popup-form']} ${showForm ? 'show' : ''}`}>
                <button onClick={toggleForm}>Close</button>
                <form>
                    <div>
                        <input value={title} />
                    </div>
                    <div>
                        <input value={description} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopupForm;
