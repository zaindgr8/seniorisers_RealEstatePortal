import Link from "next/link";
import ScrollTop from "./scroll-top";

export default function FooterWhite() {
    return (
      <>
        {/* Start Footer */}
        <ScrollTop />
        <footer
          className="main-footer background-image"
          data-image-src="assets/img/wall-sketch.png"
        >
          <div className="container pt-4">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-6 py-3 py-md-5 pe-xl-5 text-center">
                <div className="footer-about">
                  <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">
                    Seniorisers
                  </h3>
                  <div className="bg-grey mb-3 d-inline-block">
                    {/* Start Qr Code Image */}
                    <img
                      src="assets/img/qr-code-white.png"
                      className="figure-img img-fluid mb-0"
                      height="146"
                      width="146"
                      alt="..."
                    />
                    {/* /End Qr Code Image */}
                  </div>
                  <p>
                    Seniorisers connects seniors, service providers,
                    wholesalers, and manufacturers for seamless collaboration.
                    Integrated data facilitates joint service packages,
                    maximizing discounts and cost savings.
                  </p>
                </div>
              </div>

              <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2 py-3 py-md-5 d-lg-none d-xl-block">
                <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">
                  Quick Links
                </h3>
                {/* /Start Footer Link  */}

                <ul className="footer-link list-unstyled menu mb-0">
                  <li className="mb-2">
                    <Link href="/" className="link d-block">
                      Home
                    </Link>
                    <Link href="/" className="link d-block">
                      About Us
                    </Link>
                    <Link href="/" className="link d-block">
                      Contact Us
                    </Link>
                    <Link href="/" className="link d-block">
                      Agensts
                    </Link>
                    <Link href="/" className="link d-block">
                      Senior Communities
                    </Link>
                  </li>
                </ul>
                {/* /.End Footer Link */}
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg col-xl-2 py-3 py-md-5">
                <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">
                  Contact Us
                </h3>
                {/* /Start Social Icon */}
                <Link className="email-link d-block fw-medium mb-1" href="#">
                  {/* <i className="fa-solid fa-phone me-2"></i> */}
                  <span>Philadelphia, PA 19110, United States</span>
                </Link>
                <Link className="email-link d-block fw-medium flex" href="#">
                  {/* <i className="fa-solid fa-envelope me-2"></i> */}
                  <span>info@seniorisers.com</span>
                </Link>
                {/* /.End Social Icon */}
              </div>
            </div>
            <hr className="mb-0 mt-4" />
            <div className="py-4">
              {/* Start Sub Footer Nav */}

              {/*  /. End Sub Footer Nav */}
              <div className="align-items-center row mb-2">
                {/* Start Footer Logo */}

                {/* /.End Footer Logo  */}
                {/* Start Copy Rights Text */}
                <div className="col-sm-auto copy">
                  © 2023 Seniorisers - All Rights Reserved
                </div>
                {/* /.End Copy Rights Text */}
              </div>
            </div>
          </div>
        </footer>
        {/* /.End Footer */}
      </>
    );
}
