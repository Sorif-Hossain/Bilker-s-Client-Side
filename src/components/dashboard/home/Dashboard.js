import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ManageOrder from "../admin/ManageOrder";
import ManageProduct from "../admin/ManageProduct";
import AddProduct from "../admin/AddProduct";
import AddReview from "../user/AddReview";
import MyOrder from "../user/MyOrder";
import Payment from "../user/Payment";
import MakeAdmin from "../admin/MakeAdmin";
import AdminRoute from "../../private/AdminRoute";
import useAuth from "../../../hooks/useAuth";

const textDecoration = {
  color: "Indigo",
  textDecoration: "none",
};
const Dashboard = () => {
  const { admin, logOut } = useAuth();
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Row>
        <Col lg={3} className="bg-warning">
          <ul className="dashboard-list">
            <Link to="/" style={textDecoration}>
              <li>HOME</li>
            </Link>
            <hr />
            <Link to={`${path}`} style={textDecoration}>
              <li>MY ORDER</li>
            </Link>
            <Link to={`${url}/addReview`} style={textDecoration}>
              <li>ADD REVIEW</li>
            </Link>
            <Link to={`${url}/payment`} style={textDecoration}>
              <li>PAYMENT</li>
            </Link>
            <hr />
            
              {admin && (
              <div>
                <Link to={`${url}/manageOrders`} style={textDecoration}>
                  <li>MANAGE ORDERS</li>
                </Link>
                <Link to={`${url}/manageProducts`} style={textDecoration}>
                  <li>MANAGE PRODUCTS</li>
                </Link>
                <Link to={`${url}/addProduct`} style={textDecoration}>
                  <li>ADD PRODUCT</li>
                </Link>
                <Link to={`${url}/makeAdmin`} style={textDecoration}>
                  <li>MAKE ADMIN</li>
                </Link>
                <hr />
              </div>
            )}
            
            <Button variant="danger" onClick={logOut}>
              LOGOUT
            </Button>
          </ul>
        </Col>
        <Col lg={9}>
          <Switch>
            <Route exact path={path}>
              <MyOrder />
            </Route>
            <Route path={`${path}/addReview`}>
              <AddReview />
            </Route>
            <Route path={`${path}/payment`}>
              <Payment />
            </Route>
            <AdminRoute path={`${path}/manageOrders`}>
              <ManageOrder />
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProduct />
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct />
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </AdminRoute>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
