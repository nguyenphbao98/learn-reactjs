import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import categoryApi from '../../../../api/categoryApi';

FilterByCategory.propTypes = {
    onChange: PropTypes.func
};

function FilterByCategory({onChange}) {

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

                console.log(newList);
                //setCategoryList([{id: 1, name: "Thời trang"},{id: 2, name: "Khẩu trang"}]);
            } catch (error) {
                console.log("Failed to fetch",error);
            }
        })();

        // return setCategoryList([]);
    },[])

    const handleCategoryClick = (category) => {
        if(!onChange) return;
        onChange(category);
    }

    return (
        <Box>
            <Typography>
                <ul>
                    {categoryList.map((category) => (
                        <li key={category.id} onClick={handleCategoryClick(category)}>
                            {category.name}
                        </li>
                    ))}
                </ul>
            </Typography>
        </Box>
    );
}

export default FilterByCategory;