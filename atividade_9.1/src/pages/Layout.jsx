import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className="home">Home</Link>
          </li>
          <li>
            <Link to="/blogs" className="blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact" className="contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;