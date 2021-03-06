import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios(
      `https://evening-river-57363.herokuapp.com/myorders/${user.email}`
    ).then((res) => setMyOrders(res.data));
  }, [user]);

  const deletHandler = (id) => {
    const proceed = window.confirm("Are you sure, you want to cancel?");
    if (proceed) {
      const url = `https://evening-river-57363.herokuapp.com/orders/${id}`;
      axios.delete(url).then((res) => {
        if (res.data.deletedCount > 0) {
          alert("Booking canceled successfully");
          const restOrders = myOrders.filter((order) => order._id !== id);
          setMyOrders(restOrders);
        }
      });
    }
  };
  return (
    <div>
      <h3>All your orders:{myOrders.length}</h3>
      <Row>
        {myOrders.map((order) => (
          <Col lg={6} key={order._id}>
            <div>
              <div className="d-flex p-2 shadow rounded-3 mx-lg-4 mt-4">
                <img
                  src={order.image}
                  className=" img-fluid w-25 me-3 rounded-3"
                  alt=""
                />
                <div>
                  <h4>{order.productname}</h4>
                  <h5>{order.date}</h5>
                  <h6>Status: {order.status}</h6>
                  <button
                    onClick={() => deletHandler(order._id)}
                    className="btn btn-outline-danger mt-3"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyOrder;
