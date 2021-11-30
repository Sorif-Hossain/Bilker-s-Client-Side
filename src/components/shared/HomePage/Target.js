import React from 'react';
import { Link } from 'react-router-dom';
import target from '../../../media/images/target.jpg'

const Target = () => {
    const style ={
        color: 'Indigo'
      }
    return (
        <div className="container d-lg-flex my-5">
            <div className="custom-width m-5 me-4">
            <img src={target} alt="target images" />
            </div>
            <div className="custom-width mt-3">
            <p className="fw-bold ms-1 mt-2">
                TarGet
            </p>
            <h1 style={style} className='fw-bold'>You Are Ready  <br /> For New One</h1>
            <p className='mt-5 lh-lg'>“Coming at first, Autozone comes with lots of powerful features that are essential for a professional car dealership website. The theme also stands out by custom headers, logos and more is easier than ever before. Users also find interesting in Autozone with various color schemes offered, one-page design with modern features and convenient usage. And the theme is a resourceful framework for crafting elegant and functional websites.”</p>
            <Link to ='/explore'>
                <button className="btn btn-danger mt-4 py-2 px-4 rounded-pill fw-bold">Shop Now</button>
            </Link>
            </div>
      </div>
    );
};

export default Target;