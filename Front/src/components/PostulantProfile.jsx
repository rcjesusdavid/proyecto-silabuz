import React from "react";
import SidebarPostulant from "./shared/SidebarPostulant";
import HeaderDashboard from "./shared/HeaderDashboard";
import PostulantProfileContent from "./shared/PostulantProfileContent";

const PostulantProfile = () => {
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
          <PostulantProfileContent></PostulantProfileContent>
        </div>
      </div>
    </>
  );
};

export default PostulantProfile;
