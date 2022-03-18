import React from "react";
import { Link } from "react-router-dom";
import HomeDashboardPostulant from "./shared/HomeDashboardPostulant";
import HeaderDashboard from "./shared/HeaderDashboard";
import SidebarPostulant from "./shared/SidebarPostulant";

const DashPostulant = () => {
  return (
    <>
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
        <SidebarPostulant></SidebarPostulant>

        <div className="dashboard-content">
          <HeaderDashboard></HeaderDashboard>
          <HomeDashboardPostulant></HomeDashboardPostulant>
        </div>
      </div>
    </>
  );
};

export default DashPostulant;
