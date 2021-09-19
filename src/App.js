import React from "react";
import "./sass/main.scss";
import AliceCarousel from "react-alice-carousel";

const items = [
  <img src="img1.jpg" alt="" className="imgg" />,
  <img src="img2.jpg" alt="" className="imgg" />,
  <img src="img3.jpg" alt="" className="imgg" />,
  <img src="img4.jpg" alt="" className="imgg" />,
];
const App = () => {
  return (
    <div className="carousel_wrapper">
      <AliceCarousel
        items={items}
        animationType="fadeout"
        animationDuration={800}
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoHeight
        autoWidth
        autoPlay
        stopAutoPlayOnHover
        // disableButtonsControls
        disableDotsControls
        mouseTracking
        infinite
        //this respomsive can be achieve by css
        responsive={{
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
        }}
        controlsStrategy="responsive"
      />{" "}
    </div>
  );
};

export default App;
