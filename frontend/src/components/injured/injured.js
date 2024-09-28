import React, { useState } from 'react';
import './injured.css'; // Importing CSS file

const Injured = () => {
  const [animalInfo, setAnimalInfo] = useState({
    species: '',
    breed: '',
    color: '',
    size: '',
    weight: '',
    age: '',
  });

  const [images, setImages] = useState([]); // State to store images

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnimalInfo({ ...animalInfo, [name]: value });
  };

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files); // Convert FileList to Array
    setImages((prevImages) => [...prevImages, ...uploadedImages].slice(0, 8)); // Limit to 8 images (leaving space for the plus button)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Animal Info:', animalInfo);
    console.log('Uploaded Images:', images);
  };

  const handleAnalyze = () => {
    // Placeholder for the "Analyze" button functionality
    console.log('Analyzing images...');
  };

  return (
    <div className="injured-container">
      <div className="upload-section">
        <div className="image-grid">
          <div className="image-item">
            <label htmlFor="imageUpload" className="add-button">
              +
            </label>
            <input
              id="imageUpload"
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }} // Hide default file input
            />
          </div>
          {images.map((image, index) => (
            <div className="image-item" key={index}>
              <img
                src={URL.createObjectURL(image)} // Create preview URL for each image
                alt="Uploaded Preview"
                className="image-preview"
              />
            </div>
          ))}
        </div>
        <button className="analyze-button" onClick={handleAnalyze}>
          Analyze
        </button>
        <p className="image-text">images/videos</p>
      </div>

      <form className="info-section" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>species</label>
          <input
            type="text"
            name="species"
            value={animalInfo.species}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>breed</label>
          <input
            type="text"
            name="breed"
            value={animalInfo.breed}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>color</label>
          <input
            type="text"
            name="color"
            value={animalInfo.color}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>size</label>
          <input
            type="text"
            name="size"
            value={animalInfo.size}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>weight</label>
          <input
            type="text"
            name="weight"
            value={animalInfo.weight}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>age</label>
          <input
            type="text"
            name="age"
            value={animalInfo.age}
            onChange={handleInputChange}
          />
        </div>
        <button className="submit-button" type="submit">
          &#x25B6;&#x25B6;&#x25B6;
        </button>
      </form>
    </div>
  );
};

export default Injured;
