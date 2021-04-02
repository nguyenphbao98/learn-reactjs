import React from 'react';
import { Box} from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';

function ProductFeature(props) {

    const match = useRouteMatch();

    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} component={ListPage}/>
            </Switch>
        </Box>
    );
}

export default ProductFeature;