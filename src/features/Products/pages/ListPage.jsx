import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';

const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0'
    }
}))

function ListPage(props) {
    const classes = useStyles();
    const [productList,setProductList] = useState([]);
    const [loading,setLoading] = useState(true);
    const [pagination,setPagination] = useState({
        limit: 9,
        total: 10,
        page: 1
    });
    const [filter,setFilter] = useState({
        _page: 1,
        _limit: 9,
        _sort: "salePrice:ASC",
        // categoryId: null
    });

    useEffect(() => {
        (async () => {
            try {
                const {data , pagination} = await productApi.getAll(filter);
                console.log(data, pagination);
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log("Failed to fetch product list: ",error);
            }
            setLoading(false);
        })();
    },[filter])

    const handleOnChange = (e, page) => {
        setFilter((previousFilter) => ({
            ...previousFilter,
            _page: page,
        }));
    }

    const handleSortChange = (newSortValue) => {
        setFilter((previousFilter) => ({
            ...previousFilter,
            _sort: newSortValue, 
        }))
    }

    const handleFiltersChange = (newFilters) => {
        setFilter((previousFilter) => ({
            ...previousFilter,
            ...newFilters, 
        }))
    }

    return (
        <Box>
            <Container >
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilter onChange={handleFiltersChange} filters={filter}/>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>

                        <Paper elevation={0}>
                            <ProductSort onChange={handleSortChange} currentSort={filter._sort}/>
                            {loading ? <ProductSkeletonList length={9} /> 
                            : <ProductList data={productList} />}

                            <Pagination
                                color="primary" 
                                count={Math.ceil(pagination.total / pagination.limit)} 
                                page={pagination.page}
                                onChange={handleOnChange}>
                            </Pagination>
                        </Paper>
                        
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;