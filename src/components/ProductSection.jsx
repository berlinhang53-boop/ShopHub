
import { useEffect, useState } from "react"

import ProductCard from "./ProductCard"
import ProductDetails from "./ProductDetails"

import {
  getProducts,
  getCategories,
} from "../services/api"


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
  // CATEGORIES
  // =========================

  const [categories, setCategories] = useState([
    "All",
  ])


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
  // LOAD PRODUCTS
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
  // LOAD CATEGORIES
  // =========================

  useEffect(() => {

    const loadCategories = async () => {

      try {

        const data = await getCategories()

        const categoryNames =
          data.map(
            (category) =>
              category.name
          )

        setCategories([
          "All",
          ...categoryNames,
        ])

      }
      catch (error) {

        console.error(
          "Categories API Error:",
          error
        )

      }

    }


    loadCategories()

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
      className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20"
    >

      <div className="mx-auto max-w-7xl">


        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="text-center">

          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
            Our Collection
          </span>


          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Featured Products
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Discover our carefully selected collection
            of quality products at great prices.
          </p>

        </div>


        {/* =========================
            SEARCH + FILTER AREA
        ========================== */}

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">


          {/* SEARCH */}

          <div className="relative mx-auto max-w-2xl">

            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              🔍
            </div>


            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:text-base"
            />


            {search && (

              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-sm font-semibold text-gray-400 transition hover:text-gray-700"
              >
                ✕
              </button>

            )}

          </div>


          {/* CATEGORY FILTER */}

          <div className="mt-5">

            <div className="mb-3 flex items-center justify-between">

              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Browse Categories
              </p>


              <p className="text-xs font-medium text-gray-400">
                {filteredProducts.length} products
              </p>

            </div>


            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide sm:flex-wrap">

              {categories.map(
                (category) => (

                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      onCategorySelect(
                        category
                      )
                    }
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                        : "border border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >

                    {category}

                  </button>

                )
              )}

            </div>

          </div>

        </div>


        {/* =========================
            LOADING
        ========================== */}

        {loading && (

          <div className="grid grid-cols-1 gap-5 pt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {[1, 2, 3, 4].map(
              (item) => (

                <div
                  key={item}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                >

                  <div className="h-64 animate-pulse bg-gray-200" />

                  <div className="space-y-3 p-5">

                    <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />

                    <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />

                    <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />

                    <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200" />

                  </div>

                </div>

              )
            )}

          </div>

        )}


        {/* =========================
            ERROR
        ========================== */}

        {!loading && error && (

          <div className="py-12">

            <div className="mx-auto max-w-lg rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-2xl">
                ⚠️
              </div>


              <h3 className="mt-4 text-lg font-bold text-gray-900">
                Something went wrong
              </h3>


              <p className="mt-2 text-sm leading-6 text-gray-500">
                {error}
              </p>

            </div>

          </div>

        )}


        {/* =========================
            PRODUCTS
        ========================== */}

        {!loading && !error && (

          <div className="mt-8">

            {filteredProducts.length > 0 ? (

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">

                {filteredProducts.map(
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
                )}

              </div>

            ) : (

              /* =========================
                 NO RESULTS
              ========================== */

              <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl">
                  🔍
                </div>


                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  No products found
                </h3>


                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                  We couldn't find any products matching
                  your search or selected category.
                </p>


                <button
                  type="button"
                  onClick={() => {
                    setSearch("")
                    onCategorySelect("All")
                  }}
                  className="mt-6 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  Clear Filters
                </button>

              </div>

            )}

          </div>

        )}


        {/* =========================
            PRODUCT DETAILS
        ========================== */}

        {selectedProduct && (

          <ProductDetails
            product={selectedProduct}
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

      </div>

    </section>

  )

}


export default ProductSection
