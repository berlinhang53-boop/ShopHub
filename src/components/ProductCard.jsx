// function ProductCard({ product, onAddToCart }) {
//   return (
//     <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">

//       <div className="relative overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
//         />
//       </div>

//       <div className="p-5">

//         <p className="text-sm font-medium text-blue-600">
//           {product.category}
//         </p>

//         <h3 className="mt-2 text-lg font-bold text-gray-900">
//           {product.name}
//         </h3>

//         <div className="mt-3 flex items-center justify-between">
//           <span className="text-xl font-bold">
//             Rs. {product.price.toLocaleString()}
//           </span>

//           <span className="text-sm text-gray-500">
//             ⭐ {product.rating}
//           </span>
//         </div>

//         <button
//           onClick={() => onAddToCart(product)}
//           className="mt-5 w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition hover:bg-blue-600"
//         >
//           Add to Cart
//         </button>

//       </div>
//     </div>
//   )
// }

// export default ProductCard






// function ProductCard({
//   product,
//   onAddToCart,
//   onProductClick,
// }) {
//   return (
//     <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

//       {/* Image */}
//       <button
//         onClick={() => onProductClick(product)}
//         className="block w-full overflow-hidden bg-gray-100 text-left"
//       >
//         <img
//           src={product.image}
//           alt={product.name}
//           className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
//         />
//       </button>


//       {/* Content */}
//       <div className="p-4 sm:p-5">

//         <p className="text-sm font-medium text-blue-600">
//           {product.category}
//         </p>


//         {/* Product Name */}
//         <button
//           onClick={() => onProductClick(product)}
//           className="mt-2 block w-full text-left"
//         >
//           <h3 className="line-clamp-1 text-lg font-bold text-gray-900 hover:text-blue-600">
//             {product.name}
//           </h3>
//         </button>


//         {/* Price + Rating */}
//         <div className="mt-3 flex items-center justify-between gap-2">

//           <span className="text-lg font-bold text-gray-900 sm:text-xl">
//             Rs. {product.price.toLocaleString()}
//           </span>

//           <span className="whitespace-nowrap text-sm text-gray-500">
//             ⭐ {product.rating}
//           </span>

//         </div>


//         {/* Add To Cart */}
//         <button
//           onClick={() => onAddToCart(product)}
//           className="mt-5 w-full rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600 sm:text-base"
//         >
//           Add to Cart
//         </button>

//       </div>

//     </div>
//   )
// }

// export default ProductCard

















function ProductCard({
  product,
  onAddToCart,
  onProductClick,
  wishlist,
  onToggleWishlist,
}) {

  // Check whether product is in wishlist

  const isWishlisted =
    wishlist.some(
      (item) => item.id === product.id
    )


  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">


      {/* =========================
          IMAGE
      ========================== */}

      <div className="relative">

        <button
          onClick={() =>
            onProductClick(product)
          }
          className="block w-full overflow-hidden bg-gray-100 text-left"
        >

          <img
            src={product.image}
            alt={product.name}
            className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
          />

        </button>


        {/* =========================
            WISHLIST BUTTON
        ========================== */}

        <button
          onClick={() =>
            onToggleWishlist(product)
          }
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-md transition hover:scale-110 ${
            isWishlisted
              ? "text-red-500"
              : "text-gray-400"
          }`}
        >

          {isWishlisted
            ? "❤️"
            : "🤍"}

        </button>

      </div>


      {/* =========================
          CONTENT
      ========================== */}

      <div className="p-4 sm:p-5">


        {/* Category */}

        <p className="text-sm font-medium text-blue-600">
          {product.category}
        </p>


        {/* Product Name */}

        <button
          onClick={() =>
            onProductClick(product)
          }
          className="mt-2 block w-full text-left"
        >

          <h3 className="line-clamp-1 text-lg font-bold text-gray-900 hover:text-blue-600">
            {product.name}
          </h3>

        </button>


        {/* Price + Rating */}

        <div className="mt-3 flex items-center justify-between gap-2">

          <span className="text-lg font-bold text-gray-900 sm:text-xl">
            Rs. {product.price.toLocaleString()}
          </span>

          <span className="whitespace-nowrap text-sm text-gray-500">
            ⭐ {product.rating}
          </span>

        </div>


        {/* Add To Cart */}

        <button
          onClick={() =>
            onAddToCart(product)
          }
          className="mt-5 w-full rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600 sm:text-base"
        >
          Add to Cart
        </button>

      </div>

    </div>
  )
}


export default ProductCard