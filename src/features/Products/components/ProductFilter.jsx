import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';

ProductFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilter({filters, onChange}) {

    const handleCategoryChange = (newCateId) => {
        if(!onChange) return;

        const newFilters = {
            category: newCateId,
        };

        onChange(newFilters);
    }

    const handlePriceChange = (values) => {
        if(onChange)
            onChange(values);
    }

    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange}/>
            <FilterByPrice onChange={handlePriceChange}/>
        </Box>
    );
}

export default ProductFilter;