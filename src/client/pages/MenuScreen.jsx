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
            <SearchBar onSearch={setSearchTerm} />
            <MenuGrid items={filteredItems} />
        </div>
    );
}
export default MenuScreen