
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import PerfectScrollbar from "perfect-scrollbar";


import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import {
  BackgroundColorContext,
  backgroundColors,
} from "contexts/BackgroundColorContext";

var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebarRef = React.useRef(null);
 const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarRef.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  const linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
  const { routes, rtlActive, logo } = props;
  let logoImg = null;
  let logoText = null;
  if (logo !== undefined) {
    if (logo.outterLink !== undefined) {
      logoImg = (
        <a
          href={logo.outterLink}
          className="simple-text logo-mini"
          target="_blank"
          onClick={props.toggleSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </a>
      );
      logoText = (
        <a
          href={logo.outterLink}
          className="simple-text logo-normal"
          target="_blank"
          onClick={props.toggleSidebar}
        >
          {logo.text}
        </a>
      );
    } else {
      logoImg = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-mini"
          onClick={props.toggleSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </Link>
      );
      logoText = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-normal"
          onClick={props.toggleSidebar}
        >
          {logo.text}
        </Link>
      );
    }
  }
  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="sidebar" data={color}>
          <div className="sidebar-wrapper" ref={sidebarRef}>
            
            <Nav>
              {routes.map((prop, key) => {
                if (prop.redirect) return null;
                return (
                  <li
                    className={
                      activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      onClick={props.toggleSidebar}
                    >
                      <i className={prop.icon} />
                      <p>{ prop.name}</p>
                    </NavLink>
                  </li>
                );
              })}
              
            </Nav>
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  );
}



export default Sidebar;
