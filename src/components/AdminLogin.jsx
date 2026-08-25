import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginAdmin } from "../services/api"


function AdminLogin() {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  const handleLogin = async (e) => {

    e.preventDefault()

    setError("")

    if (!username.trim() || !password.trim()) {

      setError("Please enter username and password.")

      return
    }


    try {

      setLoading(true)

      const data = await loginAdmin(
        username,
        password
      )


      // Save JWT token

      localStorage.setItem(
        "adminToken",
        data.token
      )


      // Save username

      localStorage.setItem(
        "adminUsername",
        data.username
      )


      // Go to Admin Dashboard

      navigate("/admin")

    }
    catch (error) {

      console.error(
        "Admin Login Error:",
        error
      )

      setError(
        error.message ||
        "Invalid username or password."
      )

    }
    finally {

      setLoading(false)

    }

  }


  return (

    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">


        {/* HEADER */}

        <div className="text-center">

          <h1 className="text-3xl font-extrabold text-gray-900">

            Shop<span className="text-blue-600">
              Hub
            </span>

          </h1>


          <h2 className="mt-6 text-2xl font-bold text-gray-900">

            Admin Login

          </h2>


          <p className="mt-2 text-sm text-gray-500">

            Login to access the admin panel.

          </p>

        </div>


        {/* ERROR */}

        {error && (

          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">

            {error}

          </div>

        )}


        {/* FORM */}

        <form
          onSubmit={handleLogin}
          className="mt-6 space-y-5"
        >


          {/* USERNAME */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-gray-700">

              Username

            </label>


            <input
              type="text"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              placeholder="Enter username"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>


          {/* PASSWORD */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-gray-700">

              Password

            </label>


            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>


          {/* LOGIN BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >

            {loading
              ? "Logging in..."
              : "Login"}

          </button>


          {/* BACK */}

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
          >

            Back to Store

          </button>

        </form>

      </div>

    </div>

  )

}


export default AdminLogin