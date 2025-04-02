import { Link } from "react-router";

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="../src/assets/logo.jpg"
          alt="my logo"
          className="resize-logo"
        />
      </Link>
      <label>Search</label>
      <p>user</p>
    </div>
  );
}

export default Header;
