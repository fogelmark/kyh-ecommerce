import { createContext, useEffect, useState} from "react";
export const OrderContext = createContext()

const OrderContextProvider = ({children}) => {

    const [orders, setOrders] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
         const result = await axios.get(`http://localhost:8080/api/minaOrder}`)
            setData(prevData => [...prevData, ...result.data]);
            } catch (error ) {
                console.log('Error fetching data:', error);
            }




        }
    })

    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await axios.get(`http://localhost:8080/api/product?limit=${limit}`);
            setData(prevData => [...prevData, ...result.data.slice(prevData.length)]);
            console.log(result.data);
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [limit]);




    
  
    const value = {
      orders,
      setOrders
    }
  
    return (
      <OrderContext.Provider value={value}>
        {children}
      </OrderContext.Provider>
    )
  }
  
  export default OrderContextProvider
