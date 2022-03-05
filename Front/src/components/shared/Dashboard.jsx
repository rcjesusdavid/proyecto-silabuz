import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SidebarEmployer from "./SidebarEmployer";

const Dashboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="dashboard-wrap bg-light">
        <a
          className="mobNavigation"
          data-toggle="collapse"
          href="#MobNav"
          role="button"
          aria-expanded="false"
          aria-controls="MobNav"
        >
          <i className="fas fa-bars mr-2"></i>Area de trabajo
        </a>
        <SidebarEmployer></SidebarEmployer>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Dashboard;
