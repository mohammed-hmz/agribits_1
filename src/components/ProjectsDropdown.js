import React, { useState } from 'react';
import styles from '../styles/ProjectsDropdown.module.css';

const ProjectsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownBtn}>
        Projects
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <a href="#chicken">Chicken</a>
          <a href="#beef">Beef</a>
          <a href="#lamb">Lamb</a>
        </div>
      )}
    </div>
  );
};

export default ProjectsDropdown;
