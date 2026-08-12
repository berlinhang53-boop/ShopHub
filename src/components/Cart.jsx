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

  const shipping =
    subtotal === 0
      ? 0
      : subtotal >= 5000
        ? 0
        : 250


  // =========================
  // TOTAL
  // =========================

  const total = subtotal + shipping


  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-gray-50">

      {/* =========================
          HEADER
      ========================== */}

      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

          <div>

            <p className="text-sm font-medium text-blue-600">
              SHOPPING CART
            </p>

            <h1 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
              Your Cart
            </h1>

          </div>


          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg transition hover:bg-gray-200"
          >
            ✕
          </button>

        </div>

      </header>


      {/* =========================
          CONTENT
      ========================== */}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">

        {cart.length === 0 ? (

          /* =========================
              EMPTY CART
          ========================== */

          <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-5xl">
              🛒
            </div>

            <h2 className="mt-6 text-2xl font-extrabold text-gray-900">
              Your cart is empty
            </h2>

            <p className="mt-2 max-w-md text-gray-500">
              Looks like you haven't added anything to your cart yet.
            </p>

            <button
              onClick={onClose}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Continue Shopping
            </button>

          </div>

        ) : (

          /* =========================
              CART CONTENT
          ========================== */

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">


            {/* =========================
                CART ITEMS
            ========================== */}

            <div className="lg:col-span-2">

              <div className="rounded-2xl border border-gray-200 bg-white">

                <div className="border-b border-gray-200 px-5 py-4 sm:px-6">

                  <h2 className="font-bold text-gray-900">
                    Cart Items
                    <span className="ml-2 text-sm font-normal text-gray-500">
                      ({cart.length})
                    </span>
                  </h2>

                </div>


                <div className="divide-y divide-gray-200">

                  {cart.map((item) => (

                    <div
                      key={item.id}
                      className="p-5 sm:p-6"
                    >

                      <div className="flex gap-4">


                        {/* IMAGE */}

                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-32 sm:w-32"
                        />


                        {/* INFO */}

                        <div className="min-w-0 flex-1">

                          <p className="text-xs font-semibold uppercase text-blue-600">
                            {item.category}
                          </p>

                          <h3 className="mt-1 truncate text-base font-bold text-gray-900 sm:text-lg">
                            {item.name}
                          </h3>


                          <p className="mt-2 font-bold text-gray-900">
                            Rs. {item.price.toLocaleString()}
                          </p>


                          {/* CONTROLS */}

                          <div className="mt-4 flex flex-wrap items-center gap-3">

                            <div className="flex items-center rounded-lg border border-gray-200">

                              <button
                                onClick={() =>
                                  onDecrease(item.id)
                                }
                                className="flex h-9 w-9 items-center justify-center text-lg hover:bg-gray-100"
                              >
                                −
                              </button>

                              <span className="w-10 text-center text-sm font-semibold">
                                {item.quantity}
                              </span>

                              <button
                                onClick={() =>
                                  onIncrease(item.id)
                                }
                                className="flex h-9 w-9 items-center justify-center text-lg hover:bg-gray-100"
                              >
                                +
                              </button>

                            </div>


                            {/* REMOVE */}

                            <button
                              onClick={() =>
                                onRemove(item.id)
                              }
                              className="text-sm font-medium text-red-500 hover:text-red-600"
                            >
                              Remove
                            </button>

                          </div>

                        </div>


                        {/* ITEM TOTAL */}

                        <div className="hidden text-right sm:block">

                          <p className="text-sm text-gray-500">
                            Total
                          </p>

                          <p className="mt-1 font-bold text-gray-900">
                            Rs.{" "}
                            {(
                              item.price *
                              item.quantity
                            ).toLocaleString()}
                          </p>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>


              {/* FREE SHIPPING MESSAGE */}

              <div className="mt-4 rounded-xl bg-blue-50 p-4">

                <p className="text-sm font-medium text-blue-700">

                  {subtotal >= 5000
                    ? "🎉 You qualify for free shipping!"
                    : `Add Rs. ${(5000 - subtotal).toLocaleString()} more to get free shipping.`}

                </p>

              </div>

            </div>


            {/* =========================
                ORDER SUMMARY
            ========================== */}

            <div>

              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                <h2 className="text-lg font-extrabold text-gray-900">
                  Order Summary
                </h2>


                <div className="mt-6 space-y-4">

                  <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-semibold text-gray-900">
                      Rs. {subtotal.toLocaleString()}
                    </span>

                  </div>


                  <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                      Shipping
                    </span>

                    <span className="font-semibold text-gray-900">

                      {shipping === 0
                        ? "FREE"
                        : `Rs. ${shipping.toLocaleString()}`}

                    </span>

                  </div>


                  <div className="h-px bg-gray-200" />


                  <div className="flex items-center justify-between">

                    <span className="font-bold text-gray-900">
                      Total
                    </span>

                    <span className="text-xl font-extrabold text-gray-900">
                      Rs. {total.toLocaleString()}
                    </span>

                  </div>

                </div>


                {/* CHECKOUT */}

                <button
                  onClick={onCheckout}
                  className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                >
                  Proceed to Checkout
                </button>


                <button
                  onClick={onClose}
                  className="mt-3 w-full rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Continue Shopping
                </button>


                {/* SECURE */}

                <div className="mt-6 text-center">

                  <p className="text-xs text-gray-400">
                    🔒 Secure checkout
                  </p>

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