



// import { useState } from "react"

// import products from "../data/product"

// import ProductCard from "./ProductCard"

// import ProductDetails from "./ProductDetails"


// function ProductSection({
//   onAddToCart,
//   selectedCategory,
//   onCategorySelect,
//   wishlist,
//   onToggleWishlist,
// }) {

//   // =========================
//   // SEARCH
//   // =========================

//   const [search, setSearch] = useState("")


//   // =========================
//   // SELECTED PRODUCT
//   // =========================

//   const [selectedProduct, setSelectedProduct] =
//     useState(null)


//   // =========================
//   // CATEGORIES
//   // =========================

//   const categories = [
//     "All",
//     "Electronics",
//     "Fashion",
//     "Accessories",
//     "Sports",
//   ]


//   // =========================
//   // FILTER PRODUCTS
//   // =========================

//   const filteredProducts =
//     products.filter((product) => {

//       const matchesCategory =
//         selectedCategory === "All" ||
//         product.category === selectedCategory


//       const matchesSearch =
//         product.name
//           .toLowerCase()
//           .includes(
//             search.toLowerCase()
//           )


//       return (
//         matchesCategory &&
//         matchesSearch
//       )

//     })


//   return (
//     <section
//       id="products"
//       className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20"
//     >


//       {/* =========================
//           HEADING
//       ========================== */}

//       <div className="text-center">

//         <p className="text-sm font-semibold text-blue-600">
//           OUR PRODUCTS
//         </p>

//         <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//           Featured Products
//         </h2>

//         <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500 sm:text-base">
//           Browse our collection and find something you love.
//         </p>

//       </div>


//       {/* =========================
//           SEARCH
//       ========================== */}

//       <div className="mx-auto mt-8 max-w-xl sm:mt-10">

//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) =>
//             setSearch(e.target.value)
//           }
//           className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:px-5 sm:text-base"
//         />

//       </div>


//       {/* =========================
//           CATEGORY FILTERS
//       ========================== */}

//       <div className="mt-6 flex gap-2 overflow-x-auto pb-2 sm:mt-8 sm:flex-wrap sm:justify-center sm:overflow-visible">

//         {categories.map(
//           (category) => (

//             <button
//               key={category}
//               onClick={() =>
//                 onCategorySelect(
//                   category
//                 )
//               }
//               className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition sm:px-5 ${
//                 selectedCategory === category
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {category}
//             </button>

//           )
//         )}

//       </div>


//       {/* =========================
//           PRODUCTS
//       ========================== */}

//       <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">

//         {filteredProducts.length > 0 ? (

//           filteredProducts.map(
//             (product) => (

//               <ProductCard
//                 key={product.id}
//                 product={product}

//                 onAddToCart={
//                   onAddToCart
//                 }

//                 onProductClick={
//                   setSelectedProduct
//                 }

//                 wishlist={
//                   wishlist
//                 }

//                 onToggleWishlist={
//                   onToggleWishlist
//                 }
//               />

//             )
//           )

//         ) : (

//           <div className="col-span-full py-16 text-center">

//             <p className="text-lg font-semibold text-gray-700">
//               No products found
//             </p>

//             <p className="mt-2 text-sm text-gray-500">
//               Try another search or category.
//             </p>

//           </div>

//         )}

//       </div>


//       {/* =========================
//           PRODUCT DETAILS
//       ========================== */}

//       {selectedProduct && (

//         <ProductDetails
//           product={
//             selectedProduct
//           }

//           onClose={() =>
//             setSelectedProduct(null)
//           }

//           onAddToCart={
//             onAddToCart
//           }

//           wishlist={
//             wishlist
//           }

//           onToggleWishlist={
//             onToggleWishlist
//           }
//         />

//       )}

//     </section>
//   )
// }


// export default ProductSection


























import { useEffect, useState } from "react"

import ProductCard from "./ProductCard"
import ProductDetails from "./ProductDetails"

import { getProducts } from "../services/api"


function ProductSection({
  onAddToCart,
  selectedCategory,
  onCategorySelect,
  wishlist,
  onToggleWishlist,
}) {

  // =========================
  // PRODUCTS
  // =========================

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState("")


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
  // GET PRODUCTS FROM API
  // =========================

  useEffect(() => {

    const loadProducts = async () => {

      try {

        setLoading(true)

        setError("")

        const data = await getProducts()

        setProducts(data)

      }
      catch (error) {

        console.error(
          "Products API Error:",
          error
        )

        setError(
          "Unable to load products. Please make sure the API is running."
        )

      }
      finally {

        setLoading(false)

      }

    }


    loadProducts()

  }, [])


  // =========================
  // FILTER PRODUCTS
  // =========================

  const filteredProducts =
    products.filter((product) => {

      const matchesCategory =
        selectedCategory === "All" ||
        product.categoryName === selectedCategory


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
          LOADING
      ========================== */}

      {loading && (

        <div className="py-20 text-center">

          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600">
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Loading products...
          </p>

        </div>

      )}


      {/* =========================
          ERROR
      ========================== */}

      {!loading && error && (

        <div className="py-20 text-center">

          <div className="mx-auto max-w-md rounded-2xl border border-red-200 bg-red-50 p-6">

            <p className="text-lg font-semibold text-red-700">
              Something went wrong
            </p>

            <p className="mt-2 text-sm text-red-600">
              {error}
            </p>

          </div>

        </div>

      )}


      {/* =========================
          PRODUCTS
      ========================== */}

      {!loading && !error && (

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

      )}


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