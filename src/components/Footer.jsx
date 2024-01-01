import React from 'react'

function Footer() {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <>
    <div>
      <div className="text-center w-full text-sm py-6 px-20">
        &copy; {year} Magical Mom Boss Affiliate
      </div>
    </div>
    </>
  )
}

export default Footer
