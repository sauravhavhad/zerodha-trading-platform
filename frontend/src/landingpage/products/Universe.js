import React from 'react';

function Universe() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">

                {/* Technology Stack */}
                <div className="col-12">
                    <p className="text-center fs-6 text-muted mb-5">
                        Want to know more about our technology stack? Check out the{' '}
                        <a href="#" className="text-decoration-none">
                            Zerodha.tech
                        </a>{' '}
                        blog.
                    </p>
                </div>

                {/* Heading */}
                <div className="col-12">
                    <h1 className="text-center fs-4 text-muted mt-4">
                        The Zerodha Universe
                    </h1>

                    <p className="text-center fs-6 text-muted mt-3 mb-5">
                        Extend your trading and investment experience even further
                        with our partner platforms
                    </p>
                </div>

                {/* Column 1 */}
                <div className="col-4 text-center p-4">

                    <img
                        src="media/zerodhaFundhouse.png"
                        alt="Zerodha Fund House"
                        className="universe-logo"
                    />

                    <p className="small text-muted mt-3">
                        Our asset management venture that is creating simple and
                        transparent index funds to help you save for your goals.
                    </p>

                    <div className="my-5"></div>

                    <img
                        src="media/streakLogo.png"
                        alt="Streak"
                        className="universe-logo"
                    />

                    <p className="small text-muted mt-3">
                        Investment research platform that offers detailed insights
                        on stocks, sectors, supply chains, and more.
                    </p>

                </div>

                {/* Column 2 */}
                <div className="col-4 text-center p-4">

                    <img
                        src="media/sensibull-logo.svg"
                        alt="Sensibull"
                        className="universe-logo"
                    />

                    <p className="small text-muted mt-3">
                        Systematic trading platform that allows you to create and
                        backtest strategies without coding.
                    </p>

                    <div className="my-5"></div>

                    <img
                        src="media/smallcaseLogo.png"
                        alt="Smallcase"
                        className="universe-logo"
                    />

                    <p className="small text-muted mt-3">
                        Thematic investing platform that helps you invest in
                        diversified baskets of stocks or ETFs.
                    </p>

                </div>

                {/* Column 3 */}
                <div className="col-4 text-center p-4">

                    <img
                        src="media/tijori.svg"
                        alt="Tijori"
                        className="universe-logo"
                    />

                    <p className="small text-muted mt-3">
                        Investment research platform that offers detailed insights
                        on stocks, sectors, supply chains, and more.
                    </p>

                    <div className="my-5"></div>

                    <img
                        src="media/dittoLogo.png"
                        alt="Ditto"
                        className="universe-logo"
                    />

                    <p className="small text-muted mt-3">
                        Personalized advice on life and health insurance. No spam
                        and no mis-selling.
                    </p>

                </div>

            </div>
        </div>
    );
}

export default Universe;