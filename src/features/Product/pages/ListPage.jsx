import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import FilterByCategory from '../components/Filters/FilterByCategory';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },

  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    marginTop: '30px',
    paddingBottom: '20px',
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [pagination, setpagination] = useState({
    limit: 8,
    total: 10,
    page: 10,
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 8,
    _sort: 'salePrice:ASC',
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setpagination(pagination);
        console.log({ data, pagination });
        console.log(filters);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }

      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue,
    }));
  };

  const handleFiltersChange = (newFilter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilter
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters filters={filters} onChange={handleFiltersChange} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
              {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}
              <Pagination
                className={classes.pagination}
                color="primary"
                count={Math.ceil(pagination.total / pagination.limit)}
                page={pagination.page}
                onChange={handlePageChange}
              ></Pagination>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
