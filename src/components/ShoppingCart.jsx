import { BsCart3 } from "react-icons/bs";
import { useState } from "react";




const ShoppingCart = () => {


    
        const [isToggled, setIsToggled] = useState(true);
      
        const handleToggle = (e) => {
            e.stopPropagation()
          setIsToggled(!isToggled);
        

    }
      
return (
    <div className='shopping-cart-container' onClick={handleToggle} > 
         {
         isToggled 
         ? <>
            <div className="expandable-cart">
                <div> 
                    <p className="dropdown-top"> cart is empty </p>
                </div>
            
             <div className="dropdown-bottom">
                <div>total: 900 </div>
                <small>incl. vat. </small>
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
       < BsCart3 /> 
       
        
    </div>
  )
}

export default ShoppingCart