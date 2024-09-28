import React, { useState } from 'react';

function Lost() {
  const [photo, setPhoto] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(file);
      console.log('File stored in photo:', file.name);
    }
  };

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      
      <div>
        <h2>File Uploader</h2>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        {photo && (
          <p>Selected file: {photo.name}</p>
        )}
      </div>
    </div>
  );
}

export default Lost;