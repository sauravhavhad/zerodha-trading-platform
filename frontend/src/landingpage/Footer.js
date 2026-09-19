import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(240, 240, 240)" }}>
      <div className="container border-top mt-5 pt-5">
        <div className="row">
          <div className="col-3">
            <img src="/media/logo.svg" style={{ width: "50%" }} alt="Zerodha" />

            <p className="mt-3">
              © 2010 - 2024, Not Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <div className="me-3">
              <i class="fa fa-twitter me-3"></i>
              <i class="fa fa-instagram me-3"></i>
              <i class="fa fa-linkedin me-3"></i>
              <i class="fa fa-facebook me-3"></i>
              <i class="fa fa-telegram me-3"></i>
            </div>
          </div>

          <div className="col-3">
            <h5>Company</h5>
            <a href="#" className="d-block mt-3">
              About
            </a>
            <a href="#" className="d-block mt-3">
              Products
            </a>
            <a href="#" className="d-block mt-3">
              Pricing
            </a>
            <a href="#" className="d-block mt-3">
              Referral programme
            </a>
            <a href="#" className="d-block mt-3">
              Careers
            </a>
            <a href="#" className="d-block mt-3">
              Zerodha.tech
            </a>
            <a href="#" className="d-block mt-3">
              Press & media
            </a>
            <a href="#" className="d-block mt-3">
              Zerodha cares (CSR)
            </a>
          </div>

          <div className="col-3">
            <h5>Support</h5>
            <a href="#" className="d-block mt-3">
              Contact
            </a>
            <a href="#" className="d-block mt-3">
              Support portal
            </a>
            <a href="#" className="d-block mt-3">
              Z-Connect blog
            </a>
            <a href="#" className="d-block mt-3">
              List of charges
            </a>
            <a href="#" className="d-block mt-3">
              Downloads & resources
            </a>
          </div>

          <div className="col-3">
            <h5>Account</h5>
            <a href="#" className="d-block mt-3">
              Open an account
            </a>
            <a href="#" className="d-block mt-3">
              Fund transfer
            </a>
            <a href="#" className="d-block mt-3">
              60 day challenge
            </a>
          </div>
        </div>
        <div>
          <p className="mt-5 fs-6 text-muted">
            Zerodha Broking Ltd.: Member of NSE & BSE. SEBI Registration No.:
            INZ000163633. Investments in securities market are subject to market
            risks. Read all the related documents carefully before investing.
            For complaints related to securities broking, please write to
            complaints@zerodha.com.
          </p>

          <p className="mt-3 fs-6 text-muted">
            Procedure to file a complaint on SEBI SCORES: Register on the SCORES
            portal and provide the required details for filing complaints.
          </p>

          <p className="mt-3 fs-6 text-muted">
            Prevent unauthorised transactions in your account. Update your
            mobile number and email ID with your stock broker and receive
            information about your transactions directly from the exchange.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
