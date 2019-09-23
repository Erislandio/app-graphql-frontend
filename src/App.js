import React from "react";
import Header from "./components/header/Header";
import { Route } from "react-router-dom";
import Login from "./components/login/login";
import { Dashboard } from "./components/dashboard/dash";
import Cookie from "js-cookie";
import { graphql } from "react-apollo";
import { user } from "./queries/user";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      loading: true
    };
  }

  componentDidMount() {
    if (Cookie.get("_id")) {
      this.setState({ id: Cookie.get("_id"), loading: false });
    }
  }

  render() {
    console.log(this);
    const { id } = this.state;
    const {
      data: { user }
    } = this.props;

    return (
      <div className="App">
        <Header user={user} />
        <Route component={Login} path="/login" />
        <Route render={props => <Dashboard user={user} isAuthed={true} />} />
        {/* footer */}
      </div>
    );
  }
}

export default graphql(user, {
  options: {
    variables: {
      id: Cookie.get("_id")
    },
    awaitRefetchQueries: () => {}
  },
  skip: () => {}
})(App);
