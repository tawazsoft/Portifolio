import React, { useState } from "react";

function EmailSentPopup() {
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle closing the popup
  function handleClose() {
    setShowPopup(false);
  }

  // Function to handle showing the popup
  function handleShow() {
    setShowPopup(true);
  }

  // JSX for the popup
  const popup = (
    <div className="popup">
      <h2>Email Sent!</h2>
      <p>Your email has been sent successfully.</p>
      <button onClick={handleClose}>Close</button>
    </div>
  );

  return (
    <div>
      {/* Button to show the popup */}
      <button onClick={handleShow}>Send Email</button>

      {/* Render the popup if showPopup is true */}
      {showPopup && popup}
    </div>
  );
}

export default EmailSentPopup;
