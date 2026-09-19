import React from 'react'

function Hero() {
    return ( 
      <div className="container-fluid bg-light py-5">
    <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-4">

            <h1 className="fs-1 text-muted">
                Support Portal
            </h1>

            <button className="btn btn-primary px-4 py-3 btn-sm" style={{}}>
                My tickets
            </button>

        </div>

        {/* Search Box */}
        <div className="position-relative">

            <input
                type="text"
                placeholder="Eg: How do I open my account, How do I activate F&O..."
                className="form-control py-4 ps-5 fs-5"
            />

            <i
                className="fa fa-search position-absolute"
                style={{
                    left: "30px",
                    top: "50%",
                    transform: "translateY(-50%)"
                }}
                aria-hidden="true"
            ></i>

        </div>

    </div>
</div>
     );
}

export default Hero;