import React from 'react'

function Brokerage() {
    return ( 
        <div className='container border-top'>
            <div className='row'>
                <div className='col-8 p-4 mt-5'>
                   <a href='#' style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage Calculator</h3></a>
                   <ul className='p-3 fs-6 text-muted' style={{textAlign:"left" , lineHeight:"2.4c", fontSize:"12px"}}>
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order..</li>
                    <li>Digital contract notes will be sent via e-mail</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courie</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    <li>Would you like me to explain any of these specific charges or help you calculate the total cost of a trade based on these rules?</li>
                    
                   </ul>

                </div>
                <div className='col-4 p-4 mt-5'>
                   <a href="#" style={{textDecoration:"none"}}>
                    <h3 className='fs-5'> List Of Charges</h3>
                   </a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;