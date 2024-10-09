import React, {useState, useEffect} from 'react'
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios'
import ProductComponent from './ProductComponent'
import Skeleton from 'react-loading-skeleton'
import { addItem } from '../store/slices/ProductsReducer';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {

    const data = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    const getProducts = async () => {
        setLoading(true);
        const products = await axios.get('https://fakestoreapi.com/products')
        dispatch(addItem(products.data))
        setFilter(products.data)  
        setLoading(false);  
    }

    const filterProduct = (category) => {
        const updatedList = Array.from(data).filter((x) => x.category === category);
        setFilter(updatedList);
    }

    const addToCart = () => {
        
    }
    useEffect(()=>{
        getProducts(); 
    },[])

    const Loading = () => {
        return (
            <>
            <div className='flex flex-wrap w-5/6 mx-auto justify-center items-center gap-5'>
                <Skeleton width={250} height={300}/>
                <Skeleton width={250} height={300}/>
                <Skeleton width={250} height={300}/>
                <Skeleton width={250} height={300}/>
            </div>
            </>
        )
    }

  return (
    <div className='text-center w-11/12 mx-auto'>
        <h1 className='text-5xl font-bold font-serif mt-5'>Latest Products</h1>
        <hr className='w-5/6 mx-auto mb-10'/>
        <div className='flex flex-wrap gap-2 justify-center mb-5'>
            <button className='px-0.5 text-sm sm:text-base sm:px-2 sm:py-1 border border-black/20 rounded-md hover:border-black'
            onClick={() => setFilter(data)}>All</button>
            <button className='px-0.5 text-sm sm:text-base sm:px-2 sm:py-1 border border-black/20 rounded-md hover:border-black'
            onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
            <button className='px-0.5 text-sm sm:text-base border border-black/20 rounded-md hover:border-black'
            onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
            <button className='px-0.5 text-sm sm:text-base border border-black/20 rounded-md hover:border-black'
            onClick={() => filterProduct("jewelery")}>Jewellery</button>
            <button className='px-0.5 text-sm sm:text-base border border-black/20 rounded-md hover:border-black'
            onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
        {loading?<Loading/>:filter?.length>0? 
            (
                <div className='container justify-center flex flex-wrap gap-10'>
                    {filter.map((product) => (
                        <ProductComponent key={product.id} product={product}/>
                    ))}
                </div>
            )
            :(<div>Loading... </div>)}
    </div>
  )
}

export default Products
