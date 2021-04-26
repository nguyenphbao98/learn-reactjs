import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import categoryApi from '../../../../api/categoryApi';

FilterByCategory.propTypes = {
    onChange: PropTypes.func
};

const useStyles = makeStyles(theme => ({
    product:{
        listStyle: 'none'
    },
    product__item:{
        cursor:'pointer',
        border: '1px solid transparent',

        "&:hover" : {
            borderColor: 'gray',
        }
    }
}))

function FilterByCategory({onChange}) {

    const classes = useStyles();
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll();

                const newList = list.map((x) => ({
                    id: x.id,
                    name: x.name,
                    })
                );

                setCategoryList(newList);

            } catch (error) {
                console.log("Failed to fetch",error);
            }
        })();

        // return setCategoryList([]);
    },[])

    const handleCategoryClick = (category) => {
        if(!onChange) return;
        onChange(category.id);
    }

    return (
        <Box>
            <Typography>
                <ul className={classes.product}>
                    {categoryList.map((category) => (
                        <li key={category.id} onClick={handleCategoryClick.bind(this,category)} className={classes.product__item}>
                            {category.name}
                        </li>
                    ))}
                </ul>
            </Typography>
        </Box>
    );
}

export default FilterByCategory;