import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@material-ui/core';

FilterByPrice.propTypes = {
    onChange: PropTypes.func
};

function FilterByPrice({onChange}) {

    const [values,setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0
    })
    const handleSubmit = () => {
        if(!onChange) return;

        onChange(values)
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0
        })
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        })) 
    }

    return (
        <Box>
            <Typography variant="subtitle2">
                Giá
            </Typography>

            <Box>
                <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleOnChange} />
                <span>-</span>
                <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleOnChange} />
            </Box>

            <Button variant="outline" color="primary" onClick={handleSubmit}> 
                Áp dụng
            </Button>
        </Box>
    );
}

export default FilterByPrice;