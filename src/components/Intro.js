import React, { Component } from "react";
import myPic1 from "./myPic1.jpg"
import myPic2 from "./myPic2.jpg"
import myPic3 from "./myPic3.jpg"

export class Intro extends Component {
  render() {
    return (
      <div>
        {/* // <div className="intro" style={{height:"300px", width:"100%", backgroundColor:"grey"}}> */}
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
          // data-wrap="tru e"
          data-interval="20"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner" style={{zIndex:"-1"}}>
            <div class="carousel-item active">
              <img src={myPic3} class="d-block w-100" style={{height:"600px"}} alt="..." />
            </div>
            <div class="carousel-item">
              <img src={myPic2} class="d-block w-100" style={{height:"600px"}} alt="..." />
            </div>
            <div class="carousel-item">
              <img src={myPic1} class="d-block w-100" style={{height:"600px"}} alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Intro;
