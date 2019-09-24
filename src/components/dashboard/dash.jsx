import React from "react";
import { Route } from "react-router-dom";
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

const Dashboard = (props) => {

  return (
    <div>
      <Breadcrumb />
      <Route />
    </div>
  )
};

export default Dashboard;
