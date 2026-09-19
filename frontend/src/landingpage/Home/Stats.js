import React from 'react'

function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs2 mb-5'>Trust With Confidence</h1>

                    <h2 className='fs-4'>Custemer First Always</h2>
                    <p className="fs-6  text-muted">That's why 1.5cr+ custemers
                         trust on zeroda with 
                         $1.6 lack crore of investment </p>

                    <h2 className='fs-4'>No spam gimmicks</h2>
                    <p className="fs-6  text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    
                    <h2 className='fs-4'>The zeroda Universe</h2>
                    <p className="fs-6  text-muted"> Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className="fs-6 text-muted"> With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money. </p>

                </div>

                <div className='col-6'>
                    <img src='media\ecosystem.png' style={{width:"90%"}}></img>


                    <div className='text-center mr-5'>

                    <a href className='link-primary fs-6 p-5' style={{textDecoration:"none"}}>Explore Our Products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href className='link-primary fs-6 p-5' style={{textDecoration:"none"}}>Try Kite Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;