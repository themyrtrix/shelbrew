import { useState, useEffect, useRef } from 'react'
import MenuItemCard from './MenuItemCard'
import MenuItemCardSkeleton from './MenuItemCardSkeleton'

function MenuGrid({ items, onAdd, loading }) {
  const gridRef = useRef(null);
  const [skeletonCount, setSkeletonCount] = useState(12);

  const calculateCount = () => {
    const width = window.innerWidth;
    let columns = 3;
    if (width >= 1440) columns = 4;
    else if (width <= 1023) columns = 2;

    // get actual available grid height from the wrapper
    const wrapper = gridRef.current?.parentElement;
    if (!wrapper) return columns * 3;

    const wrapperHeight = wrapper.clientHeight;
    const cardWidth = (wrapper.clientWidth - (columns - 1) * 16) / columns;
    const cardHeight = cardWidth * (3 / 4) + 60; // image + info + button

    // include partially visible row
    const rows = Math.ceil(wrapperHeight / cardHeight);

    return columns * rows;
  };

  useEffect(() => {
    const update = () => setSkeletonCount(calculateCount());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (loading) {
    return (
      <div className="menu-grid" ref={gridRef}>
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <MenuItemCardSkeleton key={i} index={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="menu-grid" ref={gridRef}>
      {items.map((item, i) => (
        <MenuItemCard key={item.id} item={item} onAdd={onAdd} index={i} />
      ))}
    </div>
  );
}

export default MenuGrid