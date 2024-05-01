import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-6 text-center font-bold">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/add-artwork">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              Add Artwork
            </button>
          </Link>
          <Link to="/view-artworks">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              View Artworks
            </button>
          </Link>
          <Link to="/update-artwork">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              Update Artwork
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
