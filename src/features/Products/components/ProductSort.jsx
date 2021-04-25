import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,

};

function ProductSort({currentSort, onChange}) {
    const handleSortChange = (event, newValue) => {
        if(!onChange) return;
        
        onChange(newValue);
    }
    
    return (
        <Tabs
            value={currentSort}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleSortChange}
        >
            <Tab label="Gia thap den cao" value="salePrice:ASC"></Tab>
            <Tab label="Gia cao den thap" value="salePrice:DESC"></Tab>
        </Tabs>
    );
}

export default ProductSort;