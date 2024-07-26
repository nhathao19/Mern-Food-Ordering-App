import React from 'react'

export default function Footer() {
  return (
    <div className='bg-orange-500 py-10'>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight">
                MernEats.com
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4">
                <span className="">Privacy Policy</span>
                <span>Terms of Service</span>
            </span>
        </div>
    </div>
  )
}
