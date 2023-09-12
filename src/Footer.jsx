import { Link } from "react-router-dom";

export function Footer() {
  function onEmailClick() {
    window.open(`mailto:jmychalm13@gmail.com`);
  }
  return (
    <div className="mt-5 footer-container">
      <footer className="text-center text-lg-start text-white">
        <section className="mb-4 text-center">
          <hr />
          <div className="copyright">
            <p className="px-2">★ JMo Creations ★</p>
          </div>

          {/* <!-- Instagram --> */}
          {/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-instagram"></i>
          </a> */}
          <Link className="btn m-1" to="javascript:void(0)" onClick={onEmailClick}>
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </Link>

          {/* <!-- Linkedin --> */}
          <Link className="btn m-1" to="https://www.linkedin.com/in/jessmoore13/" role="button">
            <i className="fab fa-linkedin-in"></i>
          </Link>

          {/* <!-- Github --> */}
          <Link className="btn m-1" to="https://github.com/jmychalm13" role="button">
            <i className="fab fa-github"></i>
          </Link>
        </section>
      </footer>
    </div>
  );
}
