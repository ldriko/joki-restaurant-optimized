import axios from 'axios';
import {
  initializeDatabase,
  findFavoriteIndex,
  addFavorite,
  removeFavorite,
} from './favorite.js';

const toggleFavoriteButton = (id) => {
  const likeButton = document.querySelector(`button[data-id="${id}"]`);
  if (!likeButton) return;
  const liked = findFavoriteIndex(id);
  liked.onsuccess = ({ target: { result } }) => {
    if (result) {
      likeButton.classList.remove('btn-secondary');
      likeButton.classList.add('btn-primary');
      likeButton.innerHTML = 'Favorit &hearts;';
    } else {
      likeButton.classList.remove('btn-primary');
      likeButton.classList.add('btn-secondary');
      likeButton.innerHTML = 'Tambahkan Favorit';
    }
  };
};

const handleFavorite = (restaurant) => {
  let request = findFavoriteIndex(restaurant.id);
  request.onsuccess = ({ target: { result } }) => {
    if (result) {
      request = removeFavorite(restaurant.id);
    } else {
      request = addFavorite(restaurant);
    }
    toggleFavoriteButton(restaurant.id);
  };
};

const handleOpen = (id) => (window.location.href = `/detail.html?id=${id}`);

const fetchRestaurants = async () => {
  const result = await axios
    .get('https://restaurant-api.dicoding.dev/list')
    .catch(() => []);
  return result.data.restaurants;
};

const renderRestaurantList = (restaurantListElement, restaurants) => {
  const element = restaurantListElement;
  element.innerHTML = '';
  restaurants.forEach((restaurant) => {
    const card = document.createElement('li');
    card.classList.add('restaurant-card');

    const cardImage = document.createElement('img');
    cardImage.classList.add('restaurant-card-image');
    cardImage.alt = restaurant.name;
    cardImage.classList.add('lazyload');
    cardImage.setAttribute(
      'data-src',
      `https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`,
    );

    const cardBody = document.createElement('div');
    cardBody.classList.add('restaurant-card-body');
    const cardName = document.createElement('h2');
    cardName.classList.add('restaurant-card-name');
    cardName.innerHTML = restaurant.name;
    const cardDescription = document.createElement('p');
    cardDescription.classList.add('restaurant-card-description');
    cardDescription.innerHTML = restaurant.description;

    const cardDetail = document.createElement('div');
    cardDetail.classList.add('restaurant-card-detail');
    const city = document.createElement('div');
    city.innerHTML = restaurant.city;
    const rating = document.createElement('div');
    rating.innerHTML = `${restaurant.rating} &starf;`;
    cardDetail.appendChild(city);
    cardDetail.appendChild(rating);

    const cardButtons = document.createElement('div');
    cardButtons.classList.add('restaurant-card-buttons');
    const likeButton = document.createElement('button');
    likeButton.classList.add('btn', 'btn-secondary', 'btn-favorite');
    likeButton.innerHTML = 'Tambahkan Favorit';
    likeButton.setAttribute('data-id', restaurant.id);
    likeButton.addEventListener('click', () => {
      handleFavorite(restaurant);
    });
    cardButtons.appendChild(likeButton);
    const openButton = document.createElement('button');
    openButton.classList.add('btn', 'btn-primary');
    openButton.innerHTML = 'Buka';
    openButton.setAttribute('data-id', restaurant.id);
    openButton.addEventListener('click', () => handleOpen(restaurant.id));
    cardButtons.appendChild(openButton);

    card.appendChild(cardImage);
    cardBody.appendChild(cardName);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardDetail);
    cardBody.appendChild(cardButtons);
    card.appendChild(cardBody);

    element.appendChild(card);
  });

  initializeDatabase(() => {
    restaurants.forEach((restaurant) => {
      toggleFavoriteButton(restaurant.id);
    });
  });
};

const initializeRestaurantList = async (id) => {
  const restaurantListElement = document.querySelector(id);
  if (!restaurantListElement) return;
  const restaurants = await fetchRestaurants();
  // console.log(restaurants);
  renderRestaurantList(restaurantListElement, restaurants);
};

export default initializeRestaurantList;
