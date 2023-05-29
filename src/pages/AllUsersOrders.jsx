import { useContext } from 'react'
import { OrderContext } from '../contexts/OrderContext'
import { ProductDetailContext } from '../contexts/ProductDetailContext'

const AllUsersOrders = () => {
    
    const { orders } = useContext(OrderContext)
    const { data } = useContext(ProductDetailContext) 

    console.log(data)
    console.log(orders)
  
    if (!orders) {
      // Handle the case where data is not yet available
      return <div>Loading...</div>
    }
  
    return (
      <div className="orders">
        {orders.map(order => (
          <div key={order._id}>
            <h3>Order ID: {order._id}</h3>
            <h4>Order Rows:</h4>
            
            <ul>
              {order.orderRows.map(row => (
                <li key={row._id}>
                  <p>Product: {row.product}</p>
                  <p>Quantity: {row.quantity}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

export default AllUsersOrders