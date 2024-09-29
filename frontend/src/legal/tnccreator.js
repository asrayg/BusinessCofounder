// import React, { useState } from 'react';
// import './tnccreator.css';
// import Header from '../header&footer/header.js';

// const TCGenerator = () => {
//   // State to store user inputs
//   const [formData, setFormData] = useState({
//     companyName: '',
//     serviceDescription: '',
//     governingLaw: '',
//   });

//   const [generatedTC, setGeneratedTC] = useState('');

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Simulate API call to generate T&C (using dummy data for now)
//   const generateTC = () => {
//     const { companyName, serviceDescription, governingLaw } = formData;
//     const dummyTC = `
//       TERMS AND CONDITIONS

//       1. Introduction:
//       Welcome to ${companyName}. These terms and conditions outline the rules and regulations for the use of our services described as follows: ${serviceDescription}.

//       2. Acceptance of Terms:
//       By accessing and using our services, you accept these terms and conditions in full.

//       3. Governing Law:
//       These terms will be governed by and construed in accordance with the laws of ${governingLaw}, and you submit to the jurisdiction of the courts located in that state.

//       4. Modifications:
//       We reserve the right to revise these terms at any time, and such changes will be effective immediately upon posting.

//       5. Termination:
//       We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the terms.
//     `;
//     setGeneratedTC(dummyTC);
//   };

//   return (
//     <div>
//       <Header />
//     <div className="tc-generator-container">
//       {/* Input Form */}
//       <div className="tc-form">
//         <div className="form-group">
//           <label>Company Name:</label>
//           <input
//             type="text"
//             name="companyName"
//             value={formData.companyName}
//             onChange={handleChange}
//             placeholder="Enter your company name"
//           />
//         </div>

//         <div className="form-group">
//           <label>Service Description:</label>
//           <textarea
//             name="serviceDescription"
//             value={formData.serviceDescription}
//             onChange={handleChange}
//             placeholder="Describe your service"
//           />
//         </div>

//         <div className="form-group">
//           <label>Governing Law:</label>
//           <input
//             type="text"
//             name="governingLaw"
//             value={formData.governingLaw}
//             onChange={handleChange}
//             placeholder="Enter the governing law (e.g., California)"
//           />
//         </div>

//         <button onClick={generateTC} className="generate-tc-button">Generate T&C</button>
//       </div>

//       {/* Display Generated T&C */}
//       {generatedTC && (
//         <div className="tc-result">
//           <h3>Generated Terms and Conditions</h3>
//           <pre>{generatedTC}</pre>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default TCGenerator;


import React, { useState } from 'react';
import './tnccreator.css';
import Header from '../header&footer/header.js';

const TCGenerator = () => {
  // State to store user inputs
  const [formData, setFormData] = useState({
    companyName: '',
    serviceDescription: '',
    governingLaw: '',
  });

  const [generatedTC, setGeneratedTC] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to generate T&C via API call
  const generateTC = async () => {
    const { companyName, serviceDescription, governingLaw } = formData;

    // Check for empty fields before proceeding
    if (!companyName || !serviceDescription || !governingLaw) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    // Clear previous error
    setErrorMessage('');

    try {
      const response = await fetch('http://127.0.0.1:5000/tnc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data to the API
      });

      const data = await response.json();
      console.log('Received T&C data from API:', data);

      // Assuming the response contains the generated T&C in `content.text`
      const generatedText = data.content[0]?.text || 'Error: Unable to generate terms and conditions.';
      setGeneratedTC(generatedText);

    } catch (error) {
      console.error('Error generating T&C:', error);
      setErrorMessage('Error generating terms and conditions. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <div className="tc-generator-container">
        {/* Input Form */}
        <div className="tc-form">
          <div className="form-group">
            <label>Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter your company name"
            />
          </div>

          <div className="form-group">
            <label>Service Description:</label>
            <textarea
              name="serviceDescription"
              value={formData.serviceDescription}
              onChange={handleChange}
              placeholder="Describe your service"
            />
          </div>

          <div className="form-group">
            <label>Governing Law:</label>
            <input
              type="text"
              name="governingLaw"
              value={formData.governingLaw}
              onChange={handleChange}
              placeholder="Enter the governing law (e.g., California)"
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button onClick={generateTC} className="generate-tc-button">Generate T&C</button>
        </div>

        {/* Display Generated T&C */}
        {generatedTC && (
          <div className="tc-result">
            <h3>Generated Terms and Conditions</h3>
            <pre>{generatedTC}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default TCGenerator;
