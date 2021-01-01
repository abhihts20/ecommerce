import React from 'react'
import data from '../data'
import Rating from '../components/Rating'
import {Link} from 'react-router-dom'

const ProductScreen = (props) => {

    const product = data.products.find((val) => val._id === props.match.params.id);
    if (!product) {
        return (
            <h1>Product not found</h1>
        )
    }

    return (
        <div>
            <Link to="/">Back to Result</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}/>
                </div>
                <div className="col-1">
                    <ul>
                        <li><h1>{product.name}</h1></li>
                        <li><Rating rating={product.rating} numReviews={product.numReview}/></li>
                        <li>Price : Rs {product.price}</li>
                        <li><p>{product.description}</p></li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">Rs.{product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0 ?
                                            <span className="success">In Stock</span> :
                                            <span className="error">Unavailable</span>}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
