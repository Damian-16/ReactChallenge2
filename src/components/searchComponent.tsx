
import React, { useState } from 'react';
import { handleSearch } from '../backend/backendServices';


const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };



  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      <button onClick={()=>handleSearch(searchQuery)}>Buscar</button>
    </div>
  );
};

export default SearchComponent;
