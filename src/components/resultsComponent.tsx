
import React from 'react';
import { ResultsComponentProps } from '../interfaces/interfaces';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { useStyles } from '../assets/styles/styles';
import AspectRatio from '@mui/joy/AspectRatio';



const ResultsComponent: React.FC<ResultsComponentProps> = ({ searchResults }) => {
  return (
    <Grid sx={{display:"flex",flexWrap:"wrap"}}>
      <Typography sx={{...useStyles.h1,fontSize:"2em"}} variant="h4">Resultados de búsqueda</Typography>
      {searchResults && searchResults.map((result) => (
        <Card sx={useStyles.cards} key={result.id}>
          <CardHeader>{result.title}</CardHeader>
          <AspectRatio minHeight="120px" maxHeight="200px">
          <img
          src={result.img}
          loading="lazy"
          alt={result.description}
        />
        </AspectRatio>
          <CardContent>{result.description}</CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default ResultsComponent;
