import './vendor.js';
import '../styles/main.css';

import { initializeNavBar } from './appbar.js';
import { initializeRestaurantList } from './restaurant-list.js';
import { initializeSkipButton } from './skip.js';

initializeNavBar('navbar');
initializeRestaurantList('#restaurantList');
initializeSkipButton('#skipButton');
