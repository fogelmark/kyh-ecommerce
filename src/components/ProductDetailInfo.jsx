import React, { useState } from 'react';
import ImagePlaceholder1 from '../assets/501x430.svg';
import ImagePlaceholder2 from '../assets/120x113.svg';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { BsCart3 } from "react-icons/bs";

const StarIcon = ({ filled }) => (filled ? <FaStar className="star" /> : <FaRegStar className="star" />);

const ProductDetailInfo = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="product-details">
            <div className="container">
                <div className="left">
                    <div className="image">
                        <img src={ImagePlaceholder1} alt="Placeholder 1" />
                    </div>
                    <div className="small-images">
                        <div className="image">
                            <img src={ImagePlaceholder2} alt="Placeholder 2" />
                        </div>
                        <div className="image">
                            <img src={ImagePlaceholder2} alt="Placeholder 2" />
                        </div>
                        <div className="image">
                            <img src={ImagePlaceholder2} alt="Placeholder 2" />
                        </div>
                        <div className="image">
                            <img src={ImagePlaceholder2} alt="Placeholder 2" />
                        </div>
                    </div>
                </div>
                <div className="product-details-info left">
                    <h2>Product Name</h2>
                    <p className="detail-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad fugiat, sint, repellat sit tenetur
                        quaerat necessitatibus, beatae aliquam obcaecati dolores? Sed, nam. Aliquid quod ad, ipsa unde quos
                        itaque.
                    </p>
                    <div className="reviews">
                        <StarIcon filled />
                        <StarIcon filled />
                        <StarIcon filled />
                        <StarIcon filled />
                        <StarIcon />
                        <p>5.0 (25 reviews)</p>
                    </div>
                    <div className="price">
                        <span>$99.99</span>
                    </div>
                    <div className="quantity">
                        <button className="quantity-button" onClick={decrementQuantity}>-</button>
                        <span className='quantity-number'>{quantity}</span>
                        <button className="quantity-button" onClick={incrementQuantity}>+</button>
                        <button className="add-to-cart-button">Add to Cart <BsCart3 className='cart'/></button>
                    </div>
                    <div className="action-buttons">
                    </div>
                    <button className="wishlist-button">Add to Wishlist</button>
                    <p className="category">Category: Clothes</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailInfo;
