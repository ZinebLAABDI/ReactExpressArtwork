import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewArtworks() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArtworks() {
      try {
        const response = await axios.get('http://localhost:4500/oeuvre/artworks');
        setArtworks(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error.response.data);
        setLoading(false);
        // Show error message
      }
    }
    fetchArtworks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4500/oeuvre/artworks/${id}`);
      setArtworks(artworks.filter(artwork => artwork._id !== id));
      // Show success message or perform any other necessary actions
    } catch (error) {
      console.error(error.response.data);
      // Show error message
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">View Artworks</h2>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : artworks.length === 0 ? (
        <p className="text-gray-600">No artworks available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {artworks.map((artwork) => (
            <div key={artwork._id} className="bg-white shadow-md rounded-lg p-4">
              <img src={artwork.file} alt={artwork.title} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
              <p className="text-gray-700 mb-2">Artist: {artwork.artist}</p>
              <p className="text-gray-700 mb-2">Year: {artwork.year}</p>
              <p className="text-gray-700 mb-2">Medium: {artwork.medium}</p>
              <p className="text-gray-700 mb-2">Description: {artwork.description}</p>
              <div className="flex justify-between mt-4">
                <Link to={`/update-artwork/${artwork._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update</Link>
                <button onClick={() => handleDelete(artwork._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewArtworks;
