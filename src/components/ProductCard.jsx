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

  // =========================
  // WISHLIST CHECK
  // =========================

  const isWishlisted =
    wishlist.some(
      (item) => item.id === product.id
    )


  return (

    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-gray-300
        hover:shadow-xl
      "
    >


      {/* =========================
          IMAGE
      ========================== */}

      <div className="relative overflow-hidden bg-gray-100">


        {/* Product Image */}

        <button
          type="button"
          onClick={() =>
            onProductClick(product)
          }
          className="block w-full text-left"
        >

          <img
            src={product.image}
            alt={product.name}
            className="
              h-64
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
              sm:h-72
            "
          />

        </button>


        {/* =========================
            IMAGE OVERLAY
        ========================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/10
            via-transparent
            to-transparent
            opacity-0
            transition
            duration-300
            group-hover:opacity-100
          "
        />


        {/* =========================
            CATEGORY BADGE
        ========================== */}

        <div className="absolute left-3 top-3">

          <span
            className="
              inline-flex
              rounded-full
              bg-white/95
              px-3
              py-1.5
              text-xs
              font-bold
              text-gray-700
              shadow-sm
              backdrop-blur
            "
          >
            {product.category}
          </span>

        </div>


        {/* =========================
            WISHLIST
        ========================== */}

        <button
          type="button"
          aria-label={
            isWishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          onClick={() =>
            onToggleWishlist(product)
          }
          className={`
            absolute
            right-3
            top-3
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/95
            text-lg
            shadow-md
            backdrop-blur
            transition-all
            duration-200
            hover:scale-110
            active:scale-95
            ${
              isWishlisted
                ? "text-red-500"
                : "text-gray-400 hover:text-red-500"
            }
          `}
        >

          {isWishlisted
            ? "❤️"
            : "♡"}

        </button>

      </div>


      {/* =========================
          CONTENT
      ========================== */}

      <div className="p-5">


        {/* =========================
            PRODUCT NAME
        ========================== */}

        <button
          type="button"
          onClick={() =>
            onProductClick(product)
          }
          className="block w-full text-left"
        >

          <h3
            className="
              line-clamp-1
              text-lg
              font-bold
              tracking-tight
              text-gray-900
              transition
              group-hover:text-blue-600
            "
          >
            {product.name}
          </h3>

        </button>


        {/* =========================
            RATING
        ========================== */}

        <div className="mt-2 flex items-center gap-2">

          <div className="flex items-center gap-0.5">

            <span className="text-sm">
              ⭐
            </span>

            <span className="text-sm font-semibold text-gray-700">
              {product.rating}
            </span>

          </div>


          <span className="h-1 w-1 rounded-full bg-gray-300" />


          <span className="text-xs text-gray-500">
            Customer rating
          </span>

        </div>


        {/* =========================
            PRICE
        ========================== */}

        <div className="mt-4 flex items-end justify-between gap-3">

          <div>

            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Price
            </p>

            <p className="mt-0.5 text-xl font-extrabold tracking-tight text-gray-900">
              Rs.{" "}
              {Number(
                product.price
              ).toLocaleString()}
            </p>

          </div>


          {/* Quick View */}

          <button
            type="button"
            onClick={() =>
              onProductClick(product)
            }
            className="
              rounded-lg
              border
              border-gray-200
              px-3
              py-2
              text-xs
              font-semibold
              text-gray-600
              transition
              hover:border-blue-200
              hover:bg-blue-50
              hover:text-blue-600
            "
          >
            View
          </button>

        </div>


        {/* =========================
            ADD TO CART
        ========================== */}

        <button
          type="button"
          onClick={() =>
            onAddToCart(product)
          }
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-gray-900
            px-4
            py-3.5
            text-sm
            font-bold
            text-white
            shadow-sm
            transition-all
            duration-300
            hover:bg-blue-600
            hover:shadow-lg
            active:scale-[0.98]
            sm:text-base
          "
        >

          <span className="text-base">
            🛒
          </span>

          Add to Cart

        </button>

      </div>

    </div>

  )
}


export default ProductCard

