import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">

      {/* Left Logo */}
      <div  className="navbar">
        <div className="logo">
          <span className="icon">🏷</span>
          <div>
            <h3>DCX-App Store</h3>
            <p>Bootstrap Ecommerce Template</p>
          </div>
        </div>

        {/* Right Login */}
        <div className="login-box">
          <div className="input-group">
            <label>Email</label>
            <input type="text" placeholder="Enter Mail ID..." />
            <label>Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>

          <button>Login</button>
        </div>
      </div>
      <div className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/whats-new">Whats New</Link></li>
          <li><Link to="/specials">Specials</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/account">My Account</Link></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;