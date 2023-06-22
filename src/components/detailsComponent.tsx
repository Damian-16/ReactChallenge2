
import React from 'react';
import { Result } from '../interfaces/interfaces';


interface DetailsComponentProps {
  selectedResult: Result;
}

const DetailsComponent: React.FC<DetailsComponentProps> = ({ selectedResult }) => {
  return (
    <div>
      <h2>Detalles del resultado</h2>
      <h3>{selectedResult.title}</h3>
      {/* <img src={selectedResult.img} style={{heigth:20}}></img> */}
      <p>{selectedResult.description}</p>
    </div>
  );
};

export default DetailsComponent;
