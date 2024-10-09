import React from 'react'
import EmptyCart from '../assets/empty_cart.png'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../store/slices/CartReducer';

const Cart = () => {

  const items = useSelector((state) => state.cart.cart_items)
  const item_list = useSelector((state) => state.cart.length)
  const dispatch = useDispatch()

  const getSum = () => {
    let counter = 0
    items.forEach(item => {
      counter += item.quantity*item.price
    });
    return counter 
  }
  const total = getSum();
  
  const addToCart = (product) => {
    dispatch(addItem(product))
  }

  const removeCart = (product) => {
    dispatch(removeItem(product))
  }

  return (
    <>
    <div className='flex flex-col md:flex-row flex-wrap p-4'>
      <div className='w-full md:w-3/4 p-2 md:p-5'>
      {items.length>0?items.map((item) => 
        (
          <div key={item.id} className='flex justify-center items-center border-b md:h-56 p-2 w-full my-4 border-b-gray-400'>
            <div className='w-1/4 md:p-4'>
              <img className="max-h-52" src={item.image} alt="alter"></img>
            </div>
            <div className='w-3/4 p-2 md:p-4'>
              <h1 className="font-sans font-medium text-sm md:text-2xl mb-2">{item.title}</h1>
              <h1 className='font-medium text-sm md:text-xl mb-2'>{item.quantity} X ${item.price} = ${item.price*item.quantity}</h1>
              <div className='flex my-2'>  
                <button onClick={() => removeCart(item)} className='px-2 py-1 border border-gray-400 text-gray-700'><FaMinus/></button>
                <p className='px-3 py-1 border border-gray-400 text-gray-700'>{item.quantity}</p>
                <button onClick={() => addToCart(item)} className='px-2 py-1 border border-gray-400 text-gray-700'><FaPlus/></button>
              </div>
            </div>
          </div>
        )):
        (<div className='flex flex-col items-center justify-center'>
          <img src={EmptyCart}></img>
        </div>)}
    </div>
    <div className='flex flex-col gap-3 w-full md:w-1/4 md:mt-10 md:p-5 p-2'>
      <div className='flex justify-between'>
        <h1>Items Total:</h1>
        <h1>$ {Math.round(total*100)/100}</h1>
      </div>
      <div className='flex justify-between'>
        <h1>Delivery:</h1>
        <h1>$ {(total<100)&&(total>0)?"15.0":"0.0"}</h1>
      </div>
      <div className='flex justify-between'>
        <h1>Tax:</h1>
        <h1>$ {Math.round(0.05*total*10)/10}</h1>
      </div>    
      <hr/>
      <div className='flex justify-between'>
        <h1>Estimated Total:</h1>
        <h1>$ {((total<100)&&(total>0))?Math.round((1.05*total + 15)*100)/100:Math.round((1.05*total)*100)/100}</h1>
      </div> 
      <button className='px-4 py-2 w-full mt-4 bg-gray-500 rounded-md'>Proceed to Checkout</button>
    </div>
  </div>
    </>
  )
}

export default Cart
