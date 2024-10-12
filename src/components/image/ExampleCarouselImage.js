import React from 'react';
import PropTypes from 'prop-types';

const ExampleCarouselImage = ({ text ,imageUrl}) => {
  // Placeholder image URL or replace it with real images

  return (
    <div className="butter-carousel-image" style={styles.imageContainer}>
      <img
        className="d-block w-100"
        src={imageUrl}
        alt={text}
        style={styles.image}
      />
    </div>
  );
};

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

// Styling for the butter design
const styles = {
  imageContainer: {
 // Smooth rounded corners
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Soft shadow for the butter effect
    backgroundColor: '#fdf5e6', // Light creamy background color (butter)
  },
  image: {
    objectFit: 'cover',
    height: '400px',
    borderRadius: '0px', // Keep the rounded corners for the image itself
  },
  textOverlay: {
    position: 'absolute',
    bottom: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
    borderRadius: '10px',
    padding: '10px 20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)', // Slight shadow for text overlay
  },
  text: {
    color: '#5e4635', // Dark brown text color to complement the butter design
    fontSize: '1.2rem',
    fontWeight: '600',
    margin: 0,
  },
};

export default ExampleCarouselImage;