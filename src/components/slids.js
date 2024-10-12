import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './image/ExampleCarouselImage';

function IndividualIntervalsExample() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 50px rgba(0, 0, 0, 0.2)', // Add shadow effect
      borderRadius: '10px', // Optional: add rounded corners
      overflow: 'hidden', // Prevent overflow of the carousel
    }}>
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="First slide" imageUrl={"../../images/Screenshot 2024-10-11 171122.png"} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} imageUrl={"../../images/Screenshot 2024-10-11 171122.png"}>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item imageUrl={"../../images/Screenshot 2024-10-11 171122.png"}>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;