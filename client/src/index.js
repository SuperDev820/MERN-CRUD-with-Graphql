import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import './index.css';
import App from "./App.js";

const client = new ApolloClient({ uri: "http://localhost:3000/graphql" });

ReactDOM.render(
	<ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
 	document.getElementById('root')
);
