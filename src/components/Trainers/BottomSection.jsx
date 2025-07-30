import React from 'react'

function BottomSection() {
  return (
    <div>
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-8">
  {/* Blue Banner */}
  <div className="bg-[#002F67] rounded-lg text-white text-center py-8 px-6">
    <p className="text-lg md:text-xl font-medium">
      Great trainers build great careers — that’s our belief.
    </p>
  </div>

  {/* Contact Box */}
  <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <p className="text-center md:text-left text-[#002F67] font-semibold text-lg">
      Have questions or want to speak with a trainer?
    </p>
    <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
      Contact Us
    </button>
  </div>
</div>

    </div>
  )
}

export default BottomSection