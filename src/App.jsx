import React, { useState } from 'react';
import './App.css';

function Modal() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({
    top: 55,
    left: 60,
  });

  const handleNoButtonClick = () => {
    const newX = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
    const newY = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
    setButtonPosition({ x: newX, y: newY });
  };

  const handleYesButtonClick = () => {
    setIsCorrect(true);
  };

  return (
    <div className="modal" id="modal">
      {isCorrect ? (
        <p style={{ backgroundColor: '#fff' }}>Kan udah dibilang 💪 </p>
      ) : (
        <>
          <div className="app__flex" style={{ backgroundColor: '#fff' }}>
            <div className="yes" style={{ backgroundColor: '#fff' }}>
              <button
                id="yes-button"
                onClick={handleYesButtonClick}
                style={{ backgroundColor: '#fff' }}
              >
                Iyah
              </button>
            </div>
            <div className="no">
              <button
                id="no-button"
                style={{
                  position: 'absolute',
                  left: `${buttonPosition.x}%`,
                  top: `${buttonPosition.y}%`,
                  backgroundColor: '#fff',
                }}
                onClick={handleNoButtonClick}
              >
                Gak
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="kartu">
        <h2 style={{ backgroundColor: '#fff' }}> Opik Ganteng</h2>
        <h2 style={{ backgroundColor: '#fff' }}>Bener kan?</h2>
        <Modal />
      </div>
    </div>
  );
}

export default App;
