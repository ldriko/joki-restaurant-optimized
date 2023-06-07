export const getLiked = () => {
  const liked = localStorage.getItem('likedRestaurants');
  return liked ? JSON.parse(liked) : [];
};

export const findLikedIndex = (id) => {
  const likedRestaurants = getLiked();
  return likedRestaurants.findIndex((_id) => _id === id);
};

export const addLiked = (id) => {
  const likedRestaurants = getLiked();
  likedRestaurants.push(id);
  localStorage.setItem('likedRestaurants', JSON.stringify(likedRestaurants));
};

export const removeLiked = (id) => {
  const likedRestaurants = getLiked();
  const index = findLikedIndex(id);
  if (index !== -1) {
    likedRestaurants.splice(index, 1);
  }
  localStorage.setItem('likedRestaurants', JSON.stringify(likedRestaurants));
};
