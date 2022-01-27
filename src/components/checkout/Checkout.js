import React,{useContext} from 'react';
import { isInCart, itemsQuantity,  shorten } from '../../helpers/Helper';
import { reducerContextProvider } from '../reducer/ReducerProducts';
import { FaTrashAlt , FaPlus , FaMinus } from 'react-icons/fa';
import styles from './Checkout.module.css'
import { Link } from 'react-router-dom';

const Checkout = () => {
    const {state,dispatch}=useContext(reducerContextProvider)
    return (
        
        <>
         {state.itemsCounter ?<div className={styles.checkoutContainer}>
        <div className={styles.checkoutProducts}>
        {state.selectedItems.map(items=>
            <div className={styles.checkoutProductContent} key={items.id}>
            <img
              className={styles.productsImgCheckout}
              src={items.image}
            />
            <div className={styles.checkoutProductTitle}>
              <h3>{shorten(items.title)}</h3>
              <p>{items.price*items.quantity} $</p>
              
              <div className={styles.checkoutProductButtons}>
               
               
                {
                  itemsQuantity(state,items.id)===1 &&<button className={styles.checkoutPlusProduct} onClick={()=>dispatch({type:'REMOVE_ITEM',payload:items})}><FaTrashAlt/></button>}
                  
                  {itemsQuantity(state,items.id)>1 &&<button className={styles.checkoutPlusProduct} onClick={()=>dispatch({type:'DECREASE_ITEM',payload:items})}><FaMinus/></button>}
                  {itemsQuantity(state,items.id) >=1&&<span>{itemsQuantity(state,items.id)}</span>}
                  {isInCart(state,items.id) &&<button className={styles.checkoutPlusProduct} onClick={()=>dispatch({type:'INCREASE_ITEM',payload:items})}><FaPlus/></button>
                }
                
                
                
              </div>
            </div>
          </div>
          )}
        </div>
        <div className={styles.checkoutContent}>
                <h4>TotalItems:<span>{state.itemsCounter}</span></h4>
                <h4>TotalPayments:<span>{state.total} $</span></h4>
                <div>
                    <button className={styles.checkoutCLear} onClick={()=>dispatch({type:'CLEAR'})}>Clear</button>
                    <button className={styles.checkoutCheckout} onClick={()=>dispatch({type:'CHECKOUT'})}>Checkout</button>
                </div>
        </div>
    </div>
    :
    null}
        
       {state.checkout && <div className={styles.checkoutSuccess}>
           <h3>Checkout Successfully</h3>
           <Link to='/shop'>Buy More</Link>
           </div>}
           {!state.checkout && state.itemsCounter===0 && 
           <div className={styles.checkoutEmpty}>
           <h3>Your Cart Is Empty</h3>
           <Link to='/shop'>Buy Now</Link>
           </div>
           }
        </>
    );
};

export default Checkout;