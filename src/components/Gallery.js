import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from '../actions/productAction';
import '../App.css';


const Gallery = () => {

    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);



    return (
        <div className="row gallery">
            {
                products.gallery && products.gallery.map((product,i) =>
                    <div key={i} className="col-md-6 px-0 col-sm-6" >
                        <img className="w-100" src={product.url} alt="" />
                    </div>
                )
            }
        </div>
    );
};

export default Gallery;