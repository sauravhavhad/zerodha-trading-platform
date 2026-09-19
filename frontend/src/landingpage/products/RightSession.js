import React from 'react'

function RightSession({
    productName,
    productDescription,
    linkText,
    kiteConnect,
    imageURL


    
}) {
    

    return ( 
        <div className='container'>
            <div className='row'>
                {/* <div className='col-1'></div> */}
                <div className='col-4'>
                    <h1 className=' fs-4 text-muted' style={{marginTop:"35%"}}>{productName}</h1>
                    <p className='mt-4'>{productDescription}</p>
                  <div className=''> <a href="#" style={{textDecoration:"none"}}>{linkText}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
                </div>
                
                {/* <div className='1'></div> */}
                <div className='col-6'>
                    <img  src={imageURL} alt={productName}  style={{ marginLeft: "150px" }}/>
                </div>
                {/* <div className='1'></div> */}
            </div>
        </div>
        
     );
}

export default RightSession;