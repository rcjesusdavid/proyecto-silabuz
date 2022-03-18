import React from "react";
import SidebarPostulant from "./shared/SidebarPostulant";
import HeaderDashboard from "./shared/HeaderDashboard";
import AppliedWorkOffers from "./shared/AppliedWorkOffers";

const AppliedWorkOffersPostulant = () => {
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
          <AppliedWorkOffers></AppliedWorkOffers>
        </div>
      </div>
    </>
  );
};

export default AppliedWorkOffersPostulant;
