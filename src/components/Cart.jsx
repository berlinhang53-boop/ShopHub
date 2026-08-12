function Cart({
  cart,
  onClose,
  onRemove,
  onIncrease,
  onDecrease,
}) {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  )

  return (
    <div className="fixed inset-0 z-[100]">

      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />


      {/* Cart */}
      <div className="absolute right-0 top-0 flex h-full w-full flex-col bg-white shadow-2xl sm:max-w-md">

        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-4 sm:px-6">

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Your Cart
            </h2>

            <p className="text-sm text-gray-500">
              {cart.length} item{cart.length !== 1 && "s"}
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-lg hover:bg-gray-200"
          >
            ✕
          </button>

        </div>


        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">

          {cart.length === 0 ? (

            <div className="flex h-full flex-col items-center justify-center text-center">

              <div className="text-5xl">
                🛒
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-800">
                Your cart is empty
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Add some products to get started.
              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex gap-3 border-b pb-5"
                >

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 shrink-0 rounded-xl object-cover"
                  />


                  {/* Details */}
                  <div className="min-w-0 flex-1">

                    <div className="flex justify-between gap-2">

                      <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
                        {item.name}
                      </h3>

                      <button
                        onClick={() =>
                          onRemove(item.id)
                        }
                        className="shrink-0 text-sm text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>

                    </div>


                    <p className="mt-1 text-sm font-bold text-gray-900">
                      Rs. {item.price.toLocaleString()}
                    </p>


                    {/* Quantity */}
                    <div className="mt-3 flex items-center gap-3">

                      <button
                        onClick={() =>
                          onDecrease(item.id)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 font-bold hover:bg-gray-200"
                      >
                        −
                      </button>

                      <span className="w-5 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          onIncrease(item.id)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 font-bold hover:bg-gray-200"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>


        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t bg-gray-50 px-5 py-5 sm:px-6">

            <div className="flex items-center justify-between">

              <span className="font-medium text-gray-600">
                Total
              </span>

              <span className="text-xl font-bold text-gray-900">
                Rs. {total.toLocaleString()}
              </span>

            </div>


            <button
              className="mt-4 w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Proceed to Checkout
            </button>

          </div>
        )}

      </div>

    </div>
  )
}

export default Cart