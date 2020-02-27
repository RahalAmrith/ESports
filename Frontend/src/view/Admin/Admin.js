import React, { Component } from "react";

import "../assets/Admin/Admin.css";
import { Link, Route } from "react-router-dom";

class Admin extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="admin_main">
        <h1>World Esports Earnnings</h1>
        <h3>Admin Panel</h3>

        <hr />

        <div className="container row">
          <div className="col-12 col-lg-4 col-sm-6">
            <Link to="/admin/blog">
              <div className="admin_linkCard">
                <h1>Blog</h1>
              </div>
            </Link>
          </div>
          <div className="col-12 col-lg-4 col-sm-6">
            <Link to="/players/update">
              <div className="admin_linkCard">
                <h1>Update Players</h1>
              </div>
            </Link>
          </div>

          <div className="col-12 col-lg-4 col-sm-6">
            <Link to="/admin/blog">
              <div className="admin_linkCard">
                <h1>Pandascore</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
