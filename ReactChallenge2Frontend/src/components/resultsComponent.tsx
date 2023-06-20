
import React from 'react';

interface Result {
  id: number;
  title: string;
  description: string;
}

interface ResultsComponentProps {
  searchResults: Result[];
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({ searchResults }) => {
  return (
    <div>
      <h2>Resultados de búsqueda</h2>
      {searchResults.map((result) => (
        <div key={result.id}>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultsComponent;
