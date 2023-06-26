import 'fake-indexeddb/auto';
import {
  getFavorites,
  findFavoriteIndex,
  addFavorite,
  removeFavorite,
  initializeDatabase,
  clearFavorite,
} from './favorite.js';
import { async } from 'regenerator-runtime';

test('should return empty liked restaurant list', async () => {
  await new Promise((resolve) => {
    initializeDatabase(() => {
      const request = getFavorites();
      request.onsuccess = ({ target: { result } }) => {
        expect(result).toEqual([]);
        resolve();
      };
    });
  });
});

test('should return restaurant list', async () => {
  await new Promise((resolve) => {
    initializeDatabase(() => {
      clearFavorite();
      addFavorite({
        id: '1',
        name: 'Restaurant 1',
        description: 'Description 1',
        pictureId: '1',
        city: 'City 1',
        rating: 5,
      });
      addFavorite({
        id: '2',
        name: 'Restaurant 2',
        description: 'Description 2',
        pictureId: '2',
        city: 'City 2',
        rating: 5,
      });
      addFavorite({
        id: '3',
        name: 'Restaurant 3',
        description: 'Description 3',
        pictureId: '3',
        city: 'City 3',
        rating: 5,
      });

      const request = getFavorites();
      request.onsuccess = ({ target: { result } }) => {
        expect(result.length).toBe(3);
        resolve();
      };
    });
  });
});

test('should return index of liked restaurant', async () => {
  await new Promise((resolve) => {
    initializeDatabase(() => {
      clearFavorite();
      addFavorite({
        id: '1',
        name: 'Restaurant 1',
        description: 'Description 1',
        pictureId: '1',
        city: 'City 1',
        rating: 5,
      });
      addFavorite({
        id: '2',
        name: 'Restaurant 2',
        description: 'Description 2',
        pictureId: '2',
        city: 'City 2',
        rating: 5,
      });
      addFavorite({
        id: '3',
        name: 'Restaurant 3',
        description: 'Description 3',
        pictureId: '3',
        city: 'City 3',
        rating: 5,
      });

      const request = findFavoriteIndex('3');
      request.onsuccess = ({ target: { result } }) => {
        expect(result).toBeTruthy();
        resolve();
      };
    });
  });
});

test('should add liked restaurant', async () => {
  await new Promise((resolve) => {
    initializeDatabase(() => {
      clearFavorite();
      addFavorite({
        id: '1',
        name: 'Restaurant 1',
        description: 'Description 1',
        pictureId: '1',
        city: 'City 1',
        rating: 5,
      });
      addFavorite({
        id: '2',
        name: 'Restaurant 2',
        description: 'Description 2',
        pictureId: '2',
        city: 'City 2',
        rating: 5,
      });
      addFavorite({
        id: '3',
        name: 'Restaurant 3',
        description: 'Description 3',
        pictureId: '3',
        city: 'City 3',
        rating: 5,
      });

      const request = getFavorites();
      request.onsuccess = ({ target: { result } }) => {
        expect(result.length).toBe(3);
        resolve();
      };
    });
  });
});

test('should remove liked restaurant', async () => {
  await new Promise((resolve) => {
    initializeDatabase(() => {
      clearFavorite();
      addFavorite({
        id: '1',
        name: 'Restaurant 1',
        description: 'Description 1',
        pictureId: '1',
        city: 'City 1',
        rating: 5,
      });
      addFavorite({
        id: '2',
        name: 'Restaurant 2',
        description: 'Description 2',
        pictureId: '2',
        city: 'City 2',
        rating: 5,
      });
      addFavorite({
        id: '3',
        name: 'Restaurant 3',
        description: 'Description 3',
        pictureId: '3',
        city: 'City 3',
        rating: 5,
      });

      removeFavorite('2');

      const request = getFavorites();
      request.onsuccess = ({ target: { result } }) => {
        expect(result.length).toBe(2);
        resolve();
      };
    });
  });
});
