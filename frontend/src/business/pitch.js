import React, { useState } from 'react';
import './pitch.css';
import Slider from 'react-slick'; // Horizontal sliding effect
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import PptxGenJS from 'pptxgenjs'; // For PPTX export
// import jsPDF from 'jspdf'; // For PDF export

const PitchDeck = () => {
  const [slides, setSlides] = useState([
    { image: 'https://via.placeholder.com/400', text: 'Edit slide text etc etc', speech: 'What to say during this slide' },
    { image: 'https://via.placeholder.com/400', text: 'Edit slide text etc etc', speech: 'What to say during this slide' },
    { image: 'https://via.placeholder.com/400', text: 'Edit slide text etc etc', speech: 'What to say during this slide' },
    { image: 'https://via.placeholder.com/400', text: 'Edit slide text etc etc', speech: 'What to say during this slide' },
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
    // Placeholder for AI image edit logic
    alert('AI is editing the image');
  };

  // Function to convert to PPTX
  const handleExportPPTX = () => {
    // const pptx = new PptxGenJS();
    // slides.forEach((slide, index) => {
    //   let slideObj = pptx.addSlide();
    //   slideObj.addImage({ path: slide.image, x: 0.5, y: 0.5, w: 8, h: 4.5 });
    //   slideObj.addText(slide.text, { x: 1, y: 5, fontSize: 18, color: '363636' });
    //   slideObj.addText(slide.speech, { x: 1, y: 5.5, fontSize: 14, color: '808080' });
    // });
    // pptx.writeFile('PitchDeck.pptx');
  };

  // Function to convert to PDF
  const handleExportPDF = () => {
    // const doc = new jsPDF();
    // slides.forEach((slide, index) => {
    //   doc.addImage(slide.image, 'JPEG', 15, 40, 180, 160);
    //   doc.text(slide.text, 20, 220);
    //   doc.text(slide.speech, 20, 240);
    //   if (index < slides.length - 1) doc.addPage();
    // });
    // doc.save('PitchDeck.pdf');
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2, // Shows two slides at a time
    slidesToScroll: 1
  };

  return (
    <div className="pitch-deck">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
            <textarea
              name="text"
              value={slide.text}
              onChange={(e) => handleTextChange(index, e)}
              className="slide-text"
              placeholder="Edit slide text etc etc"
            />
            <button className="ai-edit-button" onClick={() => handleAIEdit(index)}>
              Edit Slide with AI
            </button>
            <textarea
              name="speech"
              value={slide.speech}
              onChange={(e) => handleTextChange(index, e)}
              className="slide-speech"
              placeholder="What to say during this slide"
            />
            <button className="ai-edit-button" onClick={() => handleAIEdit(index)}>
              Edit Pitch with AI
            </button>

          </div>
        ))}
      </Slider>

      <div className="export-buttons">
        <button onClick={handleExportPPTX}>Convert to PPTX</button>
        <button onClick={handleExportPDF}>Convert to PDF</button>
      </div>
    </div>
  );
};

export default PitchDeck;
