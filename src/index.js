import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "https://app-graphql-eris.herokuapp.com/graphql"
});

const client = new ApolloClient({
  link: httpLink,
  cache,
  name: "react-web-client",
  version: "1.3",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network"
    }
  }
});

class Index extends React.Component {

  render() {
    console.log(this)
    return (
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
serviceWorker.unregister();
