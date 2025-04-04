import { Link } from "react-router";

function Header() {
  return (
    <div className="item1">
      <h1>Share and Learn</h1>
      <Link to="/">
        <img
          src="../src/assets/logo.jpg"
          alt="my logo"
          className="resize-logo"
        />
      </Link>
    </div>
  );
}

export default Header;
