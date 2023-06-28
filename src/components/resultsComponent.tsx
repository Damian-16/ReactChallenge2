
import React from 'react';
import { ResultsComponentProps, RootState } from '../interfaces/interfaces';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { useStyles } from '../assets/styles/styles';
import AspectRatio from '@mui/joy/AspectRatio';
import { useSelector } from 'react-redux';
import { Button } from '@mui/joy';



const ResultsComponent: React.FC<ResultsComponentProps> = ({ searchResults }) => {

  let loading: any = useSelector((store: RootState) => store.search.loading);
  return (
    <Grid item sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

      <Typography sx={{ ...useStyles.h1, fontSize: "2em", width: "100%", m: 5 }} variant="h4">Resultados de búsqueda</Typography>
      {loading ? (<Button loading color="success" variant="plain" sx={useStyles.loading}>
        Soft
      </Button>) : searchResults && searchResults.map((result) => (
        <Grid style={{ flex: 1 }} xs={12} >
          <Card sx={useStyles.cards} key={result.id}>
            <CardHeader title={result.title} />


            <AspectRatio variant="outlined" sx={{ margin: 2 }} minHeight="120px" maxHeight="200px">
              <img
                src={result.img}
                loading="lazy"
                alt={result.description}
              />
            </AspectRatio>
            <CardContent>{result.description}</CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ResultsComponent;
