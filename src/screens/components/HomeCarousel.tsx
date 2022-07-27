import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomeCarousel = ({ autoPlay = false }: { autoPlay?: boolean }) => {
  return (
    <Carousel autoPlay={autoPlay} infiniteLoop>
      <div>
        <img
          alt="carousel-slide1"
          src={require("../../resources/banner.jpg")}
        />
      </div>
      <div>
        <img
          alt="carousel-slide2"
          src={require("../../resources/slide1.png")}
        />
      </div>
      <div>
        <img
          alt="carousel-slide3"
          src={require("../../resources/slide2.png")}
        />
      </div>
      <div>
        <img
          alt="carousel-slide4"
          src={require("../../resources/slide3.png")}
        />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
