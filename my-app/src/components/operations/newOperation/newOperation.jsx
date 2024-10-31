import React, { useState, useEffect } from 'react';
import DeleteOperation from '../deleteOperation/deleteOperation';
import Button from '@mui/material/Button';
import './newOperation.css';

const NewOperation = ({ operation, onUpdate, onDelete }) => {
  const [number, setNumber] = useState(operation.number);
  const [symbol, setSymbol] = useState(operation.symbol);
  const [disable, setDisable] = useState(operation.disable);

  const handleUpdateDisable = () => {
    setDisable(!disable);
  };

  useEffect(() => {
    onUpdate({ ...operation, number, symbol, disable });
  }, [number, symbol, disable, onUpdate]); 

  return (
    <div className='row'>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        disabled={disable}
        placeholder="Insert number"
      />
      <select value={symbol} onChange={(e) => setSymbol(e.target.value)} disabled={disable}>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
      <Button variant="contained" color="success" onClick={handleUpdateDisable}>{disable ? 'Enable' : 'Disable'}</Button>
      <DeleteOperation id={operation.id} onDelete={onDelete} />
    </div>
  );
};

export default NewOperation;
