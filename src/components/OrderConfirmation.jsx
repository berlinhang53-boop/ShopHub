import { useEffect, useState } from "react"
import { getOrder } from "../services/api"


function OrderConfirmation({
  orderId,
  onContinueShopping,
}) {

  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")


  // =========================
  // LOAD ORDER
  // =========================

  useEffect(() => {

    const loadOrder = async () => {

      try {

        setLoading(true)

        const data = await getOrder(orderId)

        setOrder(data)

      }
      catch (error) {

        console.error(
          "Order Fetch Error:",
          error
        )

        setError(
          "Unable to load order details."
        )

      }
      finally {

        setLoading(false)

      }

    }


    if (orderId) {
      loadOrder()
    }

  }, [orderId])


  // =========================
  // LOADING
  // =========================

  if (loading) {

    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

        <div className="text-center">

          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

          <p className="mt-4 text-gray-600">
            Loading order details...
          </p>

        </div>

      </div>
    )
  }


  // =========================
  // ERROR
  // =========================

  if (error || !order) {

    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

        <div className="rounded-2xl bg-white p-8 text-center shadow-lg">

          <h2 className="text-2xl font-bold text-gray-900">
            Order Not Found
          </h2>

          <p className="mt-3 text-gray-500">
            {error || "Something went wrong."}
          </p>

          <button
            onClick={onContinueShopping}
            className="mt-6 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Continue Shopping
          </button>

        </div>

      </div>
    )
  }


  return (

    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:py-16">

      <div className="mx-auto max-w-5xl">

        {/* =========================
            SUCCESS HEADER
        ========================== */}

        <div className="text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">

            <span className="text-3xl">
              ✓
            </span>

          </div>

          <h1 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Order Placed Successfully!
          </h1>

          <p className="mt-3 text-gray-500">
            Thank you for your purchase.
          </p>

          <p className="mt-2 font-semibold text-blue-600">
            Order #{order.id}
          </p>

        </div>


        {/* =========================
            CUSTOMER + ORDER INFO
        ========================== */}

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* CUSTOMER */}

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-gray-900">
              Customer Information
            </h2>

            <div className="mt-5 space-y-4 text-sm">

              <div>
                <p className="text-gray-500">
                  Name
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {order.customerName}
                </p>
              </div>


              <div>
                <p className="text-gray-500">
                  Email
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {order.email}
                </p>
              </div>


              <div>
                <p className="text-gray-500">
                  Phone
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {order.phone}
                </p>
              </div>


              <div>
                <p className="text-gray-500">
                  Address
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {order.address}
                </p>
              </div>

            </div>

          </div>


          {/* ORDER INFO */}

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-gray-900">
              Order Information
            </h2>

            <div className="mt-5 space-y-4 text-sm">

              <div className="flex justify-between gap-4">

                <span className="text-gray-500">
                  Order ID
                </span>

                <span className="font-semibold text-gray-900">
                  #{order.id}
                </span>

              </div>


              <div className="flex justify-between gap-4">

                <span className="text-gray-500">
                  Date
                </span>

                <span className="font-semibold text-gray-900">
                  {new Date(
                    order.orderDate
                  ).toLocaleDateString()}
                </span>

              </div>


              <div className="flex justify-between gap-4">

                <span className="text-gray-500">
                  Status
                </span>

                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                  {order.status}
                </span>

              </div>


              <div className="flex justify-between gap-4 border-t pt-4">

                <span className="font-semibold text-gray-700">
                  Total
                </span>

                <span className="text-xl font-extrabold text-gray-900">
                  Rs.{" "}
                  {order.totalAmount.toLocaleString()}
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            ORDER ITEMS
        ========================== */}

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="text-xl font-bold text-gray-900">
            Ordered Products
          </h2>


          <div className="mt-6 divide-y">

            {order.items.map((item) => (

              <div
                key={item.productId}
                className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center"
              >

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={item.productName}
                  className="h-20 w-20 rounded-xl object-cover"
                />


                {/* PRODUCT */}

                <div className="flex-1">

                  <h3 className="font-bold text-gray-900">
                    {item.productName}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>

                </div>


                {/* PRICE */}

                <div className="text-left sm:text-right">

                  <p className="font-semibold text-gray-500">
                    Rs.{" "}
                    {item.unitPrice.toLocaleString()}
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    Rs.{" "}
                    {item.totalPrice.toLocaleString()}
                  </p>

                </div>

              </div>

            ))}

          </div>


          {/* TOTAL */}

          <div className="mt-5 flex items-center justify-between border-t pt-5">

            <span className="text-lg font-bold text-gray-900">
              Total Amount
            </span>

            <span className="text-2xl font-extrabold text-blue-600">
              Rs.{" "}
              {order.totalAmount.toLocaleString()}
            </span>

          </div>

        </div>


        {/* =========================
            CONTINUE SHOPPING
        ========================== */}

        <div className="mt-8 text-center">

          <button
            onClick={onContinueShopping}
            className="rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600"
          >
            Continue Shopping
          </button>

        </div>

      </div>

    </div>

  )
}


export default OrderConfirmation