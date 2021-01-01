import React from 'react'
import Rating from './Rating';
import {Link} from 'react-router-dom';

const Product = (props) => {
    console.log(props);
    return (
        <div key={props.product._id} className="card">
            <Link to={'/product/' + props.product._id}>
                {/* <!-- 680px by 830px --> */}
                <img className="medium" src={props.product.image} alt={props.product.name}/>
            </Link>
            <div className="card-body">
                <Link to={'/product/' + props.product._id}>
                    <h2>{props.product.name}</h2>
                </Link>
                <Rating rating={props.product.rating} numReviews={props.product.numReviews}/>
                <div className="price">
                    Rs.{props.product.price}
                </div>
            </div>
        </div>
    )
}

export default Product
