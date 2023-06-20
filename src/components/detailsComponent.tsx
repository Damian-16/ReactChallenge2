
import React from 'react';

interface Result {
  id: number;
  title: string;
  description: string;
}

interface DetailsComponentProps {
  selectedResult: Result;
}

const DetailsComponent: React.FC<DetailsComponentProps> = ({ selectedResult }) => {
  return (
    <div>
      <h2>Detalles del resultado</h2>
      <h3>{selectedResult.title}</h3>
      <p>{selectedResult.description}</p>
    </div>
  );
};

export default DetailsComponent;
