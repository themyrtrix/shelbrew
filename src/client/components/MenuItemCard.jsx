function MenuItemCard({ item, onAdd, index }) {
  return (
    <div
      className={`menu-card ${!item.available ? 'unavailable' : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <img src={item.image} alt={item.name} />
      <div className="menu-card-info">
        <h3>{item.name}</h3>
        <p>₱{item.price}</p>
      </div>
      <button
        className="menu-card-btn"
        onClick={() => onAdd(item)}
        disabled={!item.available}
      >
        {item.available ? 'Add' : 'Unavailable'}
      </button>
    </div>
  );
}

export default MenuItemCard