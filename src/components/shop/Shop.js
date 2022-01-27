import React,{useContext, useEffect, useState} from 'react';
import './Shop.css'
import { Link } from 'react-router-dom';
import { isInCart, itemsQuantity, shortClass, shorten } from '../../helpers/Helper';
import { ContextProvider } from '../datacontext/DataContextProvider';
import { reducerContextProvider } from '../reducer/ReducerProducts';
import { FaTrashAlt , FaPlus , FaMinus } from 'react-icons/fa';
import Loader from '../loader/Loader';
const Shop = () => {
    const DataContext=useContext(ContextProvider)
    const DateContextSplited=DataContext.filter(items=>items.category !=='electronics')
    
    const {state,dispatch}=useContext(reducerContextProvider)
    const [pageCounts,setPageCounts]=useState(0)
    const [activePage,setActivePage]=useState(1)
    const calculatePage=()=>{
      if(DateContextSplited.length % 9>0){
        return parseInt(DateContextSplited.length/9+1)
      }
      return parseInt(DateContextSplited.length/9)

    }
    useEffect(()=>{
      setPageCounts(calculatePage())
    },[DataContext])

    const handlePage=(pageNum)=>{
      setActivePage(pageNum)
      window.scrollTo(0,0)
    }
    return (
        <>
        <div className='shopContainer'>
          {DateContextSplited.length ?DateContextSplited.slice(9*(activePage-1),9*activePage).map(items=>
            items.category !=='electronics' &&
                <div className='productmain' key={items.id}>
                <img
                  className={`products ${shortClass(items.title)}`}
                  src={items.image}
                />
                <div className='productcontent'>
                  <h3>{shorten(items.title)}</h3>
                  <p>{items.price} $</p>
                  <Link to={`/product/${items.id}`}>details</Link>
                  <div className='addCartButton'>
                   
                   
                    {
                      itemsQuantity(state,items.id)===1 &&<button className='shopButtonSelected' onClick={()=>dispatch({type:'REMOVE_ITEM',payload:items})}><FaTrashAlt/></button>}
                      
                      {itemsQuantity(state,items.id)>1 &&<button className='shopButtonSelected' onClick={()=>dispatch({type:'DECREASE_ITEM',payload:items})}><FaMinus/></button>}
                      {itemsQuantity(state,items.id) >=1&&<span>{itemsQuantity(state,items.id)}</span>}
                      {isInCart(state,items.id) ?<button className='shopButtonSelected' onClick={()=>dispatch({type:'INCREASE_ITEM',payload:items})}><FaPlus/></button>
                    :
                    <button onClick={()=>dispatch({type:'ADD_TO_CART',payload:items})}>Add to Cart</button>}
                    
                    
                    
                  </div>
                </div>
              </div>
              )
            :
            <Loader/>}
            
        </div>
        <div>

          
              <ul className='pagination'>
              {new Array(pageCounts).fill(0).map((items,index)=>(
                 <li key={index}>
                 <button onClick={()=>handlePage(index+1)} className={activePage === index+1 ?'avtivePagination':''}>{index+1}</button>
               </li>
              ))}
             
                
              </ul>
            </div>
        </>
    );
};

export default Shop;