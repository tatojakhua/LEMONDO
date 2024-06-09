import { StaticImageData } from 'next/image';
import home from '../app/assets/menuHome.png';
import row from '../app/assets/mobileRow.png';
import search from '../app/assets/search-mobile.png';
import cart from '../app/assets/cart.png';
import profile from '../app/assets/profile.png';

interface Item {
  id: number;
  img: StaticImageData;
  text: string;
}

export const menuArray: Array<Item> = [
  { id: 1, img: home, text: 'მთავარი' },
  { id: 2, img: row, text: 'შედარება' },
  { id: 3, img: search, text: 'ძიება' },
  { id: 4, img: cart, text: 'კალათა' },
  { id: 5, img: profile, text: 'პროფილი' },
];
