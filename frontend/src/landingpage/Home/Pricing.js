import React from 'react'

function Pricing() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4 ps-5'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>

                    <p className='fs-6'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

                     <a href className='link-primary fs-6 ps-0' style={{textDecoration:"none"}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-6 p-3 text-center border ps-5'>
                            <h1 className='mb-5'>$0</h1>
                            <p >Free equity delevery and <br></br> direct mutual funds</p>
                        </div>
                        <div className='col-6 p-3 text-center border ps-5'>
                            <div className='row'>
                                <h1 className='mb-5'>$20</h1>
                                <p>Intraday and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;