import { db } from '../shared/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { MENU_ITEMS } from '../shared/constants'

async function seedMenu() {
  const menuCollection = collection(db, 'menu');

  for (const item of MENU_ITEMS) {
    const { id, ...data } = item; // remove the local id, Firestore generates its own
    await addDoc(menuCollection, data);
    console.log(Added: ${item.name});
  }

  console.log('Done! All menu items uploaded.');
}

seedMenu();