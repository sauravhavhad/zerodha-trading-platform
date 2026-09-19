import React from 'react';

function TicketTopics() {
    return (
        <div className="container mt-5">

            <h2 className="fs-4 mb-5">
                To create a ticket, select a relevant topic
            </h2>

            <div className="row">

                {/* Account Opening */}
                <div className="col-4">

                    <h3 className="fs-5 mb-4">
                        <i className="fa fa-plus-circle me-2"></i>
                        Account Opening
                    </h3>

                    <p>
                        <a href="#">Online Account Opening</a>
                    </p>

                    <p>
                        <a href="#">Offline Account Opening</a>
                    </p>

                    <p>
                        <a href="#">Company, Partnership and HUF Account Opening</a>
                    </p>

                    <p>
                        <a href="#">NRI Account Opening</a>
                    </p>

                    <p>
                        <a href="#">Charges at Zerodha</a>
                    </p>

                    <p>
                        <a href="#">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
                    </p>

                    <p>
                        <a href="#">Getting Started</a>
                    </p>

                </div>


                {/* Zerodha Account */}
                <div className="col-4">

                    <h3 className="fs-5 mb-4">
                        <i className="fa fa-user me-2"></i>
                        Your Zerodha Account
                    </h3>

                    <p>
                        <a href="#">Login Credentials</a>
                    </p>

                    <p>
                        <a href="#">Account Modification and Segment Addition</a>
                    </p>

                    <p>
                        <a href="#">DP ID and bank details</a>
                    </p>

                    <p>
                        <a href="#">Your Profile</a>
                    </p>

                    <p>
                        <a href="#">Transfer and conversion of shares</a>
                    </p>

                </div>


                {/* Kite */}
                <div className="col-4">

                    <h3 className="fs-5 mb-4">
                        <i className="fa fa-bar-chart me-2"></i>
                        Kite
                    </h3>

                    <p>
                        <a href="#">Margin/leverage, Product and Order types</a>
                    </p>

                    <p>
                        <a href="#">Kite Web and Mobile</a>
                    </p>

                    <p>
                        <a href="#">Trading FAQs</a>
                    </p>

                    <p>
                        <a href="#">Corporate Actions</a>
                    </p>

                    <p>
                        <a href="#">Sentinel</a>
                    </p>

                    <p>
                        <a href="#">Kite API</a>
                    </p>

                    <p>
                        <a href="#">Pi and other platform</a>
                    </p>

                    <p>
                        <a href="#">Stockreports+</a>
                    </p>

                    <p>
                        <a href="#">GTT</a>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default TicketTopics;