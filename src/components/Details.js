import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from '../actions/productAction';
import '../App.css';


const Details = () => {
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.product);

    const [color, setColor] = useState({
        index: null,
        id: null,
    });

    const [size, setSize] = useState({
        index: null,
        id: null,
    });

    const colorRef = useRef(null);
    const sizeRef = useRef(null);

    const arr = [color.id, size.id];

    const handleColor = (i, id) => {
        setColor({
            index: i,
            id: id,
        });

        const images = colorRef.current.children;
        for (let j = 0; j < images.length; j++) {
            images[j].className = images[j].className.replace("active", "");
        }
        images[i].classList.add("active");
    };


    const handleSize = (i, id) => {
        setSize({
            index: i,
            id: id,
        });
        const sizes = sizeRef.current.children;
        for (let j = 0; j < sizes.length; j++) {
            sizes[j].className = sizes[j].className.replace("active", "");
        }
        sizes[i].classList.add("active");
    };


    const singleSkus = products?.variation?.skus?.filter(product => product.props.toString() === arr.toString());

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    return (
        <>
            <div>
                <p className="title ms-2 p-3"><b>Product Title:</b> {products?.title}</p>
                <div className="background">
                    <div className="d-flex align-items-center">
                        <h5>Price:</h5>
                        {singleSkus?.map((c, i) =>
                            <div key={i} className="d-flex align-items-center">
                                 <h3 className="mx-3 discounted-price">Rs.{c.price.discounted}</h3> <h4 className="me-3 old-price">Rs.{c.price.old}</h4> <h4 className="percent">({Math.round((c.price.old - c.price.discounted) * 100 / c.price.old)}% OFF)</h4>
                            </div>
                        )}
                    </div>
                </div>
                <div className="background">
                    <p> <span className="span-color"> {products?.variation?.props[0]?.name}: </span> <b>{products?.variation?.props[0]?.values[color.index]?.title}</b> </p>
                    <div className="row details" ref={colorRef}>
                        {
                            products?.variation?.props[0]?.values?.map((value, i) =>
                                <div onClick={() => handleColor(i, value.id)} key={i} className="col-md-2 variant-image col-sm-2">
                                    <img className="w-100" src={value.image} alt="" />
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className="background">
                    <p> <span className="span-color"> {products?.variation?.props[1]?.name}:</span> <b> {products?.variation?.props[1]?.values[size.index]?.title}</b></p>
                    <div className="row details" ref={sizeRef}>
                        {
                            products?.variation?.props[1]?.values?.map((value, i) =>
                                <div onClick={() => handleSize(i, value.id)} key={i} className="col-md-2 variant-size col-sm-2 hello">
                                    <span>{value.name}</span>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

export default Details;