import React from "react";
import { Outlet } from "react-router-dom";
import HeaderDashboard from "./shared/HeaderDashboard";
import HomeDashboardCompany from "./shared/HomeDashboardCompany";
import SidebarCompany from "./shared/SidebarCompany";

const DashCompany = () => {
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
        <SidebarCompany></SidebarCompany>

        <div className="dashboard-content">
          <HeaderDashboard></HeaderDashboard>
          <HomeDashboardCompany></HomeDashboardCompany>
        </div>
      </div>
    </>
  );
};

export default DashCompany;
