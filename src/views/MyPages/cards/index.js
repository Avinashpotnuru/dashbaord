import {
  // useGetProductDataQuery,
  useAddUserDataMutation,
} from "../../../redux/api/restApis";
import CardItem from "./cardItem";

import { useState } from "react";

import { Col, Row } from "reactstrap";

const index = () => {
  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  // const [sendData] = useAddUserDataMutation();

  const eventHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const postData = (e) => {
    e.preventDefault();

    const data = { title: title, body: body };

    // console.log(data);

    sendData(data);
  };

  return (
    <>
      <form onSubmit={postData}>
        title:
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="enter title"
        />
        body:
        <input
          value={body}
          placeholder="enter body"
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">add user</button>
      </form>
      <div className="col-12 overflow-auto">
        <Row>
          <Col className="">
            <CardItem />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default index;
