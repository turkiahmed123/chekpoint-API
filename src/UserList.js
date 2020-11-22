import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function UserList({ data }) {
  return data.map((el) => (
    <Card
      key={el.id}
      style={{
        width: "18rem",
        margin: "2%",
        textAlign: "center",
      }}
    >
      <Card.Header>Name: {el.name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Email: {el.email}</ListGroup.Item>
        <ListGroup.Item>
          Address:{" "}
          {el.address.street + " " + el.address.suite + " " + el.address.city}
        </ListGroup.Item>
        <ListGroup.Item>Phone: {el.phone}</ListGroup.Item>
        <ListGroup.Item>
          Company: {el.company.name + " " + el.company.catchPhrase}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  ));
}

export default UserList;
