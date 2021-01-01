import React, {useState, useEffect} from 'react';
import Product from '../components/Product';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const getProductsData = async () => {
            try {
                setLoading(true);
                const {data} = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch (e) {
                setError(e.message);
                setLoading(false);
            }
        }
        getProductsData().then(r => console.log(r));
    }, []);
    return (
        <div>
            {loading ? (<LoadingBox/>) : error ? (<MessageBox varint="danger">{error}</MessageBox>) : (
                <div className="row center">
                    {
                        products.map(product => (
                            <Product key={product._id} product={product}/>
                        ))
                    }
                </div>)}

        </div>
    )
}

export default HomeScreen
