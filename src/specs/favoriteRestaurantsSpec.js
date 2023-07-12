import {
  getFavorites,
  findFavoriteIndex,
  addFavorite,
  removeFavorite,
  initializeDatabase,
  clearFavorite,
} from '../scripts/favorite.js';

describe('Favorite Restaurants', () => {
  it('should return an empty list', async () => {
    await new Promise((resolve) => {
      initializeDatabase(() => {
        clearFavorite();
        const request = getFavorites();
        request.onsuccess = ({ target: { result } }) => {
          expect(result).toEqual([]);
          resolve();
        };
      });
    });
  });

  it('should return restaurant list', async () => {
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

  it('should return index of liked restaurant', async () => {
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

  it('should add liked restaurant', async () => {
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

  it('should remove liked restaurant', async () => {
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
});
