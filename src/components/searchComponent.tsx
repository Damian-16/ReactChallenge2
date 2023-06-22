
import React, { useState } from 'react';
import { getSearchAction } from '../redux/actions/searchAction';
import { useDispatch } from 'react-redux';
import { Button, Grid } from '@mui/material';
import Input from '@mui/joy/Input';


const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
const dispatch = useDispatch()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };



  return (
    <Grid sx={{display: 'flex',justifyContent:"space-between"}}  mt={12}>
      <Input sx={{m:5}} size="sm" type="text" value={searchQuery} variant="outlined" color="success" onChange={handleInputChange} />
      <Button sx={{m:5}} variant={"contained"} color={"success"} onClick={()=> dispatch(getSearchAction({ searchQuery }))}>Buscar</Button>
    </Grid>
  );
};

export default SearchComponent;
