import MenuItemCard from "./MenuItemCard"

function MenuGrid({ items }) {
  return (
    <div className="menu-grid">
      {items.map(item => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuGrid;