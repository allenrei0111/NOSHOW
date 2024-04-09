import React, { useEffect } from "react";
import "./CSS/Admin.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import AddProduct from "../Components/AddProduct/AddProduct";
import ListProduct from "../Components/ListProduct/ListProduct";

const Admin = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('auth-token') ? true : false;

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      window.location.replace("/login");
    }
  }, [isAuthenticated]);

  const hideSidebarRoutes = ["/home", "/login"];

  // Function to check if the sidebar should be hidden
  const shouldHideSidebar = () => {
    return hideSidebarRoutes.includes(location.pathname);
  };

  // Function to show the sidebar
  const showSidebar = () => {
    document.querySelector('.sidebar').style.display = 'block';
  };

  return (
    <div className="admin">
      {!shouldHideSidebar() && <Sidebar />}
      {isAuthenticated ? (
        <Routes>
          <Route
            path="/addproduct"
            element={<AddProduct />}
            onClick={showSidebar}
          />
          <Route
            path="/listproduct"
            element={<ListProduct />}
            onClick={showSidebar}
          />
        </Routes>
      ) : null}
    </div>
  );
};

export default Admin;
