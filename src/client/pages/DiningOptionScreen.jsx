import { useState } from "react";
import { DINING_OPTIONS } from "../../shared/constants";
import "../styles/DiningOptionScreen.css";

function DiningOptionScreen() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="dining-option-screen">
      <h1>Come in. Take it slow.</h1>
      <p>Where would you like to eat?</p>
      <div className="options">
        <button 
          className={`option-button ${selectedOption === DINING_OPTIONS.TAKE_OUT ? 'selected' : ''}`}
          onClick={() => setSelectedOption(DINING_OPTIONS.TAKE_OUT)}
        >
          Take Out
        </button>
        <button 
          className={`option-button ${selectedOption === DINING_OPTIONS.DINE_IN ? 'selected' : ''}`}
          onClick={() => setSelectedOption(DINING_OPTIONS.DINE_IN)}
        >
          Dine In
        </button>
      </div>
    </div>
  );
}

export default DiningOptionScreen;