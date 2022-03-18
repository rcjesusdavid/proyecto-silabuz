import React from "react";
import ChangePassCompanyForm from "./shared/ChangePassCompanyForm";
import HeaderDashboard from "./shared/HeaderDashboard";
import SidebarCompany from "./shared/SidebarCompany";

const ChangePassCompany = () => {
  return (
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
        <ChangePassCompanyForm></ChangePassCompanyForm>
      </div>
    </div>
  );
};

export default ChangePassCompany;
