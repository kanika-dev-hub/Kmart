import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem} from '../store/slices/CartReducer';

const ProductDetails = () => {

  const { productId } = useParams();  
  const items = useSelector((state) => state.cart.cart_items)
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(0)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  
  const fetchProduct = async () => {
      setLoading(true)
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
        console.log(err);
      })  
      setProduct(response.data);
      setLoading(false)
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
  
  const Loading = () => {
    return (
        <>
        <div className='flex w-11/12 flex-col md:flex-row mx-auto mt-5 justify-center items-center gap-5 p-5'>
            <div>
              <Skeleton width={400} height={450}/>
            </div>
            <div>
              <Skeleton width={175} height={25}/>
              <Skeleton width={500} height={50}/>
              <Skeleton width={150} height={50}/>
              <Skeleton width={70} height={50}/>
              <Skeleton width={500} height={200}/>
              <div className='flex gap-4'>
                <Skeleton width={150} height={50}/>
                <Skeleton width={150} height={50}/>
              </div>
            </div>
        </div>
        </>
    )
  }

  return ( 
    <> 
    
    {loading?<Loading/>:(<div className='flex flex-col md:flex-row w-11/12 mx-auto items-center'>
    <div className='w-full md:w-2/5 mt-5 flex justify-center'>
      <img className="max-h-[400px] md:max-h-[500px] p-5" src={image} alt={id}/>
    </div>
    <div className='w-full md:w-3/5 md:mt-10 px-5 py-8  '>
        <p className='text-gray-500 text-xl p-2 font-medium'>{category?category.toUpperCase():category}</p>
        <p className='text-2xl md:text-5xl font-sans p-3'>{title}</p>
        <div className='flex gap-2 p-3'>
          <p className='flex gap-1 px-1 py-0.5 items-center bg-green-600'>{rate} <FaStar/> </p>
          <span>({count} reviews)</span>
        </div>
        <p className='text-xl md:text-3xl font-bold p-3'> $ {price}</p>
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
  </div>)}
  </>
  )
}

export default ProductDetails
