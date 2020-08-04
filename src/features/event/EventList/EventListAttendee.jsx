import React, { Component, Fragment } from "react";
import { List, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class EventListAttendee extends Component {
  render() {
    const { attendee } = this.props;
    return (
      <Fragment>
        <List.Item>
          <Image
            as={Link}
            to={`/profile/${attendee.id}`}
            size="mini"
            circular
            src={attendee.photoURL}
          />
        </List.Item>
      </Fragment>
    );
  }
}

export default EventListAttendee;
