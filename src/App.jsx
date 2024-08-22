import React, { useState } from 'react';
import running from "./assets/running.png"
import meme from "./assets/download.jpeg"
import './App.css';

function App() {
  const [message, setMessage] = useState(null);

  const showFlash = () => {

    console.log("clicked")
    setMessage({
      img: running,
    });
  };

  const showMeme = () => {
    // Simulating a bad INP with a delay
    setTimeout(() => {
      setMessage({
        img: meme,
      });
    }, 1000); // 1 second delay
  };

  return (
    <div className="App">
      <div className="button-container">
        <button className="good-button" onClick={showFlash}>
          Good INP
        </button>
        <button className="bad-button" onClick={showMeme}>
          Bad INP
        </button>
      </div>
      
 {message && (
        <div id="message" className="show-message">
          <img src={message.img} alt='Meme'/>
        </div>
      )}
     
    </div>
  );
}

export default App;
