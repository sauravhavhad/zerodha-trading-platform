import React from 'react'

function Team() {
    return ( 
          <div className='container mt-5'>
            <div className='row border-top'>
                <h1 className=' text-center mt-5 text-muted'>People</h1>
            </div>

             <div className='row mt-5 text-muted fs-6'>
                <div className='col-6 '>
                    <img src='media/founder.png' style={{borderRadius:"100%", width:"50%", margin:"0 auto", display:"block"}}></img>
                    <h4 className='text-muted text-center mt-6 fs-4'>MR. Saurabh Avhad</h4>
                    <h5 className='text-muted text-center fs-6'>Founder and CEO</h5>
                    
                </div>
                <div className='col-6 p-5'>
                    <p>Saurabh bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p >Playing basketball is his zen.</p>
                    <p>Connect on <a href="#"   style={{textDecoration:"none"}}>Homepage</a> / <a href="#"  style={{textDecoration:"none"}}>TradingQnA</a> / <a href="#"  style={{textDecoration:"none"}}>Twitter</a></p>
                   
                </div>
            </div>
        </div>
     );
}

export default Team;