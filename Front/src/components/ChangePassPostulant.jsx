import React from "react";
import ChangePassPostulantForm from "./shared/ChangePassPostulantForm";
import HeaderDashboard from "./shared/HeaderDashboard";
import SidebarPostulant from "./shared/SidebarPostulant";

const ChangePassPostulant = () => {
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
          <ChangePassPostulantForm></ChangePassPostulantForm>
        </div>
      </div>
    </>
  );
};

export default ChangePassPostulant;
