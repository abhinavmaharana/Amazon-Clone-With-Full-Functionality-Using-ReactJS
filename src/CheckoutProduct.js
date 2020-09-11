import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CheckoutProduct = forwardRef((props, ref) => {
    const { id, title, image, price, rating, hideButton } = props;
    const [state, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove item from basket....
        toast("Item is Removed From Basket", { type: 'dark' });
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div ref={ref} id={id} className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
                {!hideButton && (<button onClick={removeFromBasket}>Remove from Basket</button>)}
                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    draggable={false}
                    hideProgressBar={false}
                    transition={Zoom}
                />

            </div>
        </div>
    );
});
export default CheckoutProduct