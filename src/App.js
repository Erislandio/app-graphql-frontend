import React from "react";
import Header from "./components/header/Header";
import { Route } from "react-router-dom";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dash";
import Cookie from "js-cookie";
import { graphql } from "react-apollo";
import { user } from "./queries/user";
import CircularProgress from "@material-ui/core/CircularProgress";
import Departament from "./components/departament/Departament";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Container from "@material-ui/core/Container";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      loading: true,
      path: ""
    };
  }

  componentDidMount() {
    if (Cookie.get("_id")) {
      this.setState({ id: Cookie.get("_id"), loading: false });
    }

    const path = window.location.href.split("/")

    this.setState({ path });
  }

  render() {
    const { path } = this.state;
    const {
      data: { user, loading }
    } = this.props;

    if (loading) {
      return <CircularProgress />;
    }

    return (
      <div className="App">
        <Header user={user} />
        <Route component={Login} path="/login" />
        <Container>
          <Route
            render={props => <Dashboard user={user} isAuthed={true} />}
            path="/console"
          />
          <Route component={Departament} path="/departament" />
        </Container>
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
  skip: () => {
    return Cookie.get("_id") ? false : true;
  }
})(App);
