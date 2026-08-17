
import { useEffect, useState } from "react"

import {
  getOrders,
  updateOrderStatus,
} from "../services/api"


function AdminOrders() {

  // =========================
  // ORDERS
  // =========================

  const [orders, setOrders] =
    useState([])


  // =========================
  // LOADING
  // =========================

  const [loading, setLoading] =
    useState(true)


  // =========================
  // ERROR
  // =========================

  const [error, setError] =
    useState("")


  // =========================
  // SELECTED ORDER
  // =========================

  const [selectedOrder, setSelectedOrder] =
    useState(null)


  // =========================
  // STATUS UPDATING
  // =========================

  const [updatingOrderId, setUpdatingOrderId] =
    useState(null)


  // =========================
  // SUCCESS MESSAGE
  // =========================

  const [successMessage, setSuccessMessage] =
    useState("")


  // =========================
  // LOAD ORDERS
  // =========================

  const loadOrders = async () => {

    try {

      setLoading(true)

      setError("")


      const data =
        await getOrders()


      setOrders(data)

    }
    catch (error) {

      console.error(
        "Orders API Error:",
        error
      )


      setError(
        error.message ||
        "Unable to load orders."
      )

    }
    finally {

      setLoading(false)

    }

  }


  // =========================
  // LOAD ORDERS ON PAGE OPEN
  // =========================

  useEffect(() => {

    loadOrders()

  }, [])


  // =========================
  // UPDATE ORDER STATUS
  // =========================

  const handleStatusChange = async (
    orderId,
    newStatus
  ) => {

    try {

      setUpdatingOrderId(
        orderId
      )

      setError("")

      setSuccessMessage("")


      // =========================
      // UPDATE DATABASE
      // =========================

      await updateOrderStatus(
        orderId,
        newStatus
      )


      // =========================
      // UPDATE ORDERS UI
      // =========================

      setOrders(
        (currentOrders) =>
          currentOrders.map(
            (order) =>
              order.id === orderId
                ? {
                    ...order,
                    status: newStatus,
                  }
                : order
          )
      )


      // =========================
      // UPDATE SELECTED ORDER
      // =========================

      setSelectedOrder(
        (currentOrder) =>
          currentOrder &&
          currentOrder.id === orderId
            ? {
                ...currentOrder,
                status: newStatus,
              }
            : currentOrder
      )


      // =========================
      // SUCCESS MESSAGE
      // =========================

      setSuccessMessage(
        `Order #${orderId} status updated to ${newStatus}.`
      )


      // Remove message after 3 seconds

      setTimeout(() => {

        setSuccessMessage("")

      }, 3000)

    }
    catch (error) {

      console.error(
        "Status Update Error:",
        error
      )


      setError(
        error.message ||
        "Failed to update order status."
      )

    }
    finally {

      setUpdatingOrderId(
        null
      )

    }

  }


  // =========================
  // STATUS BADGE STYLE
  // =========================

  const getStatusClass = (
    status
  ) => {

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
  // LOADING SCREEN
  // =========================

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-gray-100">

        <p className="text-lg font-semibold text-gray-600">
          Loading orders...
        </p>

      </div>

    )

  }


  // =========================
  // MAIN PAGE
  // =========================

  return (

    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6">

      <div className="mx-auto max-w-7xl">


        {/* =========================
            HEADER
        ========================== */}

        <div className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            ADMIN PANEL
          </p>


          <h1 className="mt-1 text-3xl font-extrabold text-gray-900">
            Orders
          </h1>


          <p className="mt-2 text-gray-500">
            Manage customer orders and view order details.
          </p>

        </div>


        {/* =========================
            ERROR MESSAGE
        ========================== */}

        {error && (

          <div className="mb-6 flex items-center justify-between rounded-xl border border-red-200 bg-red-50 px-4 py-3">

            <p className="text-sm font-medium text-red-700">
              {error}
            </p>


            <button
              onClick={() =>
                setError("")
              }
              className="font-bold text-red-500 hover:text-red-700"
            >
              ✕
            </button>

          </div>

        )}


        {/* =========================
            SUCCESS MESSAGE
        ========================== */}

        {successMessage && (

          <div className="mb-6 flex items-center justify-between rounded-xl border border-green-200 bg-green-50 px-4 py-3">

            <p className="text-sm font-medium text-green-700">
              ✓ {successMessage}
            </p>


            <button
              onClick={() =>
                setSuccessMessage("")
              }
              className="font-bold text-green-500 hover:text-green-700"
            >
              ✕
            </button>

          </div>

        )}


        {/* =========================
            NO ORDERS
        ========================== */}

        {orders.length === 0 ? (

          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">

            <p className="text-lg font-semibold text-gray-700">
              No orders found
            </p>


            <p className="mt-2 text-sm text-gray-500">
              Customer orders will appear here.
            </p>

          </div>

        ) : (

          /* =========================
             ORDERS TABLE
          ========================== */

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

            <div className="overflow-x-auto">

              <table className="w-full min-w-[900px]">


                {/* =========================
                    TABLE HEADER
                ========================== */}

                <thead className="border-b bg-gray-50">

                  <tr>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      Order ID
                    </th>


                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      Customer
                    </th>


                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      Date
                    </th>


                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      Total
                    </th>


                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      Status
                    </th>


                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      Action
                    </th>

                  </tr>

                </thead>


                {/* =========================
                    TABLE BODY
                ========================== */}

                <tbody className="divide-y">

                  {orders.map(
                    (order) => (

                      <tr
                        key={
                          order.id
                        }
                        className="transition hover:bg-gray-50"
                      >


                        {/* =========================
                            ORDER ID
                        ========================== */}

                        <td className="px-6 py-5">

                          <span className="font-bold text-gray-900">
                            #{order.id}
                          </span>

                        </td>


                        {/* =========================
                            CUSTOMER
                        ========================== */}

                        <td className="px-6 py-5">

                          <p className="font-semibold text-gray-900">
                            {order.customerName}
                          </p>


                          <p className="mt-1 text-sm text-gray-500">
                            {order.email}
                          </p>

                        </td>


                        {/* =========================
                            DATE
                        ========================== */}

                        <td className="px-6 py-5 text-sm text-gray-600">

                          {new Date(
                            order.orderDate
                          ).toLocaleDateString()}

                        </td>


                        {/* =========================
                            TOTAL
                        ========================== */}

                        <td className="px-6 py-5 font-bold text-gray-900">

                          Rs.{" "}

                          {Number(
                            order.totalAmount
                          ).toLocaleString()}

                        </td>


                        {/* =========================
                            STATUS
                        ========================== */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-3">


                            <select

                              value={
                                order.status
                              }

                              disabled={
                                updatingOrderId ===
                                order.id
                              }

                              onChange={(e) =>
                                handleStatusChange(
                                  order.id,
                                  e.target.value
                                )
                              }

                              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60"
                            >

                              <option value="Pending">
                                Pending
                              </option>


                              <option value="Confirmed">
                                Confirmed
                              </option>


                              <option value="Shipped">
                                Shipped
                              </option>


                              <option value="Delivered">
                                Delivered
                              </option>


                              <option value="Cancelled">
                                Cancelled
                              </option>

                            </select>


                            {updatingOrderId ===
                              order.id && (

                              <span className="text-xs text-gray-500">
                                Updating...
                              </span>

                            )}

                          </div>

                        </td>


                        {/* =========================
                            ACTION
                        ========================== */}

                        <td className="px-6 py-5">

                          <button

                            onClick={() =>
                              setSelectedOrder(
                                order
                              )
                            }

                            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
                          >

                            View Details

                          </button>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          </div>

        )}


        {/* =========================
            ORDER DETAILS
        ========================== */}

        {selectedOrder && (

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">


            {/* =========================
                DETAILS HEADER
            ========================== */}

            <div className="flex items-center justify-between">


              <div>

                <p className="text-sm font-semibold text-blue-600">
                  ORDER DETAILS
                </p>


                <h2 className="mt-1 text-2xl font-extrabold text-gray-900">
                  Order #{selectedOrder.id}
                </h2>

              </div>


              <button

                onClick={() =>
                  setSelectedOrder(null)
                }

                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
              >

                Close

              </button>

            </div>


            {/* =========================
                ORDER STATUS
            ========================== */}

            <div className="mt-6">

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${getStatusClass(
                  selectedOrder.status
                )}`}
              >

                {selectedOrder.status}

              </span>

            </div>


            {/* =========================
                CUSTOMER INFO
            ========================== */}

            <div className="mt-8 grid gap-6 sm:grid-cols-2">


              {/* CUSTOMER */}

              <div>

                <p className="text-sm text-gray-500">
                  Customer
                </p>


                <p className="mt-1 font-semibold text-gray-900">
                  {selectedOrder.customerName}
                </p>

              </div>


              {/* EMAIL */}

              <div>

                <p className="text-sm text-gray-500">
                  Email
                </p>


                <p className="mt-1 font-semibold text-gray-900">
                  {selectedOrder.email}
                </p>

              </div>


              {/* PHONE */}

              <div>

                <p className="text-sm text-gray-500">
                  Phone
                </p>


                <p className="mt-1 font-semibold text-gray-900">
                  {selectedOrder.phone}
                </p>

              </div>


              {/* ADDRESS */}

              <div>

                <p className="text-sm text-gray-500">
                  Address
                </p>


                <p className="mt-1 font-semibold text-gray-900">
                  {selectedOrder.address}
                </p>

              </div>

            </div>


            {/* =========================
                PRODUCTS
            ========================== */}

            <div className="mt-8">


              <h3 className="text-lg font-bold text-gray-900">
                Ordered Products
              </h3>


              <div className="mt-4 space-y-4">

                {selectedOrder.items &&
                  selectedOrder.items.map(
                    (item) => (

                      <div
                        key={
                          `${selectedOrder.id}-${item.productId}`
                        }
                        className="flex items-center gap-4 rounded-xl border p-4"
                      >


                        {/* IMAGE */}

                        <img

                          src={
                            item.image
                          }

                          alt={
                            item.productName
                          }

                          className="h-20 w-20 rounded-lg object-cover"

                        />


                        {/* PRODUCT INFO */}

                        <div className="flex-1">

                          <p className="font-semibold text-gray-900">
                            {item.productName}
                          </p>


                          <p className="mt-1 text-sm text-gray-500">
                            Qty: {item.quantity}
                          </p>

                        </div>


                        {/* PRICE */}

                        <div className="text-right">

                          <p className="font-bold text-gray-900">

                            Rs.{" "}

                            {Number(
                              item.totalPrice
                            ).toLocaleString()}

                          </p>


                          <p className="text-sm text-gray-500">

                            Rs.{" "}

                            {Number(
                              item.unitPrice
                            ).toLocaleString()}

                            {" "}each

                          </p>

                        </div>

                      </div>

                    )
                  )}

              </div>

            </div>


            {/* =========================
                TOTAL
            ========================== */}

            <div className="mt-8 flex items-center justify-between border-t pt-6">


              <span className="text-lg font-semibold text-gray-700">
                Total Amount
              </span>


              <span className="text-2xl font-extrabold text-gray-900">

                Rs.{" "}

                {Number(
                  selectedOrder.totalAmount
                ).toLocaleString()}

              </span>

            </div>

          </div>

        )}

      </div>

    </div>

  )

}


export default AdminOrders

