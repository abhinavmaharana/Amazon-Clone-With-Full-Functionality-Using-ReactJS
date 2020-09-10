import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({ id, title, image, price, rating }) {
    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add items to basket....
        toast("Item is Added to Basket", { type: 'dark' });
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
            <ToastContainer
                position="bottom-center"
                autoClose={4000}
                draggable={false}
                hideProgressBar={false}
                transition={Zoom}
            />
        </div>
    );
}

export default Product;