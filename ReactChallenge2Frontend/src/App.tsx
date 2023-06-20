import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchComponent from './components/searchComponent';
import ResultsComponent from './components/resultsComponent';
import DetailsComponent from './components/detailsComponent';

const App: React.FC = () => {
 
  const searchResults = [
    { id: 1, title: 'Resultado 1', description: 'Descripción del resultado 1' },
    { id: 2, title: 'Resultado 2', description: 'Descripción del resultado 2' },
    { id: 3, title: 'Resultado 3', description: 'Descripción del resultado 3' },
  ];

  
  const [selectedResult, setSelectedResult] = React.useState<any>(null);

  
  const handleResultSelection = (result: any) => {
    setSelectedResult(result);
  };

  return (
    <Router>
      <div>
        <h1>Aplicación de búsqueda</h1>
        <Switch>
          <Route exact path="/">
            <SearchComponent />
          </Route>
          <Route path="/results">
            <ResultsComponent
              searchResults={searchResults}
              onResultSelect={handleResultSelection}
            />
          </Route>
          <Route path="/details/:id">
            <DetailsComponent selectedResult={selectedResult} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
