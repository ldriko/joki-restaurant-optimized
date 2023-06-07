import { getLiked, findLikedIndex, addLiked, removeLiked } from './like.js';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

test('should return empty liked restaurant list', () => {
  expect(getLiked()).toEqual([]);
});

test('should return restaurant list', () => {
  localStorage.clear();
  addLiked('1');
  addLiked('2');
  addLiked('3');
  expect(getLiked()).toEqual(['1', '2', '3']);
});

test('should return index of liked restaurant', () => {
  localStorage.clear();
  addLiked('1');
  addLiked('2');
  addLiked('3');
  expect(findLikedIndex('2')).toEqual(1);
});

test('should add liked restaurant', () => {
  localStorage.clear();
  addLiked('1');
  addLiked('2');
  addLiked('3');
  expect(getLiked()).toEqual(['1', '2', '3']);
});

test('should remove liked restaurant', () => {
  localStorage.clear();
  addLiked('1');
  addLiked('2');
  addLiked('3');
  removeLiked('2');
  expect(getLiked()).toEqual(['1', '3']);
});
