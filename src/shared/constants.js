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

export const MENU_ITEMS = [
  // Hot Drinks
  { id: 1, name: 'Espresso', category: MENU_CATEGORIES.HOT_DRINKS, price: 110, available: true },
  { id: 2, name: 'Americano', category: MENU_CATEGORIES.HOT_DRINKS, price: 140, available: true },
  { id: 3, name: 'Spanish Latte', category: MENU_CATEGORIES.HOT_DRINKS, price: 165, available: true },
  { id: 4, name: 'Cappuccino', category: MENU_CATEGORIES.HOT_DRINKS, price: 170, available: true },
  { id: 5, name: 'Mocha', category: MENU_CATEGORIES.HOT_DRINKS, price: 180, available: true },
  { id: 6, name: 'Caramel Latte', category: MENU_CATEGORIES.HOT_DRINKS, price: 185, available: true },
  { id: 7, name: 'Hot Chocolate', category: MENU_CATEGORIES.HOT_DRINKS, price: 160, available: true },

  // Cold Drinks
  { id: 8, name: 'Iced Americano', category: MENU_CATEGORIES.COLD_DRINKS, price: 150, available: true },
  { id: 9, name: 'Iced Latte', category: MENU_CATEGORIES.COLD_DRINKS, price: 175, available: true },
  { id: 10, name: 'Iced Mocha', category: MENU_CATEGORIES.COLD_DRINKS, price: 190, available: true },
  { id: 11, name: 'Caramel Iced Latte', category: MENU_CATEGORIES.COLD_DRINKS, price: 195, available: true },
  { id: 12, name: 'Frappé', category: MENU_CATEGORIES.COLD_DRINKS, price: 185, available: true },
  { id: 13, name: 'Honey Lemonade', category: MENU_CATEGORIES.COLD_DRINKS, price: 145, available: true },

  // Pastries
  { id: 14, name: 'Croissant', category: MENU_CATEGORIES.PASTRIES, price: 95, available: true },
  { id: 15, name: 'Muffin', category: MENU_CATEGORIES.PASTRIES, price: 105, available: true },
  { id: 16, name: 'Cookie', category: MENU_CATEGORIES.PASTRIES, price: 85, available: true },
  { id: 17, name: 'Donut', category: MENU_CATEGORIES.PASTRIES, price: 75, available: true },
  { id: 18, name: 'Cheesecake Slice', category: MENU_CATEGORIES.PASTRIES, price: 160, available: true },

  // Tea & Others
  { id: 19, name: 'Green Tea Latte', category: MENU_CATEGORIES.TEA_AND_OTHERS, price: 175, available: true },
  { id: 20, name: 'Chai Latte', category: MENU_CATEGORIES.TEA_AND_OTHERS, price: 165, available: true },
  { id: 21, name: 'Black Tea', category: MENU_CATEGORIES.TEA_AND_OTHERS, price: 120, available: true },
  { id: 22, name: 'Iced Tea', category: MENU_CATEGORIES.TEA_AND_OTHERS, price: 135, available: true },
];