import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideDrawer from "./WebPages/LecturerPortal/Drawer/SideDrawer";
import Backdrop from "./WebPages/LecturerPortal/Drawer/Backdrop";
import LecHeader from "./shared/LecHeader";
import LecturerOverview from "./WebPages/LecturerPortal/LecturerOverview";

const Test = (props) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const handleDrawerToggleClick = () => {
    setSideDrawerOpen((prevDrawerState) => !prevDrawerState);
  };

  const handleBackdropClick = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={handleBackdropClick} />;
  }

  return (
    <>
      <div style={{ height: "100%" }}>
        <LecHeader handleDrawerToggleClick={handleDrawerToggleClick} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
        
      </div>
    </>
  );
};

export default Test;
