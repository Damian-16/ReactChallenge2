
import React from 'react';
import { ResultsComponentProps } from '../interfaces/interfaces';



const ResultsComponent: React.FC<ResultsComponentProps> = ({ searchResults }) => {
  return (
    <div>
      <h2>Resultados de búsqueda</h2>
      {searchResults && searchResults.map((result) => (
        <div key={result.id}>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultsComponent;
