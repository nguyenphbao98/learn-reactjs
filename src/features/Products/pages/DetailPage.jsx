import React from 'react';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0'
    }
}))

function DetailPage(props) {

    const classes = useStyles();

    return (
        <Box>
            here
        </Box>
    );
}

export default DetailPage;