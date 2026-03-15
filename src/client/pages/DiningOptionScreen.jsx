import { useNavigate } from "react-router-dom";
import { DINING_OPTIONS } from "../../shared/constants";
import "../styles/DiningOptionScreen.css";

function DiningOptionScreen() {
  const navigate = useNavigate();

  const handleSelect = (option) => {
    navigate('/menu', { state: { diningOption: option } });
  };

  return (
    <div className="dining-option-screen">
      <h1>Shelbrew</h1>
      <div className="options">
        <button
          className="option-button"
          onClick={() => handleSelect(DINING_OPTIONS.TAKE_OUT)}
        >
          <img src="/icons/bag-icon.svg" className="option-icon" />
          <p>Take Out</p>
        </button>
        <button
          className="option-button"
          onClick={() => handleSelect(DINING_OPTIONS.DINE_IN)}
        >
          <img src="/icons/coffee-icon.svg" className="option-icon" />
          <p>Dine In</p>
        </button>
      </div>
    </div>
  );
}

export default DiningOptionScreen;