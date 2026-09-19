import React from 'react'

function Education() {
    return ( 
        <div className='container mt-5 pt-5'>
            <div className='row'>
                <div className='col-6 '>
                    <img src='media/education.svg' style={{width:"70%"}}></img>
                </div>
                <div className='col-6'>
                    <h1>Free and open markeyt education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                     <a href className='link-primary fs-6 p-5' style={{textDecoration:"none"}}>Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                     <a href className='link-primary fs-6 p-5' style={{textDecoration:"none"}}>Trading Q&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                   
                </div>
            </div>
        </div>
     );
}

export default Education;