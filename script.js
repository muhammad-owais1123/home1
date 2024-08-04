document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.category-item');
  const productGrid = document.getElementById('product-grid');
  const priceRange = document.getElementById('price-range');
  const priceValue = document.getElementById('price-value');
  const filterBtn = document.getElementById('filter-btn');
  const filterPopup = document.getElementById('filter-popup');
  const closeBtn = document.getElementById('close-btn');

  const products = [
    { id: 1, category: 'electronics', name: 'Laptop', price: 999, shape: 'rectangle', image: 'https://via.placeholder.com/280x180' },
    { id: 2, category: 'fashion', name: 'T-Shirt', price: 19, shape: 'square', image: 'https://via.placeholder.com/280x280' },
    { id: 3, category: 'beauty', name: 'Lipstick', price: 29, shape: 'round', image: 'https://via.placeholder.com/280x280' },
    { id: 4, category: 'home', name: 'Sofa', price: 499, shape: 'rectangle', image: 'https://via.placeholder.com/280x180' },
    { id: 5, category: 'sports', name: 'Basketball', price: 39, shape: 'round', image: 'https://via.placeholder.com/280x280' },
    // Add more products as needed
    { id: 6, category: 'electronics', name: 'Smartphone', price: 799, shape: 'rectangle', image: 'https://via.placeholder.com/280x180' },
    { id: 7, category: 'fashion', name: 'Jeans', price: 49, shape: 'square', image: 'https://via.placeholder.com/280x280' },
    { id: 8, category: 'beauty', name: 'Perfume', price: 89, shape: 'rectangle', image: 'https://via.placeholder.com/280x180'},
    { id: 9, category: 'home', name: 'Lamp', price: 59, shape: 'rectangle', image: 'https://via.placeholder.com/280x180' },
    { id: 10, category: 'sports', name: 'Tennis Racket', price: 119, shape: 'rectangle', image: 'https://via.placeholder.com/280x180' },
    { id: 11, category: 'electronics', name: 'Camera', price: 499, shape: 'rectangle', image: 'https://via.placeholder.com/280x180' },
    { id: 12, category: 'fashion', name: 'Sunglasses', price: 29, shape: 'square', image: 'https://via.placeholder.com/280x280' },
    { id: 13, category: 'beauty', name: 'Foundation', price: 39, shape: 'round', image: 'https://via.placeholder.com/280x280' },
    { id: 14, category: 'home', name: 'Chair', price: 199, shape: 'rectangle', image: 'https://via.placeholder.com/280x180' },
    { id: 15, category: 'sports', name: 'Soccer Ball', price: 25, shape: 'round', image: 'https://via.placeholder.com/280x280' }
  ];

  const filterProducts = () => {
    const selectedCategory = document.querySelector('.category-item.active')?.dataset.category || 'all';
    const maxPrice = priceRange.value;
    const selectedShapes = Array.from(document.querySelectorAll('input[name="shape"]:checked')).map(checkbox => checkbox.value);

    productGrid.innerHTML = '';

    const filteredProducts = products.filter(product => {
      const inCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const inPriceRange = product.price <= maxPrice;
      const inShape = selectedShapes.length === 0 || selectedShapes.includes(product.shape);

      return inCategory && inPriceRange && inShape;
    });

    filteredProducts.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>$${product.price}</p>
      `;
      productGrid.appendChild(productItem);
    });
  };

  categories.forEach(category => {
    category.addEventListener('click', () => {
      document.querySelector('.category-item.active')?.classList.remove('active');
      category.classList.add('active');
      filterProducts();
    });
  });

  priceRange.addEventListener('input', () => {
    priceValue.textContent = `$0 - $${priceRange.value}`;
    filterProducts();
  });

  document.querySelectorAll('input[name="shape"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
  });

  filterBtn.addEventListener('click', () => {
    filterPopup.classList.toggle('show');
  });

  closeBtn.addEventListener('click', () => {
    filterPopup.classList.remove('show');
  });

  // Load all products initially
  filterProducts();
});
