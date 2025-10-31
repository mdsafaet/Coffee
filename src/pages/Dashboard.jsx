import React from 'react'
import { Link } from 'react-router'

export const Dashboard = () => {
  return (
      <div>
      <h1>Dashboard Section</h1>

      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center">
          <img
            src="https://stories.freepik.com/storage/404/illustration.svg" // ✅ Public illustration URL
            alt="404 Not Found"
            className="mx-auto mb-6 w-64 sm:w-80"
          />
          <h2 className="text-blue-600 font-semibold text-lg">404 Not Found</h2>
          <p className="text-2xl font-bold text-gray-800 mt-2">
            Whoops! That page doesn’t exist.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Here are some helpful links instead:
          </p>
          <div className="mt-4 space-x-4 text-sm">
            <Link to="/" className="text-blue-500 hover:underline">
              Home
            </Link>
            <Link to="/search" className="text-blue-500 hover:underline">
              Search
            </Link>
            <Link to="/help" className="text-blue-500 hover:underline">
              Help
            </Link>
            <Link to="/contact" className="text-blue-500 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
