import React, { useState } from 'react';
import './pitch.css';
import Slider from 'react-slick'; // Horizontal sliding effect
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../header&footer/header.js';

const PitchDeck = () => {
  const [slides, setSlides] = useState([
    { image: 'https://via.placeholder.com/400', text: 'Edit slide text etc etc', speech: 'What to say during this slide' },
    { image: 'https://via.placeholder.com/400', text: 'Edit slide text etc etc', speech: 'What to say during this slide' },
    { image: 'https://via.placeholder.com/400', text: 'Edit slide text etc etc', speech: 'What to say during this slide' },
    { image: 'https://via.placeholder.com/400', text: 'Edit slide text etc etc', speech: 'What to say during this slide' },
    { image: 'https://via.placeholder.com/400', text: 'Edit slide text etc etc', speech: 'What to say during this slide' }
  ]);

  const handleTextChange = (index, event) => {
    const newSlides = [...slides];
    newSlides[index][event.target.name] = event.target.value;
    setSlides(newSlides);
  };

  const handleAIEdit = (index) => {
    alert('AI is editing the image');
  };

  const handleExportPPTX = () => {
    alert('Exporting to PPTX...');
  };

  const handleExportPDF = () => {
    alert('Exporting to PDF...');
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Shows two slides at a time
    slidesToScroll: 1,
    centerPadding: '0px', // Eliminates padding between the slides
  };

  return (
    <div>
      <Header />
      <div className="pitch-deck">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              {/* Slide number */}
              <div className="slide-number">Slide {index + 1}</div>
              
              {/* Slide image */}
              <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />

              {/* Slide text */}
              <textarea
                name="text"
                value={slide.text}
                onChange={(e) => handleTextChange(index, e)}
                className="slide-text"
                placeholder="Edit slide text"
              />

              {/* AI Edit button */}
              <button className="ai-edit-button" onClick={() => handleAIEdit(index)}>
                Edit Slide with AI
              </button>

              {/* Slide speech */}
              <textarea
                name="speech"
                value={slide.speech}
                onChange={(e) => handleTextChange(index, e)}
                className="slide-speech"
                placeholder="What to say during this slide"
              />

              <button className="ai-suggest-button" onClick={() => handleAIEdit(index)}>
                Make Suggestions to the AI
              </button>
            </div>
          ))}
        </Slider>

        <div className="export-buttons">
          <button onClick={handleExportPPTX}>Convert to PPTX</button>
          <button onClick={handleExportPDF}>Convert to PDF</button>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
