import { useState, useEffect } from 'react'
import { db } from '../../shared/firebase'
import MenuGrid from '../components/MenuGrid'
import SearchBar from '../components/SearchBar'
import '../../index.css'

function MenuScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = db.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu-screen">
      <div className="menu-left">
        <h2>Filter buttons here</h2>
      </div>

      <div className="menu-center">
        <SearchBar onSearch={setSearchTerm} />
        <div className="menu-grid-wrapper">
          <MenuGrid items={filteredItems} onAdd={() => {}} loading={loading} />
        </div>
      </div>

      <div className="menu-right">
        <h2>Order Summary here</h2>
      </div>
    </div>
  );
}

export default MenuScreen