import React, { Component } from "react";

export class footer extends Component {
  render() {
    return (
      <div style={{marginTop:"88px"}}>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-col">
                <h4>organization</h4>
                <ul>
                  <li><a href="/ ">about us</a></li>
                  <li><a href="/ ">our partners</a></li>
                  <li><a href="/ ">privacy policy</a></li>
                  <li><a href="/ ">affiliate program</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>get help</h4>
                <ul>
                  <li><a href="/ ">FAQ</a></li>
                  <li><a href="/ ">news verification</a></li>
                  <li><a href="/ ">press hiring</a></li>
                  <li><a href="/ ">personal interaction</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>online news</h4>
                <ul>
                  <li><a href="/ ">entertainment</a></li>
                  <li><a href="/ ">technology</a></li>
                  <li><a href="/ ">science</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>follow us</h4>
                <ul>
                  <li><a href="/ "><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="/ "><i class="fab fa-twitter"></i></a></li>
                  <li><a href="/ "><i class="fab fa-instagram"></i></a></li>
                  <li><a href="/ "><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

        </footer>
      </div>
    );
  }
}

export default footer;
