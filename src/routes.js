import React from 'react';
import { Route } from 'react-router-dom';
import ScheduleView from './containers/schedule/ScheduleView';
import TobuyView from './containers/tobuy/TobuyView';
import CookbookView from './containers/cookbook/CookbookView';

export const BaseRouter = function() {
    return(
        <div>
            <Route exact path = '/schedule' component={ScheduleView} />
            <Route exact path = '/to-buy' component={TobuyView} />
            <Route exact path = '/cook-book' component={CookbookView} />
        </div>
    )
}