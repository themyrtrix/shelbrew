import { useState, useEffect } from 'react'
import { db } from '../../shared/firebase'
import { collection, getDocs } from 'firebase/firestore'  // ← add this
import MenuGrid from '../components/MenuGrid'
import SearchBar from '../components/SearchBar'
import '../../index.css'

function MenuScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuItems, setMenuItems] = useState([]);  // ← store fetched items here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      const snapshot = await getDocs(collection(db, 'menu'));
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMenuItems(items);  // ← save to state
      setLoading(false);
    };

    fetchMenu();
  }, []);

  const filteredItems = menuItems.filter(item =>  // ← filter the state, not db
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