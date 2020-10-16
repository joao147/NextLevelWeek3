import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import landing from './pages/Landing'
import orphanagesMap from './pages/orphanagesMap';
import createOrphanages from './pages/CreateOrphanage';
import orphanages from './pages/Orphanage';


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={landing} />
                <Route path="/orphanages" exact component={orphanagesMap}/>
                <Route path="/orphanages/create" component={createOrphanages}/>
                <Route path="/orphanage/:id" component={orphanages}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;