import React, { useEffect, useState } from 'react';
import './shelters.css';

const Shelters = () => {
  const [shelters] = useState([
    {
      id: 1,
      name: 'Olathe Animal Shelter',
      address: '505 E Sunvale Dr, Olathe, KS 66061',
      coordinates: { lat: 38.8833, lng: -94.8183 },
      img: 'https://via.placeholder.com/150', // Placeholder for shelter image
    },
    {
      id: 2,
      name: 'Broxton Animal Rescue',
      address: '115 S Parker St, Olathe, KS 66061',
      coordinates: { lat: 38.8795, lng: -94.8152 },
      img: 'https://via.placeholder.com/150',
    },
    // Add more shelters as needed
  ]);

  useEffect(() => {
    // Initialize the map when component mounts
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 38.8833, lng: -94.8183 }, // Initial map center
      zoom: 13,
    });

    // Add markers for each shelter
    shelters.forEach((shelter) => {
      new window.google.maps.Marker({
        position: shelter.coordinates,
        map: map,
        title: shelter.name,
      });
    });
  }, [shelters]);

  const handleSelect = (id) => {
    console.log('Selected shelter ID:', id);
  };

  return (
    <div className="shelters-container">
      <h1>Pick a Shelter/Vet Near You</h1>

      <div className="shelters-map">
        {/* Google Map */}
        <div id="map"></div>

        {/* Shelter Info Section */}
        <div className="shelter-info">
          {shelters.map((shelter) => (
            <div key={shelter.id} className="shelter-card">
              <img src={shelter.img} alt={shelter.name} />
              <div className="shelter-details">
                <h3>{shelter.name}</h3>
                <p>{shelter.address}</p>
                <button onClick={() => handleSelect(shelter.id)}>Select</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit button */}
      <button className="submit-button">&#x25B6;&#x25B6;&#x25B6;</button>
    </div>
  );
};

export default Shelters;
