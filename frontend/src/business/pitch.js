// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick'; // Horizontal sliding effect
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Header from '../header&footer/header.js';
// import './pitch.css';

// // Fetching startup data from local storage and sending to the backend API
// const fetchSlidesFromAPI = async (startupData) => {
//   try {
//     const response = await fetch('http://127.0.0.1:5000/makeSlides', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: startupData,
//     });

//     const data = await response.json();
//     return data.slides; // Return the slides data from the API
//   } catch (error) {
//     console.error('Error fetching slides:', error);
//     return [];
//   }
// };

// const PitchDeck = () => {
//   const [slides, setSlides] = useState([]); // State to store the slides data from the API

//   useEffect(() => {
//     // Fetch startup data from local storage
//     const startupData = localStorage.getItem('businessFormData'); // Adjust the key if needed
//     console.log('Startup Data:', startupData);

//     if (startupData) {
//       const getSlides = async () => {
//         const fetchedSlides = await fetchSlidesFromAPI(startupData);
//         console.log('Fetched Slides:', fetchedSlides);
//         setSlides(fetchedSlides); // Update state with slides from API
//       };

//       getSlides();
//     } else {
//       console.error('No startup data found in local storage');
//     }
//   }, []);

//   const handleTextChange = (index, event) => {
//     const newSlides = [...slides];
//     newSlides[index][event.target.name] = event.target.value;
//     setSlides(newSlides);
//   };

//   const handleAIEdit = (index) => {
//     alert('AI is editing the slide');
//   };

//   const handleExportPPTX = () => {
//     alert('Exporting to PPTX...');
//   };

//   const handleExportPDF = () => {
//     alert('Exporting to PDF...');
//   };

//   const sliderSettings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3, // Shows three slides at a time
//     slidesToScroll: 1,
//     centerPadding: '0px', // Eliminates padding between the slides
//   };

//   return (
//     <div>
//       <Header />
//       <div className="pitch-deck">
//         <Slider {...sliderSettings}>
//           {slides.length > 0 &&
//             slides.map((slide, index) => (
//               <div key={index} className="slide">
//                 {/* Slide number */}
//                 <div className="slide-number">Slide {index + 1}</div>

//                 {/* Slide image */}
//                 <img
//                   src={`http://${slide.img_keywords}`} // Assuming backend returns the correct image URL
//                   alt={`Slide ${index + 1}`}
//                   className="slide-image"
//                 />

//                 {/* Slide heading */}
//                 <h3>{slide.heading}</h3>

//                 {/* AI Edit button */}
//                 <button className="ai-edit-button" onClick={() => handleAIEdit(index)}>
//                   Edit Slide with AI
//                 </button>

//                 {/* Slide speech */}
//                 <textarea
//                   name="speech"
//                   value={slide.key_message}
//                   onChange={(e) => handleTextChange(index, e)}
//                   className="slide-speech"
//                   placeholder="What to say during this slide"
//                 />
//                    <button className="ai-edit-button" onClick={() => handleAIEdit(index)}>
//                   Make Suggestions to the AI 
//                 </button>
//               </div>
//             ))}
//         </Slider>

//         <div className="export-buttons">
//           <button onClick={handleExportPPTX}>Convert to PPTX</button>
//           <button onClick={handleExportPDF}>Convert to PDF</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PitchDeck;


import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // Horizontal sliding effect
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../header&footer/header.js';
import './pitch.css';

// Fetching startup data from local storage and sending to the backend API
const fetchSlidesFromAPI = async (startupData) => {
  try {
    const response = await fetch('http://127.0.0.1:5000/makeSlides', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: startupData,
    });

    const data = await response.json();
    return data.slides; // Return the slides data from the API
  } catch (error) {
    console.error('Error fetching slides:', error);
    return [];
  }
};

const PitchDeck = () => {
  const [slides, setSlides] = useState([]); // State to store the slides data from the API
  const [loading, setLoading] = useState(true); // Loading state to show placeholders

  useEffect(() => {
    // Fetch startup data from local storage
    const startupData = localStorage.getItem('businessFormData'); // Adjust the key if needed
    console.log('Startup Data:', startupData);

    if (startupData) {
      const getSlides = async () => {
        const fetchedSlides = await fetchSlidesFromAPI(startupData);
        setSlides(fetchedSlides); // Update state with slides from API
        setLoading(false); // Stop showing placeholders once data is fetched
      };

      getSlides();
    } else {
      console.error('No startup data found in local storage');
      setLoading(false); // Stop loading even if there's no data
    }
  }, []);

  const handleTextChange = (index, event) => {
    const newSlides = [...slides];
    newSlides[index][event.target.name] = event.target.value;
    setSlides(newSlides);
  };

  const handleAIEdit = (index) => {
    alert('AI is editing the slide');
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
    slidesToShow: 3, // Shows three slides at a time
    slidesToScroll: 1,
    centerPadding: '0px', // Eliminates padding between the slides
  };

  return (
    <div>
      <Header />
      <div className="pitch-deck">
        <Slider {...sliderSettings}>
          {loading ? (
            // Show placeholders when the API is still loading
            [1, 2, 3].map((placeholder, index) => (
              <div key={index} className="slide">
                <div className="slide-number">Slide {index + 1}</div>
                <img
                  src="https://via.placeholder.com/400x300.png?text=Awaiting+API+Response"
                  alt={`Placeholder ${index + 1}`}
                  className="slide-image"
                />
                <h3>Awaiting API Response</h3>
                <textarea
                  name="speech"
                  value="Awaiting API data..."
                  className="slide-speech"
                  disabled
                />
              </div>
            ))
          ) : (
            slides.length > 0 &&
            slides.map((slide, index) => (
              <div key={index} className="slide">
                {/* Slide number */}
                <div className="slide-number">Slide {index + 1}</div>

                {/* Slide image */}
                <img
                  src={`http://${slide.img_keywords}`} // Assuming backend returns the correct image URL
                  alt={`Slide ${index + 1}`}
                  className="slide-image"
                />

                {/* Slide heading */}
                <h3>{slide.heading}</h3>

                {/* AI Edit button */}
                <button className="ai-edit-button" onClick={() => handleAIEdit(index)}>
                  Edit Slide with AI
                </button>

                {/* Slide speech */}
                <textarea
                  name="speech"
                  value={slide.key_message}
                  onChange={(e) => handleTextChange(index, e)}
                  className="slide-speech"
                  placeholder="What to say during this slide"
                />
                    <button className="ai-edit-button" onClick={() => handleAIEdit(index)}>
                  Make Suggestions to the AI
                </button>
              </div>
            ))
          )}
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
