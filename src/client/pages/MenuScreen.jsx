import { MENU_ITEMS } from '../../shared/constants'
import MenuGrid from '../components/MenuGrid';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import '../../index.css';

function MenuScreen() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = MENU_ITEMS.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="menu-screen">
            <div className="menu-left">
                <h2>Categories</h2>
            </div>

            <div className="menu-center">
                <SearchBar onSearch={setSearchTerm} />
                <div className="menu-grid-wrapper">
                <MenuGrid items={filteredItems} />
                </div>
            </div>

            <div className="menu-right">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
}
export default MenuScreen