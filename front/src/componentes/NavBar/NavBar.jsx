import SearchBar from "../SearchBar/SearchBar"
import { Link, NavLink } from "react-router-dom";

function NavBar({ onSearch }) {
  return (
    <div>
      <Link to={"/home"}>
        <button>Home</button>
      </Link >
      <Link to={"/about"}>
        <button>About</button>
      </Link >
      <SearchBar onSearch={onSearch} />
    </div >
  );
}

export default NavBar;