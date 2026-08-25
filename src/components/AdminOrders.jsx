
import { useEffect, useState } from "react";

import {
  getOrders,
  updateOrderStatus,
} from "../services/api";


function AdminOrders() {

  // ==========================================
  // ORDERS
  // ==========================================

  const [orders, setOrders] = useState([]);


  // ==========================================
  // LOADING
  // ==========================================

  const [loading, setLoading] = useState(true);


  // ==========================================
  // ERROR
  // ==========================================

  const [error, setError] = useState("");


  // ==========================================
  // SELECTED ORDER
  // ==========================================

  const [selectedOrder, setSelectedOrder] = useState(null);


  // ==========================================
  // STATUS UPDATING
  // ==========================================

  const [updatingOrderId, setUpdatingOrderId] = useState(null);


  // ==========================================
  // SUCCESS MESSAGE
  // ==========================================

  const [successMessage, setSuccessMessage] = useState("");


  // ==========================================
  // LOAD ORDERS
  // ==========================================

  const loadOrders = async () => {

    try {

      setLoading(true);
      setError("");

      const data = await getOrders();

      setOrders(Array.isArray(data) ? data : []);

    }
    catch (error) {

      console.error(
        "Orders API Error:",
        error
      );

      setError(
        error.message ||
        "Unable to load orders."
      );

    }
    finally {

      setLoading(false);

    }

  };


  // ==========================================
  // LOAD ORDERS ON PAGE OPEN
  // ==========================================

  useEffect(() => {

    loadOrders();

  }, []);


  // ==========================================
  // UPDATE ORDER STATUS
  // ==========================================

  const handleStatusChange = async (
    orderId,
    newStatus
  ) => {

    try {

      setUpdatingOrderId(orderId);

      setError("");
      setSuccessMessage("");


      await updateOrderStatus(
        orderId,
        newStatus
      );


      // Update table

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
      );


      // Update selected order

      setSelectedOrder(
        (currentOrder) =>
          currentOrder &&
          currentOrder.id === orderId
            ? {
                ...currentOrder,
                status: newStatus,
              }
            : currentOrder
      );


      setSuccessMessage(
        `Order #${orderId} status updated to ${newStatus}.`
      );


      setTimeout(() => {

        setSuccessMessage("");

      }, 3000);

    }
    catch (error) {

      console.error(
        "Status Update Error:",
        error
      );

      setError(
        error.message ||
        "Failed to update order status."
      );

    }
    finally {

      setUpdatingOrderId(null);

    }

  };


  // ==========================================
  // STATUS BADGE
  // ==========================================

  const getStatusClass = (status) => {

    switch (status) {

      case "Pending":
        return "bg-amber-50 text-amber-700 ring-1 ring-amber-200";

      case "Confirmed":
        return "bg-blue-50 text-blue-700 ring-1 ring-blue-200";

      case "Shipped":
        return "bg-violet-50 text-violet-700 ring-1 ring-violet-200";

      case "Delivered":
        return "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200";

      case "Cancelled":
        return "bg-red-50 text-red-700 ring-1 ring-red-200";

      default:
        return "bg-gray-50 text-gray-700 ring-1 ring-gray-200";

    }

  };


  // ==========================================
  // STATUS DOT
  // ==========================================

  const getStatusDot = (status) => {

    switch (status) {

      case "Pending":
        return "bg-amber-500";

      case "Confirmed":
        return "bg-blue-500";

      case "Shipped":
        return "bg-violet-500";

      case "Delivered":
        return "bg-emerald-500";

      case "Cancelled":
        return "bg-red-500";

      default:
        return "bg-gray-500";

    }

  };


  // ==========================================
  // SUMMARY COUNTS
  // ==========================================

  const totalOrders = orders.length;

  const pendingOrders =
    orders.filter(
      (order) =>
        order.status === "Pending"
    ).length;

  const shippedOrders =
    orders.filter(
      (order) =>
        order.status === "Shipped"
    ).length;

  const deliveredOrders =
    orders.filter(
      (order) =>
        order.status === "Delivered"
    ).length;


  // ==========================================
  // TOTAL REVENUE
  // ==========================================

  const totalRevenue =
    orders.reduce(
      (total, order) =>
        total +
        Number(order.totalAmount || 0),
      0
    );


  // ==========================================
  // LOADING SCREEN
  // ==========================================

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-slate-50">

        <div className="flex flex-col items-center">

          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

          <p className="mt-4 text-sm font-medium text-slate-500">
            Loading orders...
          </p>

        </div>

      </div>

    );

  }


  // ==========================================
  // MAIN PAGE
  // ==========================================

  return (

    <div className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">


        {/* ==========================================
            PAGE HEADER
        ========================================== */}

        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>

            <div className="mb-2 flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-blue-600" />

              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Admin Dashboard
              </p>

            </div>


            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Orders
            </h1>


            <p className="mt-2 text-sm text-slate-500">
              Manage customer orders, track shipments and update order status.
            </p>

          </div>


          <button
            onClick={loadOrders}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >

            ↻&nbsp; Refresh Orders

          </button>

        </div>


        {/* ==========================================
            ERROR MESSAGE
        ========================================== */}

        {error && (

          <div className="mb-6 flex items-center justify-between rounded-xl border border-red-200 bg-red-50 px-4 py-3 shadow-sm">

            <div className="flex items-center gap-3">

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm text-red-600">
                !
              </span>

              <p className="text-sm font-medium text-red-700">
                {error}
              </p>

            </div>


            <button
              onClick={() =>
                setError("")
              }
              className="text-red-400 transition hover:text-red-700"
            >
              ✕
            </button>

          </div>

        )}


        {/* ==========================================
            SUCCESS MESSAGE
        ========================================== */}

        {successMessage && (

          <div className="mb-6 flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 shadow-sm">

            <div className="flex items-center gap-3">

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-600">
                ✓
              </span>

              <p className="text-sm font-medium text-emerald-700">
                {successMessage}
              </p>

            </div>


            <button
              onClick={() =>
                setSuccessMessage("")
              }
              className="text-emerald-400 transition hover:text-emerald-700"
            >
              ✕
            </button>

          </div>

        )}


        {/* ==========================================
            SUMMARY CARDS
        ========================================== */}

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">


          {/* TOTAL ORDERS */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  Total Orders
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {totalOrders}
                </p>

              </div>


              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                🛍️
              </div>

            </div>

          </div>


          {/* PENDING */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  Pending
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {pendingOrders}
                </p>

              </div>


              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl">
                ⏳
              </div>

            </div>

          </div>


          {/* SHIPPED */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  Shipped
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {shippedOrders}
                </p>

              </div>


              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-xl">
                🚚
              </div>

            </div>

          </div>


          {/* DELIVERED */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  Delivered
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {deliveredOrders}
                </p>

              </div>


              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                ✓
              </div>

            </div>

          </div>

        </div>


        {/* ==========================================
            REVENUE BAR
        ========================================== */}

        {orders.length > 0 && (

          <div className="mb-8 overflow-hidden rounded-2xl bg-slate-900 p-6 shadow-sm">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div>

                <p className="text-sm font-medium text-slate-400">
                  Total Order Value
                </p>

                <p className="mt-1 text-2xl font-bold text-white">
                  Rs. {totalRevenue.toLocaleString()}
                </p>

              </div>


              <div className="rounded-xl bg-white/10 px-4 py-3">

                <p className="text-xs font-medium text-slate-400">
                  Average Order
                </p>

                <p className="mt-1 font-bold text-white">

                  Rs.{" "}

                  {totalOrders > 0
                    ? Math.round(
                        totalRevenue /
                        totalOrders
                      ).toLocaleString()
                    : "0"}

                </p>

              </div>

            </div>

          </div>

        )}


        {/* ==========================================
            NO ORDERS
        ========================================== */}

        {orders.length === 0 ? (

          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
              🛍️
            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-900">
              No orders yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Customer orders will appear here once customers complete their checkout.
            </p>

          </div>

        ) : (


          /* ==========================================
             ORDERS TABLE
          ========================================== */

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">


            {/* TABLE HEADER */}

            <div className="border-b border-slate-200 px-5 py-5 sm:px-6">

              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">

                <div>

                  <h2 className="text-lg font-bold text-slate-900">
                    Recent Orders
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {orders.length} order
                    {orders.length !== 1
                      ? "s"
                      : ""}{" "}
                    found
                  </p>

                </div>

              </div>

            </div>


            <div className="overflow-x-auto">

              <table className="w-full min-w-[950px]">


                {/* TABLE HEADER */}

                <thead className="bg-slate-50">

                  <tr>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      Order
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      Customer
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      Date
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      Total
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                      Action
                    </th>

                  </tr>

                </thead>


                {/* TABLE BODY */}

                <tbody className="divide-y divide-slate-100">

                  {orders.map((order) => (

                    <tr
                      key={order.id}
                      className="transition hover:bg-slate-50/70"
                    >


                      {/* ORDER */}

                      <td className="px-6 py-5">

                        <div>

                          <p className="font-bold text-slate-900">
                            #{order.id}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            Order ID
                          </p>

                        </div>

                      </td>


                      {/* CUSTOMER */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-3">

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">

                            {(
                              order.customerName ||
                              "C"
                            )
                              .charAt(0)
                              .toUpperCase()}

                          </div>


                          <div className="min-w-0">

                            <p className="truncate font-semibold text-slate-900">
                              {order.customerName ||
                                "Unknown Customer"}
                            </p>

                            <p className="mt-0.5 max-w-[220px] truncate text-sm text-slate-500">
                              {order.email ||
                                "No email"}
                            </p>

                          </div>

                        </div>

                      </td>


                      {/* DATE */}

                      <td className="px-6 py-5">

                        <p className="text-sm font-medium text-slate-700">

                          {order.orderDate
                            ? new Date(
                                order.orderDate
                              ).toLocaleDateString(
                                "en-GB"
                              )
                            : "N/A"}

                        </p>

                      </td>


                      {/* TOTAL */}

                      <td className="px-6 py-5">

                        <p className="font-bold text-slate-900">

                          Rs.{" "}

                          {Number(
                            order.totalAmount ||
                              0
                          ).toLocaleString()}

                        </p>

                      </td>


                      {/* STATUS */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-2">

                          <select

                            value={
                              order.status ||
                              "Pending"
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

                            className={`rounded-lg border-0 px-3 py-2 text-xs font-bold outline-none transition focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-60 ${getStatusClass(
                              order.status ||
                                "Pending"
                            )}`}
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

                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600" />

                          )}

                        </div>

                      </td>


                      {/* ACTION */}

                      <td className="px-6 py-5 text-right">

                        <button

                          onClick={() =>
                            setSelectedOrder(
                              order
                            )
                          }

                          className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-600 hover:text-white"
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


        {/* ==========================================
            ORDER DETAILS
        ========================================== */}

        {selectedOrder && (

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">


            {/* DETAILS HEADER */}

            <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 sm:px-8">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <div className="flex items-center gap-3">

                    <h2 className="text-xl font-bold text-slate-900">
                      Order #{selectedOrder.id}
                    </h2>


                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${getStatusClass(
                        selectedOrder.status ||
                          "Pending"
                      )}`}
                    >

                      <span
                        className={`h-1.5 w-1.5 rounded-full ${getStatusDot(
                          selectedOrder.status ||
                            "Pending"
                        )}`}
                      />

                      {selectedOrder.status ||
                        "Pending"}

                    </span>

                  </div>


                  <p className="mt-1 text-sm text-slate-500">
                    Complete order information
                  </p>

                </div>


                <button

                  onClick={() =>
                    setSelectedOrder(null)
                  }

                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >

                  Close

                </button>

              </div>

            </div>


            <div className="p-6 sm:p-8">


              {/* ==========================================
                  CUSTOMER INFORMATION
              ========================================== */}

              <div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  Customer Information
                </h3>


                <div className="mt-4 grid gap-4 sm:grid-cols-2">


                  {/* CUSTOMER */}

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Customer
                    </p>

                    <p className="mt-2 font-semibold text-slate-900">
                      {selectedOrder.customerName ||
                        "N/A"}
                    </p>

                  </div>


                  {/* EMAIL */}

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Email
                    </p>

                    <p className="mt-2 break-all font-semibold text-slate-900">
                      {selectedOrder.email ||
                        "N/A"}
                    </p>

                  </div>


                  {/* PHONE */}

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Phone
                    </p>

                    <p className="mt-2 font-semibold text-slate-900">
                      {selectedOrder.phone ||
                        "N/A"}
                    </p>

                  </div>


                  {/* ADDRESS */}

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Delivery Address
                    </p>

                    <p className="mt-2 font-semibold text-slate-900">
                      {selectedOrder.address ||
                        "N/A"}
                    </p>

                  </div>

                </div>

              </div>


              {/* ==========================================
                  PRODUCTS
              ========================================== */}

              <div className="mt-10">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-lg font-bold text-slate-900">
                      Ordered Products
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Items included in this order
                    </p>

                  </div>

                </div>


                {selectedOrder.items?.length > 0 ? (

                  <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">

                    {selectedOrder.items.map(
                      (item, index) => (

                        <div
                          key={`${selectedOrder.id}-${item.productId}-${index}`}
                          className="flex flex-col gap-4 border-b border-slate-100 p-5 last:border-b-0 sm:flex-row sm:items-center"
                        >


                          {/* IMAGE */}

                          {item.image ? (

                            <img
                              src={item.image}
                              alt={
                                item.productName ||
                                "Product"
                              }
                              className="h-20 w-20 shrink-0 rounded-xl border border-slate-200 object-cover"
                            />

                          ) : (

                            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-medium text-slate-400">
                              No Image
                            </div>

                          )}


                          {/* PRODUCT */}

                          <div className="min-w-0 flex-1">

                            <p className="font-semibold text-slate-900">
                              {item.productName ||
                                "Unknown Product"}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                              Quantity:{" "}
                              {item.quantity ||
                                0}
                            </p>

                          </div>


                          {/* PRICE */}

                          <div className="sm:text-right">

                            <p className="font-bold text-slate-900">

                              Rs.{" "}

                              {Number(
                                item.totalPrice ||
                                  0
                              ).toLocaleString()}

                            </p>

                            <p className="mt-1 text-sm text-slate-500">

                              Rs.{" "}

                              {Number(
                                item.unitPrice ||
                                  0
                              ).toLocaleString()}

                              {" "}each

                            </p>

                          </div>

                        </div>

                      )
                    )}

                  </div>

                ) : (

                  <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">

                    <p className="text-sm text-slate-500">
                      No product details available.
                    </p>

                  </div>

                )}

              </div>


              {/* ==========================================
                  ORDER TOTAL
              ========================================== */}

              <div className="mt-8 rounded-2xl bg-slate-900 p-5 sm:p-6">

                <div className="flex items-center justify-between">

                  <span className="text-sm font-medium text-slate-400">
                    Total Amount
                  </span>


                  <span className="text-2xl font-bold text-white">

                    Rs.{" "}

                    {Number(
                      selectedOrder.totalAmount ||
                        0
                    ).toLocaleString()}

                  </span>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>

  );

}


export default AdminOrders;

