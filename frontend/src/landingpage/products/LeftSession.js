import React from 'react'

function LeftSession({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-5 p-5'>
                    <img src={imageURL}></img>
                </div>
                <div className='col-2'></div>
                <div className='col-4  p-3 mt-5'>
                    <h1 className='fs-4' style={{marginTop:"20%"}}>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}  style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                        <a href={learnMore} style={{textDecoration:"none", marginLeft:"25%"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay} className='px-1' style={{textDecoration:"none"}}><img src='media\googlePlayBadge.svg'></img></a>
                        <a href={appStore} className='px-5' style={{textDecoration:"none"}}><img src='media\appstoreBadge.svg'></img></a>
                    </div>
                   
                </div>
            </div>
        </div>
     );
}

export default LeftSession;