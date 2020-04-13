import React, { Component } from 'react'
//Apollo Imports
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../../App';
import Launch from '../Launch';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
  });

export default class Router extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
            <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route exact path="/launch/:flight_number" component={Launch}></Route>
                </Switch>
            </BrowserRouter>
                
            </div>
            </ApolloProvider>
        )
    }
}
