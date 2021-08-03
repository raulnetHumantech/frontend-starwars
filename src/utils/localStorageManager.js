export function persistFavoriteProduct(product) {
  let favoriteProducts = JSON.parse(localStorage.getItem('favorite-products'));
  if (!favoriteProducts) {
    favoriteProducts = [];  
  } else {
    const productRegistered = favoriteProducts.filter(({id}) => id === product.id)
    if (productRegistered.length === 0) {
      favoriteProducts.push(product)
    }
  }
  console.log(favoriteProducts);
  localStorage.setItem('favorite-products', JSON.stringify(favoriteProducts));
}

export function loadFavoriteProducts() {
  let favoriteProducts = JSON.parse(localStorage.getItem('favorite-products'));
  if (!favoriteProducts) {
    return [];  
  }
  return favoriteProducts;
}

export function removeFavoriteProductFromLocalStorage(productId) {
  let favoriteProducts = JSON.parse(localStorage.getItem('favorite-products'));
  if (favoriteProducts) {
    favoriteProducts = favoriteProducts.filter(product => product.id !== productId);
  } else {
    favoriteProducts = [];  
  }
  localStorage.setItem('favorite-products', JSON.stringify(favoriteProducts));
}

export function cleanLocalStorage() {
  localStorage.clear();
}