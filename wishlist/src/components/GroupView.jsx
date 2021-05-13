import React from "react";
import { Link, withRouter } from "react-router-dom";

function GroupView() {
  return (
    <div className="groupview">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Group View</h1>
            <p>
              Implement viewing all groups here.
            </p>
          </div>
          <Link class="nav-link" to="/mylist">
                  My List
            </Link>
            <div></div>
            <Link class="nav-link" to="/otherlist">
                   Other List
            </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(GroupView);