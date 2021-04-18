import { Box, Typography } from '@material-ui/core';
import {STATIC_HOST, THUMBNAIL_PLACEHOLDER} from '../../../contants';
import PropTypes from 'prop-types';
import React from 'react';

Product.propTypes = {
    product:  PropTypes.object,
    handleClickItem : PropTypes.func,
};

function Product({ product,handleClickItem }) {
    const thumbnailUrl = product.thumbnail 
    ? `${STATIC_HOST}${product?.thumbnail.url}` 
    : THUMBNAIL_PLACEHOLDER ;

    const onClickItem = (item) => {
        if(handleClickItem)
            handleClickItem(item)
    }

    return (
        <Box padding={1} onClick={() => onClickItem(product)} >
            <Box padding={1}>
                <img src={thumbnailUrl} alt={product.name} width="100%"/>
            </Box>
            <Typography variant={"body2"}>{product.name}</Typography>
            <Typography variant={"body2"}>{product.salePrice}</Typography>
        </Box>
    );
}

export default Product;