import logo from "../../Image/logo512.png";
import {Link} from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";


const Header = () => {
    const borderStyle = {
        borderBottom: "1px solid gray",
        boxShadow: "0px 2px 3px 0px gray",
      }
  return (
    <div style={borderStyle}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width="40" height="40" className="d-inline-block align-text-top"/>
            <h1 className="px-2 d-inline">RouteOPedia</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link" to="/crypto">Crypto</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link disabled" to="/notfound" tabIndex="-1" aria-disabled="true">NotFound</Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/product">Product</Link></li>
                  <li><Link className="dropdown-item" to="/Product/list">ProductList</Link></li>
                  <li><Link className="dropdown-item" to="/Product/Details">Product Details</Link></li>
                  <li><Link className="dropdown-item" to="/Product/create">Create Product</Link></li>
                </ul>
              </li>
              </ul>
            </div>
            </div>
        </div>
        </nav>
    </div>
  );
};

export default Header;