import React from "react";
import SidebarCompany from "./shared/SidebarCompany";
import HeaderDashboard from "./shared/HeaderDashboard";
import ManageWorksOfferContent from "./shared/ManageWorksOfferContent";

const ManageWorkOffers = () => {
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
          <ManageWorksOfferContent></ManageWorksOfferContent>
        </div>
      </div>
    </>
  );
};

export default ManageWorkOffers;
