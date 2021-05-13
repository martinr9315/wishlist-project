import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Wishlist
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/mygroups" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/mygroups">
                  My Groups
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/creategroup" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/creategroup">
                  Create Group
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/groupview" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/groupview">
                  Group View
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/mylist" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/mylist">
                  My List
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/otherlist" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/otherlist">
                  Other List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);