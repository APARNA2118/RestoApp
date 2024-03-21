import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
function HomeCarousel() {
  return (
    <Carousel >
      <Carousel.Item interval={1000} style={{width:'100%', height:'100vh'}}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710892800&semt=sph"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{width:'100vw', height:'100vh'}}>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width:'100vw', height:'100vh'}}>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/background/20230512/original/pngtree-japanese-food-in-a-table-with-other-dinner-items-on-it-picture-image_2503404.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;