// App.js
import React, { useState } from 'react';
import './App.css';

const productsData = [
  { id: 1, name: "Product 1", category: "Category A", price: 10, rating: 4, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", category: "Category B", price: 15, rating: 5, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", category: "Category A", price: 20, rating: 3, image: "https://via.placeholder.com/150" },
];

function App() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity }];
    setCart(updatedCart);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="categories">
            <select>
              <option value="">All Categories</option>
              <option value="Category A">Category A</option>
              <option value="Category B">Category B</option>
            </select>
          </div>
        </nav>
      </header>
      <div className="product-list">
        {productsData.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}/5</p>
            <div className="quantity-controls">
              <button onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {/* Cart component can be added here */}
    </div>
  );
}

export default App;

