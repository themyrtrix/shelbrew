function MenuItemCard({ item }) {
  return (
    <div className={`menu-card ${!item.available ? "unavailable" : ""}`}>
      <div className="menu-card-info">
        <h3>{item.name}</h3>
        <p>₱{item.price}</p>
      </div>
      <div className="menu-card-btn">
        <button disabled={!item.available}>
          {item.available ? "Add" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}

export default MenuItemCard;
