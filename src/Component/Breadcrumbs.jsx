import callto from '../assets/image/cta.jpg';
import {Link}  from 'react-router-dom';

function Breadcrumbs({title}){
    return(
  <div className="breadcumbs">
    <div className="overly2"></div>
    <img  src={callto}/>
    <div className="container-fluid breadcumbs-title">
        <div className="row">
            <div className=" about-warper ">
                <h3>{title}</h3>
                <div className='inner-breadcumbs'>
                    <Link to="/" >Home</Link>
                    <h5>{title}</h5>
                </div>
            </div>
        </div>
    </div>
  </div>

    )
}

export default Breadcrumbs;