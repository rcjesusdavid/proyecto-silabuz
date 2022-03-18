import React from "react";
import SidebarCompany from "./shared/SidebarCompany";
import HeaderDashboard from "./shared/HeaderDashboard";
import PostWorkOfferContent from "./shared/PostWorkOfferContent";

const PostWorkOffer = () => {
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
          <PostWorkOfferContent></PostWorkOfferContent>
        </div>
      </div>
    </>
  );
};

export default PostWorkOffer;
