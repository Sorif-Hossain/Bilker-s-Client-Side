import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../media/images/banner.jpg'

const Banner = () => {
    const style ={
        color: 'Indigo'
      }
    return (
        <>
          <div className="container d-lg-flex">
          <div className="mt-5 custom-width">
            
            <h1 className="fw-bold display-5 mt-2" style={style}>
              
            Manage Your Top  <br />brand In One Place 
            </h1>
            <p className='mt-3 lh-lg pe-lg-4 text-muted'>This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.
                                                        </p>
            <Link to ='/about'>
              <button className="btn bg-danger mt-4 py-2 px-4 rounded-pill fw-bold text-white">ABOUT US</button>
            </Link>
          </div>
          <div className="ms-3 custom-width">
            <img src={banner} className='img-fluid m-5' alt="" />
          </div>
        </div>
        
      </>
    );
};

export default Banner;