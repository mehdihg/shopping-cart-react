import React,{useContext, useState} from 'react';
import {Link} from 'react-router-dom'
import logo from './logo.svg'
import styles from './Navbar.module.css'
import {FaCartPlus,FaBars } from 'react-icons/fa';
import { reducerContextProvider } from '../reducer/ReducerProducts';
const Navbar = () => {
const {state}=useContext(reducerContextProvider)
const [menu,setMenu]=useState(false)
    return (
        <>
        <div className={styles.navbar}>
         <div className={styles.logoplace}>
             <img className={styles.logo} src={logo} />
        </div>
        <div className={styles.menu}>
         <ul className={styles.navlist}>
         <li> <Link to='/'>Home</Link></li>
         <li> <Link to='/shop'>Shop</Link></li>
        </ul>   
        </div> 
        <div className={styles.cartIcon}>
        <Link to='/checkout'><FaCartPlus/><span>{state.itemsCounter}</span></Link>
        
        </div>
        <div className={styles.burgerMenu}>
        <FaBars onClick={()=>setMenu(!menu)}/>

        </div> 
        
        </div>
        
        <ul className={menu ? styles.showMenu:styles.hideMenu}>
         <li> <Link to='/'>Home</Link></li>
         <li> <Link to='/shop'>Shop</Link></li>
        </ul> 
        
        </>
    );
};

export default Navbar;