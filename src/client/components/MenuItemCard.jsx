

function MenuItemCard({ item }) {
  return (
    <div className={`menu-card ${!item.available ? 'unavailable' : ''}`}>
      <h3>{item.name}</h3>
      <p>₱{item.price}</p>
      <button disabled={!item.available}>
        {item.available ? 'Add' : 'Unavailable'}
      </button>
    </div>
  );
}

export default MenuItemCard;