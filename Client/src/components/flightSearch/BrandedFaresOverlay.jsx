import React from 'react'

function BrandedFaresOverlay() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-xl relative w-[90%] max-w-md">
      <button
        onClick={() => setShowOverLay(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>
      <h2 className="text-lg font-bold mb-4">Selected Flight Info</h2>
      <p>Display some content here... like flight info, pricing, etc.</p>
    </div>
  </div>
  )
}

export default BrandedFaresOverlay