import React from "react";
import Slider from "react-slick";
import diegoReview from "./diegoReview1.svg";
import jonReview from "./jonReview.svg";
import mattReview from "./mattReview.svg"
import chenReview from "./chenReview.svg";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div className="slider" style={{width:"auto"}}>
      <Slider {...settings}>
        <div>
          <img src={mattReview}/>
        </div>
        <div>
          <img src={diegoReview}/>
        </div>
        <div>
          <img src={jonReview}/>
        </div>
        <div>
         <img src={chenReview}/>
        </div>
      </Slider>
      </div>
    );
  }
}

export default SimpleSlider;