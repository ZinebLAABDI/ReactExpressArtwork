import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate depuis react-router-dom

function AddArtwork() {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    year: '',
    medium: '',
    description: '',
    file: ''
  });
  const navigate = useNavigate(); // Utiliser useNavigate comme un hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4500/oeuvre/artworks', formData);
      console.log('Response:', response); // Log the entire response object
      navigate('/view-artworks'); // Utiliser navigate pour naviguer à '/view-artworks'
      // Redirection ou affichage d'un message de succès
    } catch (error) {
      console.error('Error:', error); // Log the error object
      // Affichage d'un message d'erreur
    }
  };


  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <h2 className="text-2xl mb-6 text-center font-bold">Add Artwork</h2>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="artist"
              placeholder="Artist"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="year"
              placeholder="Year"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="medium"
              placeholder="Medium"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              placeholder="Description"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="file"
              placeholder="Image URL"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Artwork
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddArtwork;
