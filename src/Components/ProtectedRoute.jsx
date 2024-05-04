import React from 'react';
import { Navigate } from 'react-router-dom';

// Crea una ruta protegida
const ProtectedRoute = ({ element, isAuthenticated }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;