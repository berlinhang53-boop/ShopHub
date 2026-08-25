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
 
  

  // =========================
  // WISHLIST CHECK
  // =========================

  const isWishlisted =
    wishlist.some(
      (item) => item.id === product.id
    )


  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = () => {

    onAddToCart(product)

    onClose()

  }


  return (

    <div
      className="
        fixed
        inset-0
        z-[90]
        flex
        items-center
        justify-center
        bg-black/60
        p-3
        backdrop-blur-sm
        sm:p-6
      "
      onClick={onClose}
    >


      {/* =========================
          MODAL
      ========================== */}

      <div
        className="
          relative
          max-h-[92vh]
          w-full
          max-w-5xl
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-2xl
        "
        onClick={(e) =>
          e.stopPropagation()
        }
      >


        {/* =========================
            CLOSE BUTTON
        ========================== */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-gray-200
            bg-white/95
            text-lg
            font-semibold
            text-gray-600
            shadow-md
            backdrop-blur
            transition-all
            hover:scale-105
            hover:bg-gray-100
            hover:text-gray-900
          "
        >
          ✕
        </button>


        {/* =========================
            SCROLL AREA
        ========================== */}

        <div className="max-h-[92vh] overflow-y-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2">


            {/* ==================================================
                LEFT SIDE - PRODUCT IMAGE
            ================================================== */}

            <div className="bg-gray-50 p-4 sm:p-7 lg:p-8">

              <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-[320px]
                    w-full
                    object-cover
                    sm:h-[430px]
                    lg:h-[560px]
                  "
                />


                {/* Image Overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/10
                    via-transparent
                    to-transparent
                  "
                />


                {/* =========================
                    WISHLIST ON IMAGE
                ========================== */}

                <button
                  type="button"
                  onClick={() =>
                    onToggleWishlist(
                      product
                    )
                  }
                  aria-label={
                    isWishlisted
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                  className={`
                    absolute
                    right-4
                    top-4
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white/95
                    text-xl
                    shadow-lg
                    backdrop-blur
                    transition-all
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


                {/* Category */}

                <div className="absolute bottom-4 left-4">

                  <span
                    className="
                      rounded-full
                      bg-white/95
                      px-4
                      py-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-wide
                      text-gray-700
                      shadow-md
                      backdrop-blur
                    "
                  >
                    {product.category}
                  </span>

                </div>

              </div>

            </div>


            {/* ==================================================
                RIGHT SIDE - DETAILS
            ================================================== */}

            <div className="flex flex-col p-5 sm:p-8 lg:p-10">


              {/* =========================
                  CATEGORY
              ========================== */}

              <div>

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-blue-600
                  "
                >
                  {product.category}
                </span>

              </div>


              {/* =========================
                  PRODUCT NAME
              ========================== */}

              <h2
                className="
                  mt-3
                  pr-8
                  text-2xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-gray-900
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                {product.name}
              </h2>


              {/* =========================
                  RATING
              ========================== */}

              <div className="mt-5 flex flex-wrap items-center gap-3">

                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    bg-yellow-50
                    px-3
                    py-1.5
                  "
                >

                  <span>
                    ⭐
                  </span>

                  <span className="text-sm font-bold text-gray-800">
                    {product.rating}
                  </span>

                </div>


                <span className="text-sm text-gray-400">
                  Customer rating
                </span>

              </div>


              {/* =========================
                  PRICE
              ========================== */}

              <div className="mt-7">

                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Price
                </p>

                <p
                  className="
                    mt-1
                    text-3xl
                    font-extrabold
                    tracking-tight
                    text-gray-900
                    sm:text-4xl
                  "
                >
                  Rs.{" "}
                  {Number(
                    product.price
                  ).toLocaleString()}
                </p>

              </div>


              {/* Divider */}

              <div className="my-7 h-px bg-gray-200" />


              {/* =========================
                  DESCRIPTION
              ========================== */}

              <div>

                <h3 className="text-base font-bold text-gray-900">
                  Product Description
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-gray-600
                    sm:text-base
                  "
                >
                  {product.description ||
                    "This is a high-quality product designed to provide an excellent shopping experience. Perfect for everyday use and built with quality in mind."}
                </p>

              </div>


              {/* =========================
                  BENEFITS
              ========================== */}

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">


                {/* Delivery */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-gray-100
                    bg-gray-50
                    p-4
                  "
                >

                  <div className="flex items-start gap-3">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white
                        text-lg
                        shadow-sm
                      "
                    >
                      🚚
                    </div>

                    <div>

                      <p className="text-xs font-medium text-gray-500">
                        Delivery
                      </p>

                      <p className="mt-1 text-sm font-bold text-gray-900">
                        2-4 Days
                      </p>

                    </div>

                  </div>

                </div>


                {/* Shipping */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-gray-100
                    bg-gray-50
                    p-4
                  "
                >

                  <div className="flex items-start gap-3">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white
                        text-lg
                        shadow-sm
                      "
                    >
                      ✓
                    </div>

                    <div>

                      <p className="text-xs font-medium text-gray-500">
                        Shipping
                      </p>

                      <p className="mt-1 text-sm font-bold text-gray-900">
                        Free Shipping
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* =========================
                  ACTIONS
              ========================== */}

              <div className="mt-8 flex gap-3">


                {/* Wishlist */}

                <button
                  type="button"
                  onClick={() =>
                    onToggleWishlist(
                      product
                    )
                  }
                  className={`
                    flex
                    h-13
                    w-13
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    text-xl
                    transition-all
                    hover:scale-105
                    active:scale-95
                    ${
                      isWishlisted
                        ? "border-red-200 bg-red-50 text-red-500"
                        : "border-gray-200 bg-gray-50 text-gray-500 hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                    }
                  `}
                >

                  {isWishlisted
                    ? "❤️"
                    : "♡"}

                </button>


                {/* Add To Cart */}

                <button
                  type="button"
                  onClick={
                    handleAddToCart
                  }
                  className="
                    flex
                    min-h-13
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gray-900
                    px-5
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

                  <span className="text-lg">
                    🛒
                  </span>

                  Add to Cart

                </button>

              </div>


              {/* =========================
                  TRUST MESSAGE
              ========================== */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-50
                  px-4
                  py-3
                "
              >

                <span className="text-sm">
                  🔒
                </span>

                <p className="text-xs font-medium text-blue-700 sm:text-sm">
                  Secure checkout & reliable delivery
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}


export default ProductDetails

