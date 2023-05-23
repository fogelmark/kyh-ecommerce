import { useContext, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
// import { ProductDetailContext } from "../contexts/ProductDetailContext";





const ShoppingCart = () => {

  const { cartItems, addToCart } = useContext(CartContext) 

  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = (e) => {
    e.stopPropagation()
    setIsToggled(!isToggled);
    }
      
return (
    <div className='shopping-cart-container' onClick={handleToggle}>
      <span className="rounded-pill">{cartItems.length}</span> 
         {
         isToggled 
         ? <>
            <div className="expandable-cart">
              <div> 
                <p className="dropdown-top"> cart is empty </p>
              </div>
              <span className="divider"></span>
              <div className="dropdown-bottom">
                <div className="price-info">
                  <p>Total: 900</p>
                  <small>incl. vat</small>
                </div>
                <div>
                  <button>Clear Cart </button>
                  <button>Checkout</button>
                </div>
              </div>
            </div>
            
           </>
         : <div> 
            <p></p> 
            
            </div> 
         }
       < BsCart3 size={30} /> 
    </div>
  )
}

export default ShoppingCart