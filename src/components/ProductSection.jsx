// import { useState } from "react"
// import products from "../data/product"
// import ProductCard from "./ProductCard"

// function ProductSection({ onAddToCart, selectedCategory }) {
//   const [search, setSearch] = useState("")

//   const categories = [
//     "All",
//     "Electronics",
//     "Fashion",
//     "Accessories",
//     "Sports",
//   ]

//   const filteredProducts = products.filter((product) => {
//     const matchesCategory =
//       selectedCategory === "All" ||
//       product.category === selectedCategory

//     const matchesSearch =
//       product.name.toLowerCase().includes(search.toLowerCase())

//     return matchesCategory && matchesSearch
//   })

//   return (
//     <section
//       id="products"
//       className="mx-auto max-w-7xl px-6 py-20"
//     >
//       <div className="text-center">
//         <p className="font-semibold text-blue-600">
//           OUR PRODUCTS
//         </p>

//         <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
//           Featured Products
//         </h2>
//       </div>

//       {/* Search */}
//       <div className="mx-auto mt-10 max-w-xl">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full rounded-xl border border-gray-300 px-5 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//         />
//       </div>

//       {/* Categories */}
//       <div className="mt-8 flex flex-wrap justify-center gap-3">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
//               selectedCategory === category
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Products */}
//       <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             onAddToCart={onAddToCart}
//           />
//         ))}
//       </div>

//     </section>
//   )
// }

// export default ProductSection















import { useState } from "react"

import products from "../data/product"

import ProductCard from "./ProductCard"

import ProductDetails from "./ProductDetails"


function ProductSection({
  onAddToCart,
  selectedCategory,
  onCategorySelect,
  wishlist,
  onToggleWishlist,
}) {

  // =========================
  // SEARCH
  // =========================

  const [search, setSearch] = useState("")


  // =========================
  // SELECTED PRODUCT
  // =========================

  const [selectedProduct, setSelectedProduct] =
    useState(null)


  // =========================
  // CATEGORIES
  // =========================

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Accessories",
    "Sports",
  ]


  // =========================
  // FILTER PRODUCTS
  // =========================

  const filteredProducts =
    products.filter((product) => {

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory


      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )


      return (
        matchesCategory &&
        matchesSearch
      )

    })


  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20"
    >


      {/* =========================
          HEADING
      ========================== */}

      <div className="text-center">

        <p className="text-sm font-semibold text-blue-600">
          OUR PRODUCTS
        </p>

        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Featured Products
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500 sm:text-base">
          Browse our collection and find something you love.
        </p>

      </div>


      {/* =========================
          SEARCH
      ========================== */}

      <div className="mx-auto mt-8 max-w-xl sm:mt-10">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:px-5 sm:text-base"
        />

      </div>


      {/* =========================
          CATEGORY FILTERS
      ========================== */}

      <div className="mt-6 flex gap-2 overflow-x-auto pb-2 sm:mt-8 sm:flex-wrap sm:justify-center sm:overflow-visible">

        {categories.map(
          (category) => (

            <button
              key={category}
              onClick={() =>
                onCategorySelect(
                  category
                )
              }
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition sm:px-5 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>

          )
        )}

      </div>


      {/* =========================
          PRODUCTS
      ========================== */}

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">

        {filteredProducts.length > 0 ? (

          filteredProducts.map(
            (product) => (

              <ProductCard
                key={product.id}
                product={product}

                onAddToCart={
                  onAddToCart
                }

                onProductClick={
                  setSelectedProduct
                }

                wishlist={
                  wishlist
                }

                onToggleWishlist={
                  onToggleWishlist
                }
              />

            )
          )

        ) : (

          <div className="col-span-full py-16 text-center">

            <p className="text-lg font-semibold text-gray-700">
              No products found
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Try another search or category.
            </p>

          </div>

        )}

      </div>


      {/* =========================
          PRODUCT DETAILS
      ========================== */}

      {selectedProduct && (

        <ProductDetails
          product={
            selectedProduct
          }

          onClose={() =>
            setSelectedProduct(null)
          }

          onAddToCart={
            onAddToCart
          }

          wishlist={
            wishlist
          }

          onToggleWishlist={
            onToggleWishlist
          }
        />

      )}

    </section>
  )
}


export default ProductSection