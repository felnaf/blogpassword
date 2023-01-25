import React from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import BlogManagement from './BlogManagement';
import AddBlogManagement from './AddBlogManagement';
import ViewBlogManagement from './ViewBlogManagement';
import Blogs from './Blogs';
import ViewBlogs from './ViewBlog';
import ContactUs from './ContactUs';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ChangePassword from './ChangePassword';
import { validatePassword } from '../service';
// import cryptoJs from 'crypto-js';

const App = () => {
  // var ciphertext = cryptoJs.AES.encrypt(
  //   JSON.stringify('1111111111'),
  //   'my-secret-key@123'
  // ).toString();
  // console.log(ciphertext);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoute />}>
          <Route path="/blog-management" element={<BlogManagement />} />
          <Route path="/add-blogmanagement" element={<AddBlogManagement />} />
          <Route
            path="/edit-blogmanagement/:id"
            element={<AddBlogManagement />}
          />
          <Route
            path="/view-blogmanagement/:id"
            element={<ViewBlogManagement />}
          />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/view-blogs/:id" element={<ViewBlogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/changepassword" element={<ChangePassword />} />
      </Routes>
    </div>
  );
};

export default App;
