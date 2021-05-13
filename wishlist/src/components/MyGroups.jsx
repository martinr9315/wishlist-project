import React from "react";
import { Link, withRouter } from "react-router-dom";

function MyGroups() {
  return (
    <div className="mygroups">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">My Groups</h1>
            <p>
              Implement viewing all my groups here.
            </p>
            <Link class="nav-link" to="/groupview">
                  Group View
            </Link>
            <div></div>
            <Link class="nav-link" to="/creategroup">
                   Create Group
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MyGroups);




