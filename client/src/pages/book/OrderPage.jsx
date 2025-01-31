import React from 'react'
import { useGetOrderByEmailQuery } from '../../store/features/orders/orderApi';
import { useAuth } from '../../context/AuthContext';


const OrderPage = () => {
    const {currentUser} = useAuth()
    const { data: orders=[], isLoading } = useGetOrderByEmailQuery(currentUser.email);
    if(isLoading) return <h1>Loading...</h1>
  return (
    <>
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4">
                {
                    orders.length ===0 ? "No Orders Found" : orders.map((order, index) => (
                        <div key={index} className="border p-4 mb-4">
                            <h3 className="text-xl font-semibold mb-2">Order {index + 1}</h3>
                            <p className="text-lg">Name: {order.name}</p>
                            <p className="text-lg">Email: {order.email}</p>
                            <p className="text-lg">Address: {order.address.toString()}</p>
                            <p className="text-lg">Phone: {order.phone}</p>
                            <p className="text-lg">Total Price: {order.totalPrice}</p>
                            <p className="text-lg">Order Items: {order.orderItems.toString()}</p>
                        </div>
                    ))
                }

            </h2>
        </div>
    </>
  )
}

export default OrderPage