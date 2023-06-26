import './vendor.js';
import '../styles/main.css';

import initializeNavBar from './appbar.js';
import initializeRestaurantDetail from './detail.js';
import initializeRestaurantList from './restaurant-list.js';
import initializeSkipButton from './skip.js';
import initializeFavoriteRestaurants from './favorite-restaurants.js';

initializeNavBar('navbar');
if (document.querySelector('#restaurantList')) {
  initializeRestaurantList('#restaurantList');
}
if (document.querySelector('#restaurantDetail')) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  initializeRestaurantDetail(id);
}
if (document.querySelector('#favoriteRestaurants')) {
  initializeFavoriteRestaurants('#favoriteRestaurants');
}
initializeSkipButton('#skipButton');
