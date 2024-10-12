import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExampleCarouselImage from './image/ExampleCarouselImage';
import FeedbackForm from './FeedbackForm';
const Farming = ({lan,mode}) => {
  return (
    <div style={{ ...styles.container,  backgroundColor: mode === "Light" ?  "#f8f9fa":"#3C3D37"  }}>

      {/* Big image with text on the left */}
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroText}>Welcome to Our Company</h1>
          <button style={styles.moreButton}>More</button>
        </div>
      </div>

      {/* Centered and smaller carousel */}
      <div style={styles.carouselContainer}>
        <Carousel>
          <Carousel.Item interval={3000}>
            <ExampleCarouselImage
              text="First slide"
              imageUrl="../../images/Screenshot 2024-10-11 171122.png"
            />
            <Carousel.Caption>
              <h3>First Slide Label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <ExampleCarouselImage
              text="Second slide"
              imageUrl="../../images/Screenshot 2024-10-11 172341.png"
            />
            <Carousel.Caption>
              <h3>Second Slide Label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <ExampleCarouselImage
              text="Third slide"
              imageUrl="../../images/Screenshot 2024-10-11 172543.png"
            />
            <Carousel.Caption>
              <h3>Third Slide Label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* About section */}
      <div style={styles.aboutSection}>
        <h2>About Our Company</h2>
        <p>
          Our company is dedicated to providing the best services to our
          customers. We focus on quality, efficiency, and reliability to meet
          all your business needs.
        </p>
      </div>

<FeedbackForm mode={mode} lan={lan}/>
    </div>
  );
};

// Styles for the business component
const styles = {
  container: {
    textAlign: 'center',
    padding: '0px 10px 20px',
    paddingTop:"0px",
    fontFamily: 'Arial, sans-serif'
  },
  heroSection: {
    backgroundImage: 'url("../../images/image.png")', // Background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    height: '90vh', // Full viewport height
    display: 'flex',
    borderRadius: "0 0 15px 15px", 
    alignItems: 'center',
    padding: '0 20px',
    position: 'relative',
    marginBottom: '30px',
  },
  heroContent: {
    maxWidth: '600px',
    textAlign: 'left', // Align text to the left
  },
  heroText: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  moreButton: {
    backgroundColor: '#ffcc00',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  carouselContainer: {
    maxWidth: '60%',
    margin: '0 auto',
    boxShadow: '0 15px 15px rgba(0, 0, 0, 0.2)', // Add shadow for the carousel
    borderRadius: '15px',
    overflow: 'hidden',
  },
  aboutSection: {
    padding: '40px 20px',
    backgroundColor: '#f8f8f8',
    margin: '40px 0',
  },

};

export default Farming;
