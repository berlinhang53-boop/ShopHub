function Toast({ toast, onClose }) {
  if (!toast) {
    return null
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] w-[calc(100%-2rem)] max-w-sm animate-[slideIn_0.3s_ease-out]">
      
      <div className="flex items-center gap-3 rounded-xl bg-gray-900 px-4 py-4 text-white shadow-2xl">

        {/* Icon */}

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500 font-bold">
          ✓
        </div>


        {/* Message */}

        <p className="flex-1 text-sm font-medium">
          {toast.message}
        </p>


        {/* Close */}

        <button
          onClick={onClose}
          className="text-lg text-gray-400 transition hover:text-white"
        >
          ✕
        </button>

      </div>

    </div>
  )
}

export default Toast