import "../assets/styles/footer.css";
import logo from "../assets/images/brand-logo.png";
import instagram from "../assets/images/instagram-icon.png";
import twitter from "../assets/images/twitter-icon.png";
import facebook from "../assets/images/facebook-icon.png";
import pinterest from "../assets/images/pinterest-icon.png";

function Footer() {
  return (
    <footer className=" footer-wrapper">
      <div className="container ">
        {/* logo */}
        <div className="row p-0 m-0 text-center text-md-start">
          <div className="navbar-brand my-4">
            <img id="footer-logo" src={logo} aria-label="logo" />
            <span id="footer-logo-text">Trails</span>
          </div>
        </div>
        {/* main section */}
        <div className="row p-0 m-0">
          <div className="container">
            <div className="row">
              {/* Explore */}
              <div
                className="accordion accordion-flush col-12 col-lg-3 footer-accordian"
                id="accordion-explore"
              >
                <div className="accordion-item subsections">
                  <h3 className="d-none d-lg-block mx-3 footer-heading">
                    Explore
                  </h3>
                  <h1 className="accordion-header d-lg-none" id="flush-explore">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseExplore"
                      aria-expanded="true"
                      aria-controls="flush-collapseExplore"
                    >
                      <span className="footer-heading"> Explore</span>
                    </button>
                  </h1>
                  <div
                    id="flush-collapseExplore"
                    className="accordion-collapse collapse d-lg-block"
                    aria-labelledby="flush-explore"
                    data-bs-parent="#accordion-explore"
                  >
                    <div className="accordion-body d-lg-block">
                      <p>Countries</p>
                      <p>Regions</p>
                      <p>Cities</p>
                      <p>Parks</p>
                      <p>Trails</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Discover Gear */}
              <div
                className="accordion accordion-flush col-12 col-lg-3 footer-accordian"
                id="accordion-discover-gear"
              >
                <div className="accordion-item subsections">
                  <h3 className="d-none d-lg-block mx-3 footer-heading">
                    Discover Gear
                  </h3>
                  <h1
                    className="accordion-header d-lg-none"
                    id="flush-discover-gear"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseDiscoverGear"
                      aria-expanded="true"
                      aria-controls="flush-collapseDiscoverGear"
                    >
                      <span className="footer-heading"> Discover Gear</span>
                    </button>
                  </h1>
                  <div
                    id="flush-collapseDiscoverGear"
                    className="accordion-collapse collapse d-lg-block"
                    aria-labelledby="flush-discover-gear"
                    data-bs-parent="#accordion-discover-gear"
                  >
                    <div className="accordion-body d-lg-block">
                      <p>Hiking</p>
                      <p>Skiing</p>
                      <p>Running</p>
                      <p>Swinning</p>
                      <p>Camping</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Help */}
              <div
                className="accordion accordion-flush col-12 col-lg-2 footer-accordian"
                id="accordion-help"
              >
                <div className="accordion-item subsections">
                  <h3 className="d-none d-lg-block mx-3 footer-heading">
                    Help
                  </h3>
                  <h1 className="accordion-header d-lg-none" id="flush-help">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseHelp"
                      aria-expanded="true"
                      aria-controls="flush-collapseHelp"
                    >
                      <span className="footer-heading"> Help</span>
                    </button>
                  </h1>
                  <div
                    id="flush-collapseHelp"
                    className="accordion-collapse collapse d-lg-block"
                    aria-labelledby="flush-help"
                    data-bs-parent="#accordion-help"
                  >
                    <div className="accordion-body d-lg-block">
                      <p>Support</p>
                      <p>Contact Us</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Social */}
              <div className="col-lg-4 text-center text-lg-start socials-wrapper">
                <h3 className="footer-heading socials-heading">
                  Connect with us
                </h3>
                <img
                  src={instagram}
                  aria-label="instagram icon"
                  className="instagram-icon"
                />
                <img
                  src={twitter}
                  aria-label="twitter icon"
                  className="twitter-icon"
                />
                <img
                  src={facebook}
                  aria-label="facebook icon"
                  className="facebook-icon"
                />
                <img
                  src={pinterest}
                  aria-label="pinterest icon"
                  className="pinterest-icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row px-4">
          <hr className="d-none d-lg-block m-2" />
          <span className="small py-3 py-lg-2 text-secondary">
            &copy; {new Date().getFullYear()} - Trails App, All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
