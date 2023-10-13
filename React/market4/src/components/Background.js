import React, { useState, useEffect } from 'react';
import '../styles/Background.css';
import image1 from '../assets/image4.png';
import image2 from '../assets/image5.png';
import image3 from '../assets/image6.png';

const images = [image1, image2, image3];

function Background() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const backgroundImage = images[currentImageIndex];

  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Contenu de la page */}
    </div>
  );
}

export default Background;
