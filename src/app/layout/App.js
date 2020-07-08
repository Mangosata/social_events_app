import React, { Component, Fragment } from "react";
import EventDashBoard from "../../features/event/EventDashboard/EventDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar/NavBar";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import EventForm from "../../features/event/EventForm/EventForm.jsx";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Route path="/events" component={EventDashBoard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
