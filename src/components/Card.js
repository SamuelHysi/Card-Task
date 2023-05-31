import React, { useState } from 'react';
import './Card.css'; // Create a Card.css file for styling if desired

const Card = ({ name, surname, birthday, city, description }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="card-container">
      <div className="card" onClick={handleClick}>
        <div className="left-side">
          <h3>
            Name: <span className="name-label">{name}</span> Surname:{' '}
            <span className="surname-label">{surname}</span>
          </h3>
          <p>
            <span className="paragraph-font-weight">Birthday:</span> {birthday}
          </p>
          <p>
            <span className="paragraph-font-weight">City:</span> {city}
          </p>
          <p>
            <span className="paragraph-font-weight">Description:</span> {description}
          </p>
        </div>
        <div className="right-side">
          <img
            className="card-photo"
            src={process.env.PUBLIC_URL + '/SamuelImg.jpg'}
            alt={`${name} ${surname}`}
          />
        </div>
      </div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-card">
            <h3>
              Name: <span className="name-label">{name}</span> Surname:{' '}
              <span className="surname-label">{surname}</span>
            </h3>
            <button className="close-button" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
