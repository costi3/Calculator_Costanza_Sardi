import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const DeleteOperation = ({ id, onDelete }) => {
    const handleDeleteOperation = () => {
        onDelete(id); // Chiama la funzione onDelete passando l'id dell'operazione
    };

    return (
        <div>
            <IconButton className='icon' aria-label="delete" color="success" onClick={handleDeleteOperation}>
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default DeleteOperation;
