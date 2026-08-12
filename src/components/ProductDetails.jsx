// function ProductDetails({
//   product,
//   onClose,
//   onAddToCart,
// }) {
//   if (!product) {
//     return null
//   }

//   const handleAddToCart = () => {
//     onAddToCart(product)
//     onClose()
//   }

//   return (
//     <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4">

//       {/* =========================
//           MODAL
//       ========================== */}

//       <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl">


//         {/* =========================
//             CLOSE BUTTON
//         ========================== */}

//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-md transition hover:bg-gray-100"
//         >
//           ✕
//         </button>


//         {/* =========================
//             MAIN CONTENT
//         ========================== */}

//         <div className="grid grid-cols-1 md:grid-cols-2">


//           {/* =========================
//               PRODUCT IMAGE
//           ========================== */}

//           <div className="bg-gray-100 p-5 sm:p-8">

//             <img
//               src={product.image}
//               alt={product.name}
//               className="h-72 w-full rounded-xl object-cover sm:h-96 md:h-full md:min-h-[450px]"
//             />

//           </div>


//           {/* =========================
//               PRODUCT INFORMATION
//           ========================== */}

//           <div className="flex flex-col p-6 sm:p-8">


//             {/* Category */}

//             <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
//               {product.category}
//             </p>


//             {/* Name */}

//             <h2 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl">
//               {product.name}
//             </h2>


//             {/* Rating */}

//             <div className="mt-4 flex items-center gap-2">

//               <span className="text-lg">
//                 ⭐
//               </span>

//               <span className="font-semibold text-gray-700">
//                 {product.rating}
//               </span>

//               <span className="text-sm text-gray-400">
//                 Customer Rating
//               </span>

//             </div>


//             {/* Price */}

//             <p className="mt-6 text-2xl font-extrabold text-gray-900">
//               Rs. {product.price.toLocaleString()}
//             </p>


//             {/* Divider */}

//             <div className="my-6 h-px bg-gray-200" />


//             {/* Description */}

//             <h3 className="font-bold text-gray-900">
//               Product Description
//             </h3>

//             <p className="mt-3 leading-7 text-gray-600">
//               {product.description ||
//                 "This is a high-quality product designed to provide an excellent shopping experience. Perfect for everyday use and built with quality in mind."}
//             </p>


//             {/* =========================
//                 FEATURES
//             ========================== */}

//             <div className="mt-6 grid grid-cols-2 gap-3">

//               <div className="rounded-xl bg-gray-50 p-3">

//                 <p className="text-xs text-gray-500">
//                   Delivery
//                 </p>

//                 <p className="mt-1 text-sm font-semibold text-gray-900">
//                   2-4 Days
//                 </p>

//               </div>


//               <div className="rounded-xl bg-gray-50 p-3">

//                 <p className="text-xs text-gray-500">
//                   Shipping
//                 </p>

//                 <p className="mt-1 text-sm font-semibold text-gray-900">
//                   Free
//                 </p>

//               </div>

//             </div>


//             {/* =========================
//                 ADD TO CART
//             ========================== */}

//             <button
//               onClick={handleAddToCart}
//               className="mt-8 w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
//             >
//               🛒 Add to Cart
//             </button>

//           </div>

//         </div>

//       </div>

//     </div>
//   )
// }

// export default ProductDetails



























function ProductDetails({
  product,
  onClose,
  onAddToCart,
  wishlist,
  onToggleWishlist,
}) {

  if (!product) {
    return null
  }


  // Check wishlist

  const isWishlisted =
    wishlist.some(
      (item) => item.id === product.id
    )


  // Add to cart

  const handleAddToCart = () => {

    onAddToCart(product)

    onClose()

  }


  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4">


      {/* =========================
          MODAL
      ========================== */}

      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl">


        {/* Close */}

        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-md transition hover:bg-gray-100"
        >
          ✕
        </button>


        {/* Main */}

        <div className="grid grid-cols-1 md:grid-cols-2">


          {/* =========================
              IMAGE
          ========================== */}

          <div className="bg-gray-100 p-5 sm:p-8">

            <div className="relative">

              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full rounded-xl object-cover sm:h-96 md:h-full md:min-h-[450px]"
              />


              {/* Wishlist */}

              <button
                onClick={() =>
                  onToggleWishlist(
                    product
                  )
                }
                className={`absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-lg transition hover:scale-110 ${
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

          </div>


          {/* =========================
              DETAILS
          ========================== */}

          <div className="flex flex-col p-6 sm:p-8">


            {/* Category */}

            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              {product.category}
            </p>


            {/* Name */}

            <h2 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              {product.name}
            </h2>


            {/* Rating */}

            <div className="mt-4 flex items-center gap-2">

              <span className="text-lg">
                ⭐
              </span>

              <span className="font-semibold text-gray-700">
                {product.rating}
              </span>

              <span className="text-sm text-gray-400">
                Customer Rating
              </span>

            </div>


            {/* Price */}

            <p className="mt-6 text-2xl font-extrabold text-gray-900">
              Rs. {product.price.toLocaleString()}
            </p>


            <div className="my-6 h-px bg-gray-200" />


            {/* Description */}

            <h3 className="font-bold text-gray-900">
              Product Description
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              {product.description ||
                "This is a high-quality product designed to provide an excellent shopping experience. Perfect for everyday use and built with quality in mind."}
            </p>


            {/* Features */}

            <div className="mt-6 grid grid-cols-2 gap-3">

              <div className="rounded-xl bg-gray-50 p-3">

                <p className="text-xs text-gray-500">
                  Delivery
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  2-4 Days
                </p>

              </div>


              <div className="rounded-xl bg-gray-50 p-3">

                <p className="text-xs text-gray-500">
                  Shipping
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  Free
                </p>

              </div>

            </div>


            {/* Buttons */}

            <div className="mt-8 flex gap-3">

              {/* Wishlist */}

              <button
                onClick={() =>
                  onToggleWishlist(
                    product
                  )
                }
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-xl transition ${
                  isWishlisted
                    ? "border-red-200 bg-red-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >

                {isWishlisted
                  ? "❤️"
                  : "🤍"}

              </button>


              {/* Cart */}

              <button
                onClick={
                  handleAddToCart
                }
                className="flex-1 rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                🛒 Add to Cart
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}


export default ProductDetails