// const API_URL = import.meta.env.VITE_API_URL;


// // ==========================================
// // GET ALL PRODUCTS
// // ==========================================

// export async function getProducts() {
//   const response = await fetch(`${API_URL}/products`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   return await response.json();
// }


// // ==========================================
// // GET SINGLE PRODUCT
// // ==========================================

// export async function getProduct(id) {
//   const response = await fetch(`${API_URL}/products/${id}`);

//   if (!response.ok) {
//     throw new Error("Product not found");
//   }

//   return await response.json();
// }


// // ==========================================
// // GET ALL CATEGORIES
// // ==========================================

// export async function getCategories() {
//   const response = await fetch(`${API_URL}/categories`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch categories");
//   }

//   return await response.json();
// }


// // ==========================================
// // CREATE ORDER
// // ==========================================

// export async function createOrder(orderData) {
//   const response = await fetch(`${API_URL}/orders`, {
//     method: "POST",

//     headers: {
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify(orderData),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to create order");
//   }

//   return await response.json();
// }














const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return await response.json();
}

export async function getCategories() {
  const response = await fetch(`${API_URL}/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return await response.json();
}

// export async function createOrder(orderData) {
//   const response = await fetch(`${API_URL}/orders`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(orderData),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to create order");
//   }

//   return await response.json();
// }


export async function createOrder(orderData) {

  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(orderData),
  })


  // =========================
// GET ORDER BY ID
// =========================

  // Response ko pehle read karo
  const data = await response.json()


  // Agar API error de rahi hai
  if (!response.ok) {

    console.error(
      "Order API Error:",
      data
    )

    throw new Error(
      data.message ||
      data.title ||
      "Failed to create order"
    )

  }


  return data
}


export async function getOrder(orderId) {

  const response = await fetch(
    `${API_URL}/orders/${orderId}`
  )

  const data = await response.json()

  if (!response.ok) {

    console.error(
      "Get Order API Error:",
      data
    )

    throw new Error(
      data.message ||
      data.title ||
      "Failed to get order"
    )
  }

  return data
}

