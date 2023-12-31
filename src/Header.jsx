import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-clipboard"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/order_create">
                  Create Order
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/daily_usage">
                  Daily Usage
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">
                  View Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/daily_usage_chart" className="nav-link">
                  View Chart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
