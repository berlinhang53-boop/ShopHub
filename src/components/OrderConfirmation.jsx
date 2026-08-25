
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
        setError("")

        const data = await getOrder(orderId)

        setOrder(data)
      } catch (error) {
        console.error("Order Fetch Error:", error)

        setError("Unable to load order details.")
      } finally {
        setLoading(false)
      }
    }

    if (orderId) {
      loadOrder()
    }
  }, [orderId])

  // =========================
  // STATUS STYLE
  // =========================

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700"

      case "Confirmed":
        return "bg-blue-100 text-blue-700"

      case "Shipped":
        return "bg-purple-100 text-purple-700"

      case "Delivered":
        return "bg-green-100 text-green-700"

      case "Cancelled":
        return "bg-red-100 text-red-700"

      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

          <p className="mt-5 text-sm font-medium text-gray-600">
            Loading your order...
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
        <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-2xl">
            ✕
          </div>

          <h2 className="mt-5 text-2xl font-extrabold text-gray-900">
            Order Not Found
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            {error || "Something went wrong while loading your order."}
          </p>

          <button
            onClick={onContinueShopping}
            className="mt-7 rounded-xl bg-gray-900 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:py-16">

      <div className="mx-auto max-w-6xl">

        {/* =========================
            SUCCESS HEADER
        ========================== */}

        <div className="text-center">

          {/* Success Icon */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-2xl font-bold text-white">
              ✓
            </div>
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-green-600">
            Order Confirmed
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Order Placed Successfully!
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Thank you for shopping with ShopHub. Your order has been
            received and is now being processed.
          </p>

          {/* Order ID */}

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2.5">
            <span className="text-sm text-gray-500">
              Order
            </span>

            <span className="text-sm font-bold text-blue-600">
              #{order.id}
            </span>
          </div>

        </div>


        {/* =========================
            CUSTOMER + ORDER INFO
        ========================== */}

        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          {/* =========================
              CUSTOMER INFORMATION
          ========================== */}

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-md sm:p-7">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                👤
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Customer
                </p>

                <h2 className="text-lg font-extrabold text-gray-900">
                  Customer Information
                </h2>
              </div>

            </div>


            <div className="mt-7 space-y-5">

              {/* NAME */}

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Full Name
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {order.customerName}
                </p>
              </div>


              {/* EMAIL */}

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Email
                </p>

                <p className="mt-1 break-all font-semibold text-gray-900">
                  {order.email}
                </p>
              </div>


              {/* PHONE */}

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Phone
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {order.phone}
                </p>
              </div>


              {/* ADDRESS */}

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Delivery Address
                </p>

                <p className="mt-1 leading-6 font-semibold text-gray-900">
                  {order.address}
                </p>
              </div>

            </div>

          </div>


          {/* =========================
              ORDER INFORMATION
          ========================== */}

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-md sm:p-7">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-xl">
                📦
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
                  Summary
                </p>

                <h2 className="text-lg font-extrabold text-gray-900">
                  Order Information
                </h2>
              </div>

            </div>


            <div className="mt-7 space-y-5">

              {/* ORDER ID */}

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500">
                  Order ID
                </span>

                <span className="font-bold text-gray-900">
                  #{order.id}
                </span>
              </div>


              {/* DATE */}

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500">
                  Order Date
                </span>

                <span className="text-right font-semibold text-gray-900">
                  {new Date(
                    order.orderDate
                  ).toLocaleDateString()}
                </span>
              </div>


              {/* STATUS */}

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500">
                  Status
                </span>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${getStatusClass(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>


              {/* PAYMENT */}

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500">
                  Payment
                </span>

                <span className="font-semibold text-gray-900">
                  Cash on Delivery
                </span>
              </div>


              {/* TOTAL */}

              <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-5">
                <span className="font-bold text-gray-700">
                  Total Amount
                </span>

                <span className="text-xl font-extrabold text-blue-600">
                  Rs.{" "}
                  {Number(
                    order.totalAmount
                  ).toLocaleString()}
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* =========================
            ORDER ITEMS
        ========================== */}

        <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Your Purchase
              </p>

              <h2 className="mt-1 text-xl font-extrabold text-gray-900">
                Ordered Products
              </h2>

            </div>

            <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
              {order.items.length}{" "}
              {order.items.length === 1
                ? "Item"
                : "Items"}
            </span>

          </div>


          <div className="mt-6 divide-y divide-gray-200">

            {order.items.map((item) => (

              <div
                key={item.productId}
                className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center"
              >

                {/* IMAGE */}

                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-gray-100">

                  <img
                    src={item.image}
                    alt={item.productName}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />

                </div>


                {/* PRODUCT INFO */}

                <div className="min-w-0 flex-1">

                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    Product
                  </p>

                  <h3 className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                    {item.productName}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Quantity:{" "}
                    <span className="font-semibold text-gray-700">
                      {item.quantity}
                    </span>
                  </p>

                </div>


                {/* PRICE */}

                <div className="border-t border-gray-100 pt-3 text-left sm:border-0 sm:pt-0 sm:text-right">

                  <p className="text-sm text-gray-500">
                    Rs.{" "}
                    {Number(
                      item.unitPrice
                    ).toLocaleString()}{" "}
                    each
                  </p>

                  <p className="mt-1 text-lg font-extrabold text-gray-900">
                    Rs.{" "}
                    {Number(
                      item.totalPrice
                    ).toLocaleString()}
                  </p>

                </div>

              </div>

            ))}

          </div>


          {/* =========================
              TOTAL
          ========================== */}

          <div className="mt-5 flex flex-col gap-2 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Total Amount
              </p>

              <p className="text-xs text-gray-400">
                Including applicable shipping charges
              </p>

            </div>

            <p className="text-2xl font-extrabold text-gray-900">
              Rs.{" "}
              {Number(
                order.totalAmount
              ).toLocaleString()}
            </p>

          </div>

        </div>


        {/* =========================
            DELIVERY MESSAGE
        ========================== */}

        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">

          <div className="flex gap-3">

            <div className="text-xl">
              🚚
            </div>

            <div>

              <p className="font-bold text-blue-900">
                What happens next?
              </p>

              <p className="mt-1 text-sm leading-6 text-blue-700">
                We'll process your order and contact you before
                delivery. Please keep your phone available for
                delivery updates.
              </p>

            </div>

          </div>

        </div>


        {/* =========================
            CONTINUE SHOPPING
        ========================== */}

        <div className="mt-8 flex justify-center">

          <button
            onClick={onContinueShopping}
            className="rounded-xl bg-gray-900 px-8 py-3.5 font-semibold text-white shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-blue-200"
          >
            ← Continue Shopping
          </button>

        </div>


        {/* FOOTER NOTE */}

        <p className="mt-6 text-center text-xs text-gray-400">
          Thank you for choosing ShopHub ❤️
        </p>

      </div>

    </div>
  )
}

export default OrderConfirmation

