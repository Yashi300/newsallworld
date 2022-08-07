import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  //  changeFunc(event) {
  //   // console.log(event.target.value);
  //   this.props.countryChange(event.target.value);
  //  }

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark "
          style={{ background: "black", borderBottom: "1px solid #fff" }}
        >
          <div className="container-fluid">
            <Link style={{ fontFamily: "ariea", fontSize: "30px",fontWeight: "bold",}} className="navbar-brand" to="/">
              NewsBooster
            </Link>
            <button className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{
                  fontFamily: " 'Moon Dance', cursive",
                  fontSize: "27px",
                }}
              >
                <li
                  style={{ padding: "11px 3px", fontSize: "18px" }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li
                  style={{ padding: "11px 3px", fontSize: "18px" }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li
                  style={{ padding: "11px 3px", fontSize: "18px" }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li
                  style={{ padding: "11px 3px", fontSize: "18px" }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li
                  style={{ padding: "11px 3px", fontSize: "18px" }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li
                  style={{ padding: "11px 3px", fontSize: "18px" }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li
                  style={{ padding: "11px 3px", fontSize: "18px" }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                <li
                  style={{ padding: "11px 11px 11px 0px", fontSize: "18px" }}
                  className="nav-item"
                >
                  <label htmlFor="selectBox">country:</label>
                </li>
                <li style={{ padding: "24px 0", fontSize: "18px" }}>
                  <select
                    style={{ borderRadius: "5px" }}
                    name="country"
                    id="selectBox"
                    onChange={(event) =>
                      this.props.countryChange(event.target.value)
                    }
                  >
                    <option value="in">india</option>
                    <option value="us">USA</option>
                    <option value="au">Australia</option>
                    <option value="sg">Singapore</option>
                    <option value="gb">United Kingdom</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
