import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
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
            ...filters,
            category: newCateId,
        };

        onChange(newFilters);
    }

    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange}/>
            {/* <FilterByPrice /> */}
        </Box>
    );
}

export default ProductFilter;