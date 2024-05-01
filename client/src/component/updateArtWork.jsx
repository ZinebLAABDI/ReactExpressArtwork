import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateArtwork() {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    year: '',
    medium: '',
    description: '',
    file: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchArtwork() {
      try {
        const response = await axios.get(`http://localhost:4500/oeuvre/artworks/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error(error.response.data);
        // Show error message
      }
    }
    fetchArtwork();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4500/oeuvre/artworks/${formData._id}`, formData);
      console.log(response.data);
      navigate('/view-artworks');
    } catch (error) {
      console.error(error.response.data);
      // Show error message
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Update Artwork</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full border rounded py-2 px-3" />
        </div>
        <div className="mb-4">
          <input type="text" name="artist" placeholder="Artist" value={formData.artist} onChange={handleChange} className="w-full border rounded py-2 px-3" />
        </div>
        <div className="mb-4">
          <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChange} className="w-full border rounded py-2 px-3" />
        </div>
        <div className="mb-4">
          <input type="text" name="medium" placeholder="Medium" value={formData.medium} onChange={handleChange} className="w-full border rounded py-2 px-3" />
        </div>
        <div className="mb-4">
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full border rounded py-2 px-3"></textarea>
        </div>
        <div className="mb-4">
          <input type="text" name="file" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full border rounded py-2 px-3" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update Artwork</button>
      </form>
    </div>
  );
}

export default UpdateArtwork;
