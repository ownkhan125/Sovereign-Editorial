// Cart utility functions for managing cart state

export const cartUtils = {
  // Get all cart items from localStorage
  getCartItems: () => {
    if (typeof window === "undefined") return [];
    const cart = localStorage.getItem("cartItems");
    return cart ? JSON.parse(cart) : [];
  },

  // Add item to cart
  addToCart: (product) => {
    const items = cartUtils.getCartItems();

    // Ensure product has required properties
    const cartProduct = {
      id: product.id || product._id,
      title: product.title || product.name || "Unnamed Product",
      price: product.price || 0,
      image: product.image || "",
      category: product.category || "",
    };

    const existingItem = items.find((item) => item.id === cartProduct.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.push({
        ...cartProduct,
        quantity: 1,
      });
    }

    cartUtils.saveCart(items);
    return items;
  },

  // Remove item from cart
  removeFromCart: (itemId) => {
    const items = cartUtils.getCartItems();
    const filteredItems = items.filter((item) => item.id !== itemId);
    cartUtils.saveCart(filteredItems);
    return filteredItems;
  },

  // Update item quantity
  updateQuantity: (itemId, quantity) => {
    const items = cartUtils.getCartItems();
    const item = items.find((item) => item.id === itemId);

    if (item) {
      if (quantity < 1) {
        return cartUtils.removeFromCart(itemId);
      }
      item.quantity = quantity;
      cartUtils.saveCart(items);
    }

    return items;
  },

  // Save cart to localStorage
  saveCart: (items) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(items));
    }
  },

  // Clear entire cart
  clearCart: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cartItems");
    }
  },

  // Calculate cart totals
  calculateTotals: (items) => {
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    const taxRate = 0.1; // 10%
    const tax = subtotal * taxRate;
    const shipping = subtotal > 100 ? 0 : 10;
    const grandTotal = subtotal + tax + shipping;

    return {
      subtotal: parseFloat(subtotal.toFixed(2)),
      tax: parseFloat(tax.toFixed(2)),
      shipping: parseFloat(shipping.toFixed(2)),
      grandTotal: parseFloat(grandTotal.toFixed(2)),
      itemCount: items.length,
      totalQuantity: items.reduce((total, item) => total + item.quantity, 0),
    };
  },

  // Get cart summary
  getCartSummary: () => {
    const items = cartUtils.getCartItems();
    return cartUtils.calculateTotals(items);
  },
};

export default cartUtils;
