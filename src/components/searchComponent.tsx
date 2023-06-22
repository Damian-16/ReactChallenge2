
import React, { useState } from 'react';
import { getSearchAction } from '../redux/actions/searchAction';
import { useDispatch } from 'react-redux';

const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
const dispatch = useDispatch()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };



  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      <button onClick={()=> dispatch(getSearchAction({ searchQuery }))}>Buscar</button>
    </div>
  );
};

export default SearchComponent;
