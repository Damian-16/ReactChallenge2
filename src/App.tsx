import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchComponent from './components/searchComponent';
import ResultsComponent from './components/resultsComponent';
import DetailsComponent from './components/detailsComponent';
import { useSelector } from 'react-redux';
import { RootState } from './interfaces/interfaces';
import Container from '@mui/material/Container'
import { Typography } from '@mui/material';
import { useStyles } from './assets/styles/styles';

const App: React.FC = () => {


  let resultStore:any = useSelector((store: RootState) => store.search.data);
  const [searchResults, setSearchResults] = useState([])
  


  useEffect(() => {
  setSearchResults(resultStore)

  }, [resultStore])



  
  const [selectedResult, setSelectedResult] = React.useState<any>(null);


  const handleResultSelection = (result: any) => {
    setSelectedResult(result);
    
  };
   

  return (
    <Router>
      <Container sx={useStyles.root}  maxWidth="xs">
        <Typography sx={useStyles.h1} variant="h2">Aplicación de búsqueda</Typography >
        <Switch>
          <Route exact path="/">
            <SearchComponent />
          </Route>
          <Route path="/results">
            <SearchComponent />
            <ResultsComponent
              searchResults={searchResults}
              onResultSelect={handleResultSelection}
            />
          </Route>
          <Route path="/details/:id">
            <DetailsComponent selectedResult={selectedResult} />
          </Route>
        </Switch>
        </Container> 
    </Router>
  );
};

export default App;
