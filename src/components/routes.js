import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from "./Home"
import Profile from "./Profile"
import Settings from "./Settings"
import NotFound from "./NotFound"
import User from "./User"

export default (
    <Switch>
        <Route path="/profile/settings" component={Settings} />
        <Route path="/profile" component={Profile} />
        <Route path="/user/:id" component={User} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
    </Switch>
)

