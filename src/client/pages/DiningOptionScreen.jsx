

function DiningOptionScreen() {
  return (
    <div className="dining-option-screen">
      <h1>Welcome to Shelbrew!</h1>
      <p>Please select your dining option:</p>
      <div className="options">
        <button className="option-button">Take Out</button>
        <button className="option-button">Dine In</button>
      </div>
    </div>
  );
}

export default DiningOptionScreen;