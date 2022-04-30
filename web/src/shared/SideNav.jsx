import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"
import "react-bootstrap";
import { useHistory } from "react-router";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import { NavLink } from "react-router-dom";

const SideNav = () => {
  const url = useLocation();
  const history = useHistory();
  useEffect(() => {

    if (url.pathname === '/lecOverview' || url.pathname === '/lecCourses' || url.pathname === '/lecProfile' || url.pathname === '/lecChat') {
      var notShow = document.getElementById('noShow');
      notShow.style.display = 'none';
    } else {
      var notShow2 = document.getElementById('noShow2');
      notShow2.style.display = 'none';
    }
  }, [url])

  const logOut = () => {
    document.cookie = `uid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    history.push("/");
  }

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#2CDCD9" backgroundColor="#fff">
        <CDBSidebarHeader
          style={{ color: "#000", marginLeft: ".2rem" }}
          prefix={<i className="fa fa-bars fa-large"></i>}
        >
          <a
            href="/lecOverview"
            className="text-decoration-none lato-700"
            style={{ color: "#000" }}
          >
            StudyItLive
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content" id='noShow'>
          <CDBSidebarMenu>
            <NavLink exact to="/lecOverview" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "#35353580", marginLeft: ".6rem" }} icon="home">
                Overview
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/lecMaterial" activeClassName="activeClicked" >
              <CDBSidebarMenuItem style={{ color: "#35353580" }} icon="file">
                Materials
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/lecVideos" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "#35353580" }} icon="play">
                Videos
              </CDBSidebarMenuItem>
              <NavLink exact to="/lecDiscussion" activeClassName="activeClicked">
                <CDBSidebarMenuItem style={{ color: "#35353580" }} icon="comment">
                  Discussion
                </CDBSidebarMenuItem>
              </NavLink>
            </NavLink>
            <NavLink exact to="/lecLiveClass" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "#35353580" }} icon="video">
                Live Class
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/lecSchedule" activeClassName="activeClicked">
              <CDBSidebarMenuItem
                style={{ color: "#35353580" }}
                icon="calendar"
              >
                Schedule
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/lecStudents" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "#35353580" }} icon="user">
                Students
              </CDBSidebarMenuItem>
            </NavLink>

            <hr style={{ color: "#000" }} />
            <NavLink exact to="lecHelp">
              <CDBSidebarMenuItem style={{ color: "#35353580" }} icon="exclamation-circle">
                Help
              </CDBSidebarMenuItem>
            </NavLink>
            <CDBSidebarMenuItem style={{ color: "#35353580" }} icon="sign-out-alt" onClick={logOut}>
              Logout
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarContent className="sidebar-content" id='noShow2'>
          <CDBSidebarMenu>
            <NavLink exact to="/lecOverview" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "#35353580" }} icon="home">
                Overview
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/lecCourses" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "#35353580" }} icon="file" >
                Courses
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/lecChat" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "#35353580" }} icon="comment">
                Chat
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/lecSchedule" activeClassName="activeClicked">
              <CDBSidebarMenuItem
                style={{ color: "#35353580" }}
                icon="calendar"
              >
                Schedule
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="lecProfile" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "#35353580" }} icon="user" >
                Profile
              </CDBSidebarMenuItem>
            </NavLink>
            <hr style={{ color: "#000" }} />
            <NavLink exact to="lecHelp">
              <CDBSidebarMenuItem style={{ color: "#35353580" }} icon="exclamation-circle">
                Help
              </CDBSidebarMenuItem>
            </NavLink>
            <CDBSidebarMenuItem style={{ color: "#35353580" }} icon="sign-out-alt" onClick={logOut}>
              Logout
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default SideNav;
