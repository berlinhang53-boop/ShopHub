import { useEffect, useState } from "react"


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
  // LOAD ORDERS
  // =========================

  useEffect(() => {

    const loadOrders = async () => {

      try {

        setLoading(true)

        setError("")


        const response =
          await fetch(
            "https://localhost:7184/api/orders"
          )


        if (!response.ok) {
          throw new Error(
            "Failed to load orders"
          )
        }


        const data =
          await response.json()


        setOrders(data)

      }
      catch (error) {

        console.error(
          "Orders API Error:",
          error
        )

        setError(
          "Unable to load orders."
        )

      }
      finally {

        setLoading(false)

      }

    }


    loadOrders()

  }, [])


  // =========================
  // LOADING SCREEN
  // =========================

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center">

        <p className="text-lg font-semibold text-gray-600">
          Loading orders...
        </p>

      </div>

    )

  }


  // =========================
  // ERROR SCREEN
  // =========================

  if (error) {

    return (

      <div className="flex min-h-screen items-center justify-center">

        <p className="text-lg font-semibold text-red-600">
          {error}
        </p>

      </div>

    )

  }


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

              <table className="w-full min-w-[800px]">

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


                <tbody className="divide-y">

                  {orders.map((order) => (

                    <tr
                      key={order.id}
                      className="transition hover:bg-gray-50"
                    >

                      {/* ORDER ID */}

                      <td className="px-6 py-5">

                        <span className="font-bold text-gray-900">
                          #{order.id}
                        </span>

                      </td>


                      {/* CUSTOMER */}

                      <td className="px-6 py-5">

                        <p className="font-semibold text-gray-900">
                          {order.customerName}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {order.email}
                        </p>

                      </td>


                      {/* DATE */}

                      <td className="px-6 py-5 text-sm text-gray-600">

                        {new Date(
                          order.orderDate
                        ).toLocaleDateString()}

                      </td>


                      {/* TOTAL */}

                      <td className="px-6 py-5 font-bold text-gray-900">

                        Rs.{" "}

                        {order.totalAmount.toLocaleString()}

                      </td>


                      {/* STATUS */}

                      <td className="px-6 py-5">

                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">

                          {order.status}

                        </span>

                      </td>


                      {/* ACTION */}

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

                  ))}

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

                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
              >

                Close

              </button>

            </div>


            {/* CUSTOMER INFO */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div>

                <p className="text-sm text-gray-500">
                  Customer
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {selectedOrder.customerName}
                </p>

              </div>


              <div>

                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {selectedOrder.email}
                </p>

              </div>


              <div>

                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {selectedOrder.phone}
                </p>

              </div>


              <div>

                <p className="text-sm text-gray-500">
                  Address
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {selectedOrder.address}
                </p>

              </div>

            </div>


            {/* PRODUCTS */}

            <div className="mt-8">

              <h3 className="text-lg font-bold text-gray-900">
                Ordered Products
              </h3>


              <div className="mt-4 space-y-4">

                {selectedOrder.items.map(
                  (item) => (

                    <div
                      key={item.productId}
                      className="flex items-center gap-4 rounded-xl border p-4"
                    >

                      <img
                        src={item.image}
                        alt={item.productName}
                        className="h-20 w-20 rounded-lg object-cover"
                      />


                      <div className="flex-1">

                        <p className="font-semibold text-gray-900">
                          {item.productName}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>

                      </div>


                      <div className="text-right">

                        <p className="font-bold text-gray-900">
                          Rs.{" "}
                          {item.totalPrice.toLocaleString()}
                        </p>

                        <p className="text-sm text-gray-500">
                          Rs.{" "}
                          {item.unitPrice.toLocaleString()}
                          {" "}each
                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>


            {/* TOTAL */}

            <div className="mt-8 flex items-center justify-between border-t pt-6">

              <span className="text-lg font-semibold text-gray-700">
                Total Amount
              </span>

              <span className="text-2xl font-extrabold text-gray-900">

                Rs.{" "}

                {selectedOrder.totalAmount.toLocaleString()}

              </span>

            </div>

          </div>

        )}

      </div>

    </div>

  )

}


export default AdminOrders