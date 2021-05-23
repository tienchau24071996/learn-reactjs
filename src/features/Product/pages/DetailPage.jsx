import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`
  },

  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5),
  },
}));

function DetailPage() {
  const classes  = useStyles();
 
  const {params : {productId}} = useRouteMatch();

  const {product,loading} = useProductDetail(productId)

  if(loading){
    return <Box>Loading</Box>
  }

  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid className={classes.left} item>
                <ProductThumbnail product={product} />
            </Grid>
            <Grid className={classes.right} item>
              Right
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
