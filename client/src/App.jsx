import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './component/Register'; // Update the import path and component name
import Login from './component/Login'; // Update the import path and component name
import Dashboard from './component/Dashborad'; // Update the import path and component name
import AddArtWork from './component/addArtWork'; // Update the import path and component name
import ViewArtWork from './component/viewArtWork'; // Update the import path and component name
import UpdateArtWork from './component/updateArtWork'; // Update the import path and component name

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-artwork" element={<AddArtWork />} />
          <Route path="/view-artworks" element={<ViewArtWork />} />
          <Route path="/update-artwork/:id" element={<UpdateArtWork />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
