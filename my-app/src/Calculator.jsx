import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import NewOperation from './components/operations/newOperation/newOperation';  
import './Calculator.css';

const Calculator = () => {
  const [operations, setOperations] = useState([]);
  const [result, setResult]=useState(0);
  const [Id, setId] = useState(0);

  const handleAddOperation = () => {
    setOperations([...operations, { id: Id, number: '', symbol: '+', disable: false }]);
    setId(Id +1); 
  };

  const handleUpdateOperation = (updatedOperation) => {
    setOperations(operations.map(op => (op.id === updatedOperation.id ? updatedOperation : op)));
  };

  const handleDeleteOperation = (id) => {
    setOperations(operations.filter(op => op.id !== id));
  };

  useEffect(() => {
    const total = operations.reduce((totalSum, operation) => {
      const number = parseFloat(operation.number) || 0;

      if(operation.disable){
        return totalSum;
      }

      if (operation.symbol === '+') {
        totalSum += number;
      } else {
        totalSum -= number;
      }
      return totalSum; 
    }, 0);

    setResult(total);
}, [operations]);

  return (
    <div className='box'>
      <div className='header'> 
        <h1>CalculaTOR</h1>
        <Button variant="contained" color="success" onClick={handleAddOperation}>Add Row</Button>
      </div>

      <div className='operations'>
        {operations.map((operation) => (
          <NewOperation
            key={operation.id}
            operation={operation}
            onUpdate={handleUpdateOperation}
            onDelete={handleDeleteOperation}
          />
        ))}
      </div>

      <div className='result'>
        <h3>Result: { result}</h3>
      </div>
    </div>
  );
}

export default Calculator;
