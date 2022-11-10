import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Profession from "./Pages/Profession";
import Projects from "./Pages/Projects";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Verify from "./Pages/Verify";
import Account from "./Pages/Account";
import { loadUser } from "./Redux/Actions/userAction";
import store from "./store";
import UserOptions from "./Pages/UserOption";
import NewProject from "./Pages/admin/NewProject";
import ProjectDetails from "./Pages/ProjectDetails";
import ProtectedRoute from "./Pages/admin/ProtectedRoute";
import { useSelector } from "react-redux";
import Dashboard from "./Pages/admin/Dashboard";
import AllProject from "./Pages/admin/AllProject";
import AllUsers from "./Pages/admin/AllUsers";
import Table from "./Pages/admin/Table";
import EditProject from './Pages/admin/EditProduct';

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          background="white"
        />
        {/* {isAuthenticated && <UserOptions user={user} />} */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/option" element={<UserOptions />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Service />} />
          <Route exact path="/profession" element={<Profession />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/project/:id" element={<ProjectDetails />} />
          <Route exact path="/table" element={<Table />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/verify" element={<Verify />} />
            <Route exact path="/projects" element={<Projects />} />
          </Route>

          {/* Admin Routes */}
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin" ? true : false}
              />
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route exact path="/new" element={<NewProject />} />
            <Route exact path="/allprojects" element={<AllProject />} />
            <Route exact path="/allusers" element={<AllUsers />} />
            <Route exact path="/edit" element={<EditProject />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
