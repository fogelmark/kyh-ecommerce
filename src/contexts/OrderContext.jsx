import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
// import { useParams } from 'react-router-dom';
import { UserContext } from './UserContext/'
export const OrderContext = createContext();



const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

const { user } = useContext(UserContext) 
   
 const token = localStorage.getItem('token') 

  const parse = JSON.parse(token)
 console.log(parse)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const token = verifyToken();

        const result = await axios.get(
          `http://localhost:8080/api/order/myOrders`,
          {
            headers: {
              Authorization: `Bearer ${parse}`
            }
          }
        );

        setOrders(result.data);
        console.log(result.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  // const { orderId } = useParams();

  // useEffect(() => {
  //   const getProductById = async () => {
  //     try {
  //       const result = await axios.get(`http://localhost:8080/api/user/${orderId}`);
  //       setData(result.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log('Error fetching data:', error);
  //     }
  //   };

  //   getProductById();
  // }, [orderId]);




  const value = {
    orders,
  };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;




// import { createContext, useEffect, useState} from "react";
// import axios from "axios";




// export const OrderContext = createContext()

// const OrderContextProvider = ({ children }) => {

// const [orders, setOrders] = useState([])

//   useEffect(() => {
//         const fetchData = async () => {
//             try {
//               const token = localStorage.getItem('token')
//               // console.log(token)
          
//          const result = await axios.get(`http://localhost:8080/api/order/allOrders`, 
//          {
//           headers: {
//             Authorization: token,
//           }
//         }
//         )
            
//             // setOrders(prevData => [...prevData, ...result.data]);
//             setOrders(result.data)
            
//             // console.log(result.data[0].orderRows[0])
//             console.log(result.data)
//             } catch (error ) {
//                 console.log('Error fetching data:', error);
//             }
//           }
//           fetchData();
          
//      }, [])


     
// // const myOrder = async () => {
// //   try{
// //   const result = await axios.get(`http://localhost:8080/api/order/myOrder`, {
// //     headers: {
// //       Authorization: verifyToken()
// //     }
// //   });
// //   setData(result.data);
// //   console.log(result.data);
// //   }catch (error) {
// //     console.log('Error fetching data:', error);
// //   }
// // }
     
//   const value = {
//       orders,
//       // myOrder
//     }
  
//     return (
//       <OrderContext.Provider value={value}>
//         { children }
//       </OrderContext.Provider>
//     )
//   }
  
//   export default OrderContextProvider
