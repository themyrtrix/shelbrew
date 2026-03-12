function MenuItemCardSkeleton({ index }) {
  return (
    <div
      className="menu-card-skeleton"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="skeleton-img" />
      <div className="skeleton-info">
        <div className="skeleton-title" />
        <div className="skeleton-price" />
      </div>
      <div className="skeleton-btn" />
    </div>
  );
}

export default MenuItemCardSkeleton