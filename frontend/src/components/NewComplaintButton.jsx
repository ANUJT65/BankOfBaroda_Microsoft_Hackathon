import React, { useContext } from 'react';
import { NewApplicationDialogContext } from '../contexts/NewApplicationDialogContext';

const NewComplaintButton = () => {
    const { show, setShow } = useContext(NewApplicationDialogContext);

    const toggleShow = () => {
        setShow(prevShow => !prevShow);
    };

    return (
        <button className='bg-[#FF5B2E] px-2 py-2 font-bold rounded text-white' onClick={toggleShow}>+ New Complaint</button>
    );
};

export default NewComplaintButton;
