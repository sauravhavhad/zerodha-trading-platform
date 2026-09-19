import React from 'react'

function Hero() {
    return ( 
       <div className='container'>
        <div className='row p-5 mt-5 border-bottom text-center'>
            <h1 className='fs-3 text-muted'>Charges</h1>
            <p className='fs-5 text-muted p-3'>List of all charges and taxes</p>
            <div className='col-4'>
                <img src='media\pricing0.svg'></img>
                <h1>Free equity delivery</h1>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4'>
                <img src='media\intradayTrades.svg'></img>
                <h1>Intraday and F&O trades</h1>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4'>
                <img src='media\pricing-eq.svg'></img>
                <h1>Free direct MF</h1>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>

       </div>
     );
}

export default Hero;
