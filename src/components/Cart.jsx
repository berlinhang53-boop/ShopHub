function Cart({
  cart,
  onClose,
  onRemove,
  onIncrease,
  onDecrease,
  onCheckout,
}) {
  // =========================
  // CALCULATE SUBTOTAL
  // =========================

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )


  // =========================
  // SHIPPING
  // =========================

  const freeShippingLimit = 5000

  const shipping =
    subtotal === 0
      ? 0
      : subtotal >= freeShippingLimit
        ? 0
        : 250


  // =========================
  // TOTAL
  // =========================

  const total = subtotal + shipping


  // =========================
  // FREE SHIPPING PROGRESS
  // =========================

  const shippingProgress = Math.min(
    (subtotal / freeShippingLimit) * 100,
    100
  )


  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-gray-50">


      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          <div>

            <div className="flex items-center gap-2">

              <span className="text-xl">
                🛒
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                Shopping Cart
              </p>

            </div>


            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Your Cart
            </h1>

          </div>


          {/* Close */}

          <button
            onClick={onClose}
            aria-label="Close cart"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-gray-600 shadow-sm transition duration-200 hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900"
          >
            ✕
          </button>

        </div>

      </header>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">


        {/* =====================================================
            EMPTY CART
        ====================================================== */}

        {cart.length === 0 ? (

          <div className="flex min-h-[65vh] flex-col items-center justify-center text-center">

            {/* Icon */}

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-50 text-6xl shadow-inner">
              🛒
            </div>


            <p className="mt-8 text-sm font-bold uppercase tracking-wider text-blue-600">
              Your Shopping Cart
            </p>


            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900">
              Your cart is empty
            </h2>


            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
              Looks like you haven't added anything to your cart yet.
              Discover our products and find something you love.
            </p>


            <button
              onClick={onClose}
              className="mt-8 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-100 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
            >
              ← Continue Shopping
            </button>

          </div>

        ) : (

          /* =====================================================
             CART CONTENT
          ====================================================== */

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">


            {/* =================================================
                CART ITEMS
            ================================================= */}

            <div className="lg:col-span-2">


              {/* Cart Items Card */}

              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">


                {/* Card Header */}

                <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5 sm:px-6">

                  <div>

                    <h2 className="text-lg font-extrabold text-gray-900">
                      Cart Items
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Review your selected products
                    </p>

                  </div>


                  <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-600">
                    {cart.length}{" "}
                    {cart.length === 1
                      ? "Item"
                      : "Items"}
                  </span>

                </div>


                {/* Products */}

                <div className="divide-y divide-gray-100">

                  {cart.map((item) => (

                    <div
                      key={item.id}
                      className="p-5 transition duration-200 hover:bg-gray-50/70 sm:p-6"
                    >

                      <div className="flex gap-4 sm:gap-5">


                        {/* =========================
                            IMAGE
                        ========================== */}

                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-32 sm:w-32">

                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                          />

                        </div>


                        {/* =========================
                            PRODUCT INFO
                        ========================== */}

                        <div className="min-w-0 flex-1">

                          {/* Category */}

                          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                            {item.category}
                          </p>


                          {/* Product Name */}

                          <h3 className="mt-1 line-clamp-2 text-base font-bold text-gray-900 sm:text-lg">
                            {item.name}
                          </h3>


                          {/* Price */}

                          <p className="mt-2 text-base font-extrabold text-gray-900">
                            Rs.{" "}
                            {Number(
                              item.price
                            ).toLocaleString()}
                          </p>


                          {/* Quantity + Remove */}

                          <div className="mt-4 flex flex-wrap items-center gap-3">


                            {/* Quantity */}

                            <div className="flex items-center overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">

                              <button
                                onClick={() =>
                                  onDecrease(
                                    item.id
                                  )
                                }
                                aria-label="Decrease quantity"
                                className="flex h-9 w-9 items-center justify-center text-lg font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                              >
                                −
                              </button>


                              <span className="flex h-9 w-10 items-center justify-center border-x border-gray-200 text-sm font-bold text-gray-900">
                                {item.quantity}
                              </span>


                              <button
                                onClick={() =>
                                  onIncrease(
                                    item.id
                                  )
                                }
                                aria-label="Increase quantity"
                                className="flex h-9 w-9 items-center justify-center text-lg font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                              >
                                +
                              </button>

                            </div>


                            {/* Remove */}

                            <button
                              onClick={() =>
                                onRemove(
                                  item.id
                                )
                              }
                              className="rounded-lg px-2 py-1 text-sm font-semibold text-red-500 transition hover:bg-red-50 hover:text-red-600"
                            >
                              Remove
                            </button>

                          </div>

                        </div>


                        {/* =========================
                            ITEM TOTAL
                        ========================== */}

                        <div className="hidden text-right sm:block">

                          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                            Total
                          </p>

                          <p className="mt-2 text-base font-extrabold text-gray-900">

                            Rs.{" "}

                            {(
                              item.price *
                              item.quantity
                            ).toLocaleString()}

                          </p>

                        </div>

                      </div>


                      {/* Mobile Item Total */}

                      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 sm:hidden">

                        <span className="text-xs font-medium text-gray-400">
                          Item Total
                        </span>

                        <span className="font-bold text-gray-900">
                          Rs.{" "}
                          {(
                            item.price *
                            item.quantity
                          ).toLocaleString()}
                        </span>

                      </div>

                    </div>

                  ))}

                </div>

              </div>


              {/* =================================================
                  FREE SHIPPING CARD
              ================================================== */}

              <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 sm:p-6">

                <div className="flex items-start gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                    🚚
                  </div>


                  <div className="flex-1">

                    {subtotal >= freeShippingLimit ? (

                      <>
                        <p className="font-bold text-green-700">
                          🎉 You've unlocked free shipping!
                        </p>

                        <p className="mt-1 text-sm text-green-600">
                          Your order qualifies for free delivery.
                        </p>
                      </>

                    ) : (

                      <>
                        <p className="font-bold text-gray-900">
                          Free Shipping
                        </p>

                        <p className="mt-1 text-sm text-gray-600">

                          Add{" "}

                          <span className="font-bold text-blue-600">
                            Rs.{" "}
                            {(
                              freeShippingLimit -
                              subtotal
                            ).toLocaleString()}
                          </span>{" "}

                          more to get free shipping.

                        </p>
                      </>

                    )}


                    {/* Progress Bar */}

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">

                      <div
                        className="h-full rounded-full bg-blue-600 transition-all duration-500"
                        style={{
                          width: `${shippingProgress}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>

              </div>


              {/* Continue Shopping */}

              <button
                onClick={onClose}
                className="mt-5 hidden items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-blue-600 sm:flex"
              >
                ← Continue Shopping
              </button>

            </div>


            {/* =================================================
                ORDER SUMMARY
            ================================================= */}

            <div>


              <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">


                {/* Summary Header */}

                <div className="border-b border-gray-100 bg-gray-50/70 px-5 py-5 sm:px-6">

                  <h2 className="text-lg font-extrabold text-gray-900">
                    Order Summary
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Review your order total
                  </p>

                </div>


                {/* Summary Body */}

                <div className="p-5 sm:p-6">


                  <div className="space-y-4">


                    {/* Subtotal */}

                    <div className="flex items-center justify-between text-sm">

                      <span className="text-gray-500">
                        Subtotal
                      </span>

                      <span className="font-semibold text-gray-900">
                        Rs.{" "}
                        {subtotal.toLocaleString()}
                      </span>

                    </div>


                    {/* Shipping */}

                    <div className="flex items-center justify-between text-sm">

                      <span className="text-gray-500">
                        Shipping
                      </span>

                      <span
                        className={`font-semibold ${
                          shipping === 0
                            ? "text-green-600"
                            : "text-gray-900"
                        }`}
                      >

                        {shipping === 0
                          ? "FREE"
                          : `Rs. ${shipping.toLocaleString()}`}

                      </span>

                    </div>


                    {/* Free shipping info */}

                    {shipping === 0 && (

                      <div className="rounded-lg bg-green-50 px-3 py-2">

                        <p className="text-xs font-medium text-green-700">
                          ✓ Free shipping applied
                        </p>

                      </div>

                    )}


                    <div className="h-px bg-gray-200" />


                    {/* Total */}

                    <div className="flex items-end justify-between">

                      <div>

                        <p className="font-bold text-gray-900">
                          Total
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          Inclusive of shipping
                        </p>

                      </div>


                      <span className="text-2xl font-extrabold tracking-tight text-gray-900">
                        Rs.{" "}
                        {total.toLocaleString()}
                      </span>

                    </div>

                  </div>


                  {/* Checkout */}

                  <button
                    onClick={onCheckout}
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-100 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
                  >
                    Proceed to Checkout
                    <span>→</span>
                  </button>


                  {/* Continue */}

                  <button
                    onClick={onClose}
                    className="mt-3 w-full rounded-xl border border-gray-200 bg-white py-3 font-semibold text-gray-700 transition duration-200 hover:border-gray-300 hover:bg-gray-50"
                  >
                    Continue Shopping
                  </button>


                  {/* Trust */}

                  <div className="mt-6 border-t border-gray-100 pt-5">

                    <div className="grid grid-cols-2 gap-3 text-center">

                      <div className="rounded-xl bg-gray-50 p-3">

                        <p className="text-lg">
                          🔒
                        </p>

                        <p className="mt-1 text-xs font-semibold text-gray-600">
                          Secure Checkout
                        </p>

                      </div>


                      <div className="rounded-xl bg-gray-50 p-3">

                        <p className="text-lg">
                          🚚
                        </p>

                        <p className="mt-1 text-xs font-semibold text-gray-600">
                          Fast Delivery
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        )}

      </main>

    </div>
  )
}


export default Cart