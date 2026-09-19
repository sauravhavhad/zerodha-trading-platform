import React from 'react'
import { useNavigate } from 'react-router-dom'

function OpenAccount() {
    const navigate = useNavigate();

    return ( 
        <div className='container p-5'>
            <div className='row text-center'>

               <h1 className='mt-5'>Open a Zeroda Account</h1>

               <p className="fs-5">Modern platform and apps, $0 investments and flat $20 on intradayand F&O trades</p>

               <button
                 onClick={() => navigate('/signup')}
                 className='p-2 btn btn-primary fs-5 mb-5'
                 style={{width:"20%", margin:"0 auto", fontSize:"40%"}}
               >
                 Signup Now
               </button>

            </div>

        </div> 
    );
}

export default OpenAccount;