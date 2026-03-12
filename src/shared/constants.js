export const ORDER_STATUS = {
  PENDING: 'pending',
  PREPARING: 'preparing',
  READY: 'ready',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
};

export const DINING_OPTIONS = {
  DINE_IN: 'dine_in',
  TAKE_OUT: 'take_out',
};

export const MENU_CATEGORIES = {
  ALL: 'All',
  HOT_DRINKS: 'Hot Drinks',
  COLD_DRINKS: 'Cold Drinks',
  PASTRIES: 'Pastries',
  TEA_AND_OTHERS: 'Tea & Others',
};

export const COLLECTIONS = {
  ORDERS: 'orders',
  MENU: 'menu',
};

// Temporary placeholder data — replace with Firestore fetch once Firebase is set up
export const MENU_ITEMS = [

  // Hot Drinks
  { id: 1, name: 'Espresso', category: MENU_CATEGORIES.HOT_DRINKS, price: 110, available: true, image: '/images/espresso.jpg' },
  { id: 2, name: 'Americano', category: MENU_CATEGORIES.HOT_DRINKS, price: 140, available: true, image: '/images/americano.jpg' },
  { id: 3, name: 'Spanish Latte', category: MENU_CATEGORIES.HOT_DRINKS, price: 165, available: true, image: '/images/spanish-latte.jpg' },
  { id: 4, name: 'Cappuccino', category: MENU_CATEGORIES.HOT_DRINKS, price: 170, available: true, image: '/images/cappuccino.jpg' },
  { id: 5, name: 'Caramel Latte', category: MENU_CATEGORIES.HOT_DRINKS, price: 185, available: true, image: '/images/caramel-latte.jpg' },
  { id: 6, name: 'Hot Chocolate', category: MENU_CATEGORIES.HOT_DRINKS, price: 160, available: true, image: '/images/hot-chocolate.jpg' },

  // Cold Drinks
  { id: 7, name: 'Iced Americano', category: MENU_CATEGORIES.COLD_DRINKS, price: 150, available: true, image: '/images/iced-americano.jpg' },
  { id: 8, name: 'Iced Latte', category: MENU_CATEGORIES.COLD_DRINKS, price: 175, available: true, image: '/images/iced-latte.jpg' },
  { id: 9, name: 'Caramel Iced Latte', category: MENU_CATEGORIES.COLD_DRINKS, price: 195, available: true, image: '/images/caramel-iced-latte.jpg' },
  { id: 10, name: 'Frappé', category: MENU_CATEGORIES.COLD_DRINKS, price: 185, available: true, image: '/images/frappe.jpg' },
  { id: 11, name: 'Honey Lemonade', category: MENU_CATEGORIES.COLD_DRINKS, price: 145, available: true, image: '/images/honey-lemonade.jpg' },

  // Pastries
  { id: 12, name: 'Croissant', category: MENU_CATEGORIES.PASTRIES, price: 95, available: false, image: '/images/croissant.jpg' },
  { id: 13, name: 'Muffin', category: MENU_CATEGORIES.PASTRIES, price: 105, available: true, image: '/images/muffin.jpg' },
  { id: 14, name: 'Cookies', category: MENU_CATEGORIES.PASTRIES, price: 85, available: true, image: '/images/cookies.jpg' },
  { id: 15, name: 'Donut', category: MENU_CATEGORIES.PASTRIES, price: 75, available: true, image: '/images/donut.jpg' },
  { id: 16, name: 'Cheesecake Slice', category: MENU_CATEGORIES.PASTRIES, price: 160, available: true, image: '/images/cheesecake.jpg' },

  // Tea & Others
  { id: 17, name: 'Green Tea Latte', category: MENU_CATEGORIES.TEA_AND_OTHERS, price: 175, available: true, image: '/images/green-tea-latte.jpg' },
  { id: 18, name: 'Chai Latte', category: MENU_CATEGORIES.TEA_AND_OTHERS, price: 165, available: true, image: '/images/chai-latte.jpg' },
  { id: 19, name: 'Black Tea', category: MENU_CATEGORIES.TEA_AND_OTHERS, price: 120, available: false, image: '/images/black-tea.jpg' },
  { id: 20, name: 'Iced Tea', category: MENU_CATEGORIES.TEA_AND_OTHERS, price: 135, available: false, image: '/images/iced-tea.jpg' },
];