
import { useNavigate } from "react-router-dom"


function Footer() {

  const navigate = useNavigate()


  return (

    <footer className="bg-gray-950 text-white">


      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">


        {/* =========================
            MAIN FOOTER
        ========================== */}

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">


          {/* =========================
              BRAND
          ========================== */}

          <div className="sm:col-span-2 lg:col-span-1">

            <button
              onClick={() => navigate("/")}
              className="text-left"
            >

              <h2 className="text-2xl font-extrabold">
                Shop<span className="text-blue-400">Hub</span>
              </h2>

            </button>



            

       

                                          
            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Your one-stop destination for quality products,
              great prices and an amazing shopping experience.
            </p>


            <div className="mt-5 flex gap-3">

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm">
                🛒
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm">
                ⭐
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm">
                ❤️
              </span>

            </div>

          </div>


          {/* =========================
              QUICK LINKS
          ========================== */}

          <div>

            <h3 className="font-bold text-white">
              Quick Links
            </h3>


            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">

              <button
                onClick={() => navigate("/")}
                className="text-left transition hover:text-white"
              >
                Home
              </button>


              <a
                href="#products"
                className="transition hover:text-white"
              >
                Products
              </a>


              <a
                href="#categories"
                className="transition hover:text-white"
              >              
                Categories
              </a>
                                                           
            </div>

          </div>


          {/* =========================
              CATEGORIES
          ========================== */}

          <div>

            <h3 className="font-bold text-white">
              Categories
            </h3>


            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">

              <p className="transition hover:text-white">
                Electronics
              </p>

              <p className="transition hover:text-white">
                Fashion
              </p>

              <p className="transition hover:text-white">
                Accessories
              </p>

              <p className="transition hover:text-white">
                Sports
              </p>

            </div>

          </div>

        


          {/* =========================
              CONTACT
          ========================== */}

          <div>

            <h3 className="font-bold text-white">
              Contact
            </h3>


            <div className="mt-4 space-y-4 text-sm text-gray-400">

              <p>
                📧{" "}
                <span className="hover:text-white">
                  support@shophub.com
                </span>
              </p>

              <p>
                📞{" "}
                <span className="hover:text-white">
                  +92 300 1234567
                </span>
              </p>

              <p>
                📍{" "}
                <span className="hover:text-white">
                  Islamabad, Pakistan
                </span>
              </p>

            </div>

          </div>

        </div>


        {/* =========================
            DIVIDER
        ========================== */}

        <div className="my-10 h-px bg-gray-800 sm:my-12" />


        {/* =========================
            BOTTOM
        ========================== */}

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-gray-500">
            © 2026 ShopHub. All rights reserved.
          </p>


          <div className="flex gap-5 text-sm text-gray-500">

            <span className="cursor-pointer transition hover:text-white">
              Privacy Policy
            </span>

            <span className="cursor-pointer transition hover:text-white">
              Terms & Conditions
            </span>

          </div>

        </div>

      </div>

     

      

    </footer>
  )
}



export default Footer


