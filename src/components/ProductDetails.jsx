import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem} from '../store/slices/CartReducer';

const ProductDetails = () => {

  const { productId } = useParams();  
  const items = useSelector((state) => state.cart.cart_items)
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch()
  
  const fetchProduct = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
        console.log(err);
      })  
      setProduct(response.data);
  }

  const set_quantity = () => {
    let index = items.find((item) => (item.id == productId))
    if(index){
      const val = index.quantity
      setQuantity(val)
    }
  }
 
  const addToCart = () => {
      dispatch(addItem(product))
      setQuantity(quantity+1)
  }

  const removeCart = () => {
    dispatch(removeItem(product))
    setQuantity(quantity-1)
}

  useEffect(() => {
    if(productId && productId!="") fetchProduct();  
    set_quantity();
  }, [productId])
  

  const {id, title, description, price, image, category, rating} = product
  const {rate, count} = {...rating}
  
  return ( 
    <> 
    <div className='flex w-11/12 mx-auto items-center'>
    <div className='w-2/5 mt-5'>
      <img className="w-11/12 max-h-[500px] p-5" src={image} alt={id}/>
    </div>
    <div className='w-3/5 mt-10  px-5 py-8  '>
        <p className='text-gray-500 text-xl p-2 font-medium'>{category?category.toUpperCase():category}</p>
        <p className='text-5xl font-sans p-3'>{title}</p>
        <div className='flex gap-2 p-3'>
          <p className='flex gap-1 px-1 py-0.5 items-center bg-green-600'>{rate} <FaStar/> </p>
          <span>({count})</span>
        </div>
        <p className='text-3xl font-bold p-3'> $ {price}</p>
        <p className='text-gray-600 font-normal p-3 font-sans'>{description}</p>
        <div className='flex gap-2 p-3'>
          {quantity>0 && 
          <button className='px-4 py-2 border border-black rounded-md hover:bg-black hover:text-white'
          onClick={removeCart}>-</button>}
          {quantity>0? 
          (<button className='px-4 py-2 border border-black rounded-md'>({quantity})</button>):
          (<button className='px-4 py-2 border border-black rounded-md hover:bg-black hover:text-white'
          onClick={addToCart}>{quantity==0?"Add to Cart":`(${quantity}) `}
          </button>)
          }
          {quantity>0 && 
            <button className="px-4 py-2 border border-black rounded-md hover:bg-black hover:text-white"
          onClick={addToCart}>+</button>
          }
          <NavLink to="/cart" className='px-4 py-2 border text-white border-black bg-black rounded-md hover:bg-white hover:text-black'>Go to Cart</NavLink>
        </div>
    </div>
  </div>
  </>
  )
}

export default ProductDetails
